import {
    BlockNode,
    ConstantNode, ExprNode,
    FuncDeclNode,
    ObjectNode,
    ProgramNode, ReturnNode,
    SemBaseVisitor,
    SemNode,
    VarDeclNode
} from "./nodes";
import {PRIMITIVE_TYPES, PrimitiveType, PrimitiveTypeInfo, TypeInfo} from "./typeInfo";
import {SemFunction, SemObject, SemType, SemValue, SemVariable} from "./objects";


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

        this.funcStack.push(node);
        this.visit(node.body);
        this.preAlloc(node.body, node);
        this.funcStack.pop();

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
        this.addGlobalObject(node.name, obj);
        return nil;
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
            node.obj = result;
        }
        if (!this.checkType(return_type, func_return_type)) {
            throw new Error(`Types '${return_type.name}' and '${func_return_type.name}' do not match`);
        }
        return node.obj;
    }
}