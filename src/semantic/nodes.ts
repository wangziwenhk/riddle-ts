import {TypeInfo} from "./typeInfo";
import {SemFunction, SemObject, SemVariable} from "./visitor";
import llvm from "llvm-bindings";

export abstract class SemBaseVisitor {
    visit(node: SemNode) {
        return node.accept(this)
    }

    visitProgram(node: ProgramNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
        return;
    }

    visitConstant(_node: ConstantNode) {
    }

    visitBlock(node: BlockNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
    }

    visitFuncDecl(node: FuncDeclNode) {
        this.visit(node.return_type);
        this.visit(node.body);
    }

    visitVarDecl(node: VarDeclNode) {
        if (node.type) {
            this.visit(node.type);
        }
        if (node.value) {
            this.visit(node.value);
        }
    }

    visitDeclArg(node: DeclArgNode) {
        this.visit(node.type)
    }

    visitObject(_node: ObjectNode) {
    }
}

export abstract class SemNode {
    obj!: SemObject;
    line!: number;

    abstract accept(visitor: SemBaseVisitor): any;
}

export class ProgramNode extends SemNode {
    children: SemNode[] = [];

    constructor() {
        super();
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitProgram(this);
    }
}

export abstract class ExprNode extends SemNode {
    protected constructor() {
        super();
    }
}

export class ConstantNode extends ExprNode {
    value: any;
    type: TypeInfo;

    constructor(value: any, type: TypeInfo) {
        super();
        this.value = value;
        this.type = type;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitConstant(this);
    }
}

export class BlockNode extends ExprNode {
    children: ExprNode[];

    constructor(children: ExprNode[]) {
        super();
        this.children = children;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitBlock(this);
    }
}

export class DeclArgNode extends SemNode {
    name: string;
    type: ExprNode;

    constructor(name: string, type: ExprNode) {
        super();
        this.name = name;
        this.type = type;
    }

    accept(visitor: SemBaseVisitor): any {
        return visitor.visitDeclArg(this);
    }
}

export class FuncDeclNode extends ExprNode {
    name: string;
    body: BlockNode;
    return_type: ExprNode;
    alloc_list: Array<AllocNode> = []
    obj!: SemFunction;

    constructor(name: string, return_type: ExprNode, body: BlockNode) {
        super();
        this.name = name;
        this.body = body;
        this.return_type = return_type;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitFuncDecl(this);
    }
}

export class AllocNode {
    type: TypeInfo;
    alloc: llvm.AllocaInst | undefined;

    constructor(type: TypeInfo) {
        this.type = type;
    }
}

export class VarDeclNode extends ExprNode {
    name: string;
    type: ExprNode | undefined;
    value: ExprNode | undefined;
    obj!: SemVariable;

    constructor(name: string, type: ExprNode | undefined, value: ExprNode | undefined) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitVarDecl(this)
    }
}

export class ObjectNode extends ExprNode {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitObject(this)
    }
}