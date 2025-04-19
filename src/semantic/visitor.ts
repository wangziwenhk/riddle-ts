import {
    BlockNode,
    ConstantNode,
    FuncDeclNode,
    ObjectNode,
    ProgramNode,
    SemBaseVisitor,
    SemNode,
    VarDeclNode
} from "./nodes";
import {PrimitiveTypeInfo, Types} from "./types";

/**
 * 表示一个语义分析对象
 */
export abstract class SemObject {
    kind!: string;

    abstract getValue(): any;
}

class SemValue extends SemObject {
    type: Types;
    value: any;

    constructor(value: any, type: Types) {
        super();
        this.type = type;
        this.value = value;
    }

    getValue(): any {
        return this.value;
    }
}

class SemVariable extends SemValue {
    kind = "variable";
    name: string;

    constructor(name: string, type: Types, value?: SemValue) {
        let t = undefined
        if (value) {
            t = value.value;
        }

        super(t, type);
        this.name = name;
    }

    getValue(): any {
        return this.value.value;
    }
}

class SemType extends SemObject {
    kind = "type";
    type: Types;

    constructor(type: Types) {
        super();
        this.type = type;
    }

    getValue(): any {
        return undefined;
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

    visitFuncDecl(node: FuncDeclNode) {
        this.visit(node.body)
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
        let type: Types;
        if (node.type) {
            const result = this.visit(node.type)
            if (result.kind !== 'type') {
                throw new Error(`Unknown type for ${result}`);
            }
            type = (<SemType>result).type;
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