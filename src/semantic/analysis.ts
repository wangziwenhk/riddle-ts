import {
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

const voidTy: PrimitiveTypeInfo = new PrimitiveTypeInfo("void");

const nil = new SemValue(
    undefined,
    voidTy,
)

export class SemanticAnalysis extends SemBaseVisitor {
    symbolTable: Map<string, Array<SemObject>> = new Map<string, Array<SemObject>>();
    definedTable: Array<Set<string>> = [];
    funcStack = new Array<FuncDeclNode>();

    constructor() {
        super();
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
    raiseScope() {
        this.definedTable.push(new Set());
    }

    exitScope() {
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
        if (this.definedTable[this.definedTable.length - 1].has(name)) {
            throw new Error(`Object already exists: ${name}`);
        }
        if (!this.symbolTable.has(name)) {
            this.symbolTable.set(name, new Array<SemObject>());
        }
        this.symbolTable.get(name)?.push(obj)
        this.definedTable[this.definedTable.length - 1].add(name);
    }

    getGlobalObject(name: string) {
        const result = this.symbolTable.get(name);
        if (result === undefined) {
            throw `Object does not exist: ${name}`;
        }
        return result[result.length - 1];
    }

    visit(node: SemNode): SemObject {
        return node.accept(this)
    }

    visitProgram(node: ProgramNode) {
        this.raiseScope();
        this.registerPrimitiveType()
        node.children.forEach(child => {
            this.visit(child);
        })
        this.exitScope();
    }

    visitBlock(node: BlockNode) {
        let result: SemObject = nil;
        this.raiseScope();
        node.children.forEach(child => {
            result = this.visit(child);
        })
        this.exitScope();
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
            } else {
                throw new Error("Unrecognized type");
            }
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

        this.raiseScope();
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
        this.exitScope();

        return obj;
    }

    visitConstant(node: ConstantNode) {
        const result = new SemValue(node.value, node.type)
        node.obj = result;
        return result;
    }

    visitVarDecl(node: VarDeclNode) {
        let value: SemValue | undefined;
        if (node.value) {
            value = <SemValue>this.visit(node.value);
        }
        let type: TypeInfo;
        // 保证类型存在
        if (node.type) {
            const result = this.visit(node.type)
            if (!(result instanceof SemType)) {
                throw new Error(`Unknown type for ${result}`);
            }
            type = result.type;
        } else {
            type = value!.type;
        }
        // 检测是否为 void 类型
        if (type instanceof PrimitiveTypeInfo && type.name == 'void') {
            throw new Error(`void cannot be used as a variable type`);
        }
        // 检测 value 类型是否和 type 匹配
        if (value) {
            if (!this.checkType(value?.type, type)) {
                throw new Error(`Types '${type.name}' and '${value?.type?.name}' do not match`);
            }
        }
        const obj = new SemVariable(node.name, type, value);
        node.obj = obj;
        if (node.isGlobal) {
            this.addGlobalObject(node.name, obj);
        }
        return obj;
    }

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

        this.raiseScope();
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

        this.exitScope();
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
}