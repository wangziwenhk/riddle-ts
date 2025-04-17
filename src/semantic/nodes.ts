import {Value} from "./value";
import {PrimitiveTypeInfo, Types} from "./types";

const void_type: PrimitiveTypeInfo = {
    kind: 'primitive',
    name: 'void',
}

export abstract class SemNode {
    kind!: string;
}

export class ProgramNode extends SemNode {
    children: SemNode[] = [];
    kind: string = "program";
}

export abstract class ExprNode extends SemNode {
    value!: Value;
    type: Types;

    protected constructor(type: Types) {
        super();
        this.type = type;
    }
}

export class ConstantNode extends ExprNode {
    kind: string = "constant";

    constructor(value: Value) {
        super(value.type);
        this.value = value;
    }
}

export class FuncDeclNode extends ExprNode {
    kind: string = "funcDecl";
    name: string;

    constructor(name: string) {
        super(void_type);
        this.name = name;
    }
}

export class BlockNode extends ExprNode {
    children: ExprNode[];

    constructor(children: ExprNode[]) {
        super(children[children.length - 1].type);
        this.children = children;
    }
}