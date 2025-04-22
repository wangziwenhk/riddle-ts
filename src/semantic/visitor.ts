import {
    AllocNode,
    BlockNode,
    ConstantNode, ExprNode,
    FuncDeclNode,
    ObjectNode,
    ProgramNode,
    SemBaseVisitor,
    SemNode,
    VarDeclNode
} from "./nodes";
import {PRIMITIVE_TYPES, PrimitiveType, PrimitiveTypeInfo, TypeInfo} from "./typeInfo";

/**
 * 表示一个语义分析对象
 */
export abstract class SemObject {
    kind!: string;
}

export class SemValue extends SemObject {
    type: TypeInfo;
    value: any;

    constructor(value: any, type: TypeInfo) {
        super();
        this.type = type;
        this.value = value;
    }
}

export class SemVariable extends SemValue {
    kind = "variable";
    name: string;
    alloc: AllocNode;

    constructor(name: string, type: TypeInfo, value?: SemValue) {
        let t = undefined
        if (value) {
            t = value.value;
        }

        super(t, type);
        this.name = name;
        this.alloc = new AllocNode(type)
    }
}

export class SemType extends SemObject {
    kind = "type";
    type: TypeInfo;

    constructor(type: TypeInfo) {
        super();
        this.type = type;
    }
}

export class SemFunction extends SemObject {
    kind = "function";
    name: string;
    param: SemVariable[];
    return_type: TypeInfo;

    constructor(name: string, return_type: TypeInfo, param: SemVariable[] = []) {
        super();
        this.name = name;
        this.return_type = return_type;
        this.param = param;
    }
}

const voidTy: PrimitiveTypeInfo = {
    kind: "primitive",
    name: "void",
}

const nil = new SemValue(
    undefined,
    voidTy,
)

export class SemanticAnalysis extends SemBaseVisitor {
    symbolTable: Map<string, Array<SemObject>> = new Map<string, Array<SemObject>>();
    definedTable: Array<Set<string>> = [];

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
        this.visit(node.body)
        this.preAlloc(node.body, node);
        const return_type = this.visit(node.return_type);
        if (!(return_type instanceof SemType)) {
            throw new Error("Unrecognized type");
        }
        const obj = new SemFunction(node.name, return_type.type);
        node.obj = obj;
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
        if (node.type) {
            const result = this.visit(node.type)
            if (!(result instanceof SemType)) {
                throw new Error(`Unknown type for ${result}`);
            }
            type = (result).type;
        } else {
            type = value!.type;
        }
        const obj = new SemVariable(node.name, type, value);
        node.obj = obj;
        this.addGlobalObject(node.name, obj);
        return nil;
    }

    visitObject(node: ObjectNode) {
        const result = this.getGlobalObject(node.name);
        node.obj = result;
        return result;
    }
}