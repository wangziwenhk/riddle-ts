import {TypeInfo} from "./typeInfo";
import {AllocNode} from "./nodes";

/**
 * 表示一个语义分析对象
 */
export abstract class SemObject {
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
    type: TypeInfo;

    constructor(type: TypeInfo) {
        super();
        this.type = type;
    }
}

export class SemFunction extends SemObject {
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