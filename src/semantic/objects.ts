import {ClassTypeInfo, TypeInfo} from "./typeInfo";
import {AllocNode} from "./nodes";
import llvm from "@wangziwenhk/llvm-bindings";

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
    llvm_func: llvm.Function | undefined;
    theClass: SemClass | undefined;

    constructor(name: string, return_type: TypeInfo, param: SemVariable[] = []) {
        super();
        this.name = name;
        this.return_type = return_type;
        this.param = param;
    }
}

export class SemClass extends SemType {
    name: string;
    members: Array<SemVariable>;
    methods: Array<SemFunction>;

    constructor(name: string, members: Array<SemVariable>, methods: Array<SemFunction>, type: ClassTypeInfo) {
        super(type);
        this.name = name;
        this.members = members;
        this.methods = methods;
    }

    getMember(name: string): SemVariable | SemFunction {
        const member = this.members.find(m => m.name === name);
        if (member) {
            return member;
        }

        const method = this.methods.find(m => m.name === name);
        if (method) {
            return method;
        }

        throw new Error(`Member or method '${name}' not found in class '${this.name}'`);
    }

    getMemberIndex(name: string) {
        const index = this.members.findIndex(m => m.name === name);
        if (index === -1) {
            throw new Error(`Member '${name}' not found in class '${this.name}'`);
        }
        return index;
    }
}