import {
    BinaryOpNode,
    BlockNode, CallNode, ClassDeclNode,
    ConstantNode, DeclArgNode, ExprNode,
    FuncDeclNode, InitListNode, MemberAccessNode,
    ObjectNode,
    ProgramNode, ReturnNode,
    SemBaseVisitor,
    SemNode,
    VarDeclNode
} from "./nodes";
import {ClassTypeInfo, PRIMITIVE_TYPES, PrimitiveType, PrimitiveTypeInfo, TypeInfo} from "./typeInfo";
import {SemClass, SemFunction, SemObject, SemType, SemValue, SemVariable} from "./objects";
import llvm from "@wangziwenhk/llvm-bindings";

const voidTy: PrimitiveTypeInfo = new PrimitiveTypeInfo("void");

const nil = new SemValue(
    undefined,
    voidTy,
)

class OpKey {
    constructor(
        public readonly op: string,
        public readonly t1: TypeInfo,
        public readonly t2: TypeInfo
    ) {}

    toString(): string {
        return `${this.op}_${this.t1.name}_${this.t2.name}`;
    }

    equals(other: OpKey): boolean {
        return this.op === other.op &&
            this.t1.name === other.t1.name &&
            this.t2.name === other.t2.name;
    }
}

export class SemanticAnalysis extends SemBaseVisitor {
    symbolTable: Map<string, Array<SemObject>> = new Map<string, Array<SemObject>>();
    definedTable: Array<Set<string>> = [];
    funcStack = new Array<FuncDeclNode>();
    opFunction = new Map<string, (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => llvm.Value>();

    constructor() {
        super();
        this.registerOpFunction("+", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateAdd(left, right);
        });
        this.registerOpFunction("-", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateSub(left, right);
        });
        this.registerOpFunction("*", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateMul(left, right);
        });
        this.registerOpFunction("/", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateSDiv(left, right);
        });
        this.registerOpFunction("%", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateSRem(left, right);
        });
        this.registerOpFunction("==", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpEQ(left, right);
        });
        this.registerOpFunction("!=", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpNE(left, right);
        });
        this.registerOpFunction("<", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpSLT(left, right);
        });
        this.registerOpFunction("<=", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpSLE(left, right);
        });
        this.registerOpFunction(">", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpSGT(left, right);
        });
        this.registerOpFunction(">=", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            return builder.CreateICmpSGE(left, right);
        });
        this.registerOpFunction("&&", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            const lhs = builder.CreateICmpNE(left, builder.getFalse());
            const rhs = builder.CreateICmpNE(right, builder.getFalse());
            return builder.CreateAnd(lhs, rhs);
        });
        this.registerOpFunction("||", (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => {
            const lhs = builder.CreateICmpNE(left, builder.getFalse());
            const rhs = builder.CreateICmpNE(right, builder.getFalse());
            return builder.CreateOr(lhs, rhs);
        });
    }

    private registerOpFunction(op: string, func: (left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => llvm.Value) {
        PRIMITIVE_TYPES.forEach(i => {
            if (i === 'void') {
                return;
            }
            const iT = new PrimitiveTypeInfo(i);
            PRIMITIVE_TYPES.forEach(j => {
                if (j === 'void') {
                    return;
                }
                const jT = new PrimitiveTypeInfo(j);
                this.opFunction.set(new OpKey(op, iT, jT).toString(), func);
            })
        })
    }

    private registerPrimitiveType() {
        const reg = (name: PrimitiveType) => {
            this.addGlobalObject(name, new SemType(new PrimitiveTypeInfo(name)));
        }
        PRIMITIVE_TYPES.forEach(type => {
            reg(type)
        })
    }

    /**
     * 提升作用域
     */
    enterScope() {
        this.definedTable.push(new Set());
    }

    leaveScope() {
        this.definedTable[this.definedTable.length - 1].forEach(v => {
            const t: Array<SemObject> | undefined = this.symbolTable.get(v);
            if (t === undefined) {
                throw new Error("Can't find symbol table");
            }
            t.pop();
        })
        this.definedTable.pop();
    }

    addGlobalObject(name: string, obj: SemObject) {
        if (this.definedTable.at(-1)?.has(name)) {
            throw new Error(`Object already exists: ${name}`);
        }
        if (!this.symbolTable.has(name)) {
            this.symbolTable.set(name, []);
        }
        this.symbolTable.get(name)?.push(obj);
        this.definedTable.at(-1)?.add(name);

    }

    getGlobalObject(name: string) {
        const entries = this.symbolTable.get(name);
        if (!entries || entries.length === 0) {
            throw new Error(`Object does not exist: ${name}`);
        }
        return entries[entries.length - 1];
    }

    visit(node: SemNode): SemObject {
        return node.accept(this)
    }

    visitProgram(node: ProgramNode) {
        this.enterScope();
        this.registerPrimitiveType()
        node.children.forEach(child => {
            this.visit(child);
        })
        this.leaveScope();
    }

    visitBlock(node: BlockNode) {
        let result: SemObject = nil;
        this.enterScope();
        node.children.forEach(child => {
            result = this.visit(child);
        })
        this.leaveScope();
        node.obj = result;
        return result;
    }


    visitDeclArg(node: DeclArgNode) {
        const type_obj = this.visit(node.type);
        if (!(type_obj instanceof SemType)) {
            throw new Error("The type representation of the parameter is not a type");
        }
        const type = type_obj.type;
        node.obj = new SemVariable(node.name, type);
        this.addGlobalObject(node.name, node.obj);
        return node.obj;
    }

    /**
     * 提前处理 alloc 到函数开始部分
     * @param node 被遍历的 node
     * @param func 函数
     */
    private preAlloc(node: ExprNode, func: FuncDeclNode) {
        if ('children' in node && node.children instanceof Array) {
            node.children.forEach(child => {
                this.preAlloc(child, func);
            })
        }
        if (node instanceof VarDeclNode) {
            if (node.obj) {
                func.alloc_list.push(node.obj.alloc)
                return;
            }
            throw new Error("Unrecognized type");
        }
    }


    visitFuncDecl(node: FuncDeclNode) {
        const return_type = this.visit(node.return_type);
        if (!(return_type instanceof SemType)) {
            throw new Error("Unrecognized type");
        }
        const obj = new SemFunction(node.name, return_type.type);
        node.obj = obj;

        this.addGlobalObject(node.name, node.obj);

        this.enterScope();
        // 处理函数参数
        node.params.forEach(param => {
            const result = this.visitDeclArg(param);
            obj.param.push(result)
        })

        // 处理函数体
        this.funcStack.push(node);
        this.visit(node.body);
        this.preAlloc(node.body, node);
        this.funcStack.pop();
        this.leaveScope();

        return obj;
    }

    visitConstant(node: ConstantNode) {
        const result = new SemValue(node.value, node.type)
        node.obj = result;
        return result;
    }

    visitVarDecl(node: VarDeclNode) {
        const semValue = node.value ? <SemValue>this.visit(node.value) : undefined;
        const resolvedType = this.resolveType(node, semValue);

        if (resolvedType instanceof PrimitiveTypeInfo && resolvedType.name === 'void') {
            throw new Error(`void cannot be used as a variable type`);
        }

        this.validateValueType(semValue, resolvedType);

        const semVariable = new SemVariable(node.name, resolvedType, semValue);
        node.obj = semVariable;

        if (node.isGlobal) {
            this.addGlobalObject(node.name, semVariable);
        }

        return semVariable;
    }

    /**
     * 解析给定变量声明节点的类型。
     *
     * @param node 需要为其解析类型的变量声明节点。
     * @param semValue 与节点关联的语义值（如果可用）。
     * @return 变量声明节点的解析TypeInfo。
     */
    private resolveType(node: VarDeclNode, semValue: SemValue | undefined): TypeInfo {
        if (node.type) {
            const result = this.visit(node.type);
            if (!(result instanceof SemType)) {
                throw new Error(`Unknown type for ${result}`);
            }
            return result.type;
        }
        return semValue?.type ?? nil.type;
    }

    /**
     * 验证给定语义值的类型是否与解析的类型匹配。
     *
     * @param semValue 要验证的语义值，可能未定义。
     * @param resolvedType 执行验证所依据的预期类型信息。
     * @return 此方法不返回值。如果类型验证失败，则引发错误。
     */
    private validateValueType(semValue: SemValue | undefined, resolvedType: TypeInfo): void {
        if (semValue && !this.checkType(semValue.type, resolvedType)) {
            throw new Error(`Types '${resolvedType.name}' and '${semValue.type?.name}' do not match`);
        }
    }

    /**
     * 检查两个类型信息是否兼容。
     *
     * @param t1 第一个类型信息对象，用于比较的类型。
     * @param t2 第二个类型信息对象，用于比较的类型。
     * @return 如果两个类型兼容，则返回 true；否则返回 false。
     */
    private checkType(t1: TypeInfo, t2: TypeInfo) {
        if (t1 === t2) {
            return true;
        }
        // 类型提升/降低
        if (t1 instanceof PrimitiveTypeInfo && t2 instanceof PrimitiveTypeInfo) {
            return t1.name !== 'void' && t2.name !== 'void';
        }
        //todo 添加其他的 cast 解析
        return false;
    }

    visitObject(node: ObjectNode) {
        const result = this.getGlobalObject(node.name);
        node.obj = result;
        return result;
    }

    visitReturn(node: ReturnNode) {
        const func_return_type = this.funcStack[this.funcStack.length - 1].obj!.return_type;
        let return_type: TypeInfo = new PrimitiveTypeInfo("void");
        if (node.value) {
            const result = this.visit(node.value);
            if (!(result instanceof SemValue)) {
                throw new Error(`Result Must be a Value`);
            }
            return_type = result.type;
        } else {
        }
        if (!this.checkType(return_type, func_return_type)) {
            throw new Error(`Types '${return_type.name}' and '${func_return_type.name}' do not match`);
        }
        return undefined;
    }

    visitCall(node: CallNode) {
        const value = this.visit(node.value);
        if (!(value instanceof SemFunction)) {
            throw new Error("Object must be a Function");
        }
        // 修改以支持 this 参数
        if (value.theClass) {
            const theThis = (<MemberAccessNode>node.value).left;
            node.params.unshift(theThis);
        }
        node.params.forEach(param => {
            const result = this.visit(param);
            if (!(result instanceof SemValue)) {
                throw new Error(`Result Must be a Value`);
            }
        })
        node.obj = value;
        return new SemVariable("", node.obj.return_type, new SemValue(value, node.obj.return_type));
    }

    visitInitList(node: InitListNode) {
        return super.visitInitList(node);
    }


    visitClassDecl(node: ClassDeclNode) {
        let members = new Array<SemVariable>();
        let methods = new Array<SemFunction>();
        let class_type = new ClassTypeInfo(node.name, []);
        let obj = new SemClass(node.name, members, methods, class_type);
        node.obj = obj;
        class_type.the_class = obj;
        this.addGlobalObject(node.name, obj);

        this.enterScope();
        node.body.forEach(child => {
            if (child instanceof VarDeclNode) {
                child.isGlobal = false;
                const result = this.visit(child);
                if (!(result instanceof SemVariable)) {
                    throw new Error("result not a Variable");
                }
                members.push(result);
            } else if (child instanceof FuncDeclNode) {
                // 为函数添加 this
                child.params.unshift(new DeclArgNode("this", new ObjectNode(node.name)));
                const result = this.visit(child);
                if (!(result instanceof SemFunction)) {
                    throw new Error("result not a Function");
                }
                methods.push(result);
                result.theClass = obj;
            }
        });

        members.forEach(variable => {
            class_type.members.push(variable.type);
        })

        this.leaveScope();
        return obj;
    }

    visitMemberAccess(node: MemberAccessNode) {
        const lhs = this.visit(node.left);
        if (lhs instanceof SemVariable) {
            const type = lhs.type;
            if (!(type instanceof ClassTypeInfo)) {
                throw new Error("The left side of the member access operator has a non-class type");
            }
            const the_class = type.the_class;
            if (the_class === undefined) {
                throw new Error("The Class is not defined");
            }
            const obj = the_class.getMember(node.right);
            node.left_type = type;
            if (obj instanceof SemVariable) {
                node.right_type = obj.type;
                return new SemVariable("", node.right_type, obj);
            } else {
                node.right_type = obj.return_type;
                return obj;
            }
        }
        //todo 添加更多方法解析
        return nil;
    }

    visitBinaryOp(node: BinaryOpNode) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);

        if (!(left instanceof SemValue) || !(right instanceof SemValue)) {
            throw new Error("Both operands must be values");
        }

        // todo 检查是否有运算符重载
        if (!this.checkType(left.type, right.type)) {
            throw new Error(`Operand types '${left.type.name}' '${node.operator}' '${right.type.name}' are incompatible`);
        }

        const opFunc = this.opFunction.get(new OpKey(node.operator, left.type, right.type).toString());
        if (opFunc === undefined) {
            throw new Error(`Operand types '${left.type.name}' '${node.operator}' '${right.type.name}' are incompatible`);
        }
        node.func = opFunc;

        const resultType = this.inferBinaryOpResultType(node.operator, left.type, right.type);
        const obj = new SemValue(undefined, resultType);
        node.obj = obj;
        return obj;
    }

    /**
     * 推断二元操作符的结果类型。
     * 根据操作符和两个操作数的类型信息，返回操作结果的类型信息。
     * 如果操作符或操作数类型不受支持，则抛出错误。
     *
     * @param operator 二元操作符，例如 "+"、"-"、"==" 等。
     * @param t1 第一个操作数的类型信息。
     * @param t2 第二个操作数的类型信息。
     * @return 推断出的二元操作结果的类型信息。
     */
    private inferBinaryOpResultType(operator: string, t1: TypeInfo, t2: TypeInfo): TypeInfo {
        if (t1 instanceof PrimitiveTypeInfo && t2 instanceof PrimitiveTypeInfo) {
            if (["+", "-", "*", "/", "%"].includes(operator)) {
                return t1.name === "float" || t2.name === "float" ? new PrimitiveTypeInfo("float") : t1;
            } else if (["<", ">", "<=", ">="].includes(operator)) {
                return new PrimitiveTypeInfo("bool");
            } else if (["==", "!="].includes(operator)) {
                return new PrimitiveTypeInfo("bool");
            } else if (["&&", "||"].includes(operator)) {
                return new PrimitiveTypeInfo("bool");
            }
        }
        throw new Error(`Unsupported binary operation '${operator}' for types '${t1.name}' and '${t2.name}'`);
    }
}