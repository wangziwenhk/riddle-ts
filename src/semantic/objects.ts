import {ClassTypeInfo, TypeInfo} from "./typeInfo";
import {AllocNode} from "./nodes";
import llvm from "@wangziwenhk/llvm-bindings";
import {ModifierList} from "./modifier";

/**
 * 表示一个语义分析对象
 */
export abstract class SemObject {
    abstract clone(): SemObject;
}

export class SemValue extends SemObject {
    type: TypeInfo;
    value: any;

    constructor(value: any, type: TypeInfo) {
        super();
        this.type = type;
        this.value = value;
    }

    clone(): SemValue {
        return new SemValue(this.value, this.type);
    }
}

export class SemVariable extends SemValue {
    name: string;
    alloc: AllocNode;
    isConst: boolean;

    constructor(name: string, type: TypeInfo, value: SemValue | undefined, isConst: boolean) {
        super(value, type);
        this.name = name;
        this.alloc = new AllocNode(type)
        this.isConst = isConst;
    }

    clone(): SemVariable {
        const obj = new SemVariable(this.name, this.type, this.value, this.isConst);
        obj.alloc = this.alloc;
        return obj;
    }
}

export class SemType extends SemObject {
    type: TypeInfo;

    constructor(type: TypeInfo) {
        super();
        this.type = type;
    }

    clone(): SemType {
        return new SemType(this.type);
    }
}

export class SemFunction extends SemObject {
    name: string;
    param: SemVariable[];
    return_type: TypeInfo;
    llvm_func: llvm.Function | undefined;
    theClass: SemClass | undefined;
    modifiers: ModifierList;

    constructor(name: string, return_type: TypeInfo, param: SemVariable[] = [], modifiers = new ModifierList()) {
        super();
        this.name = name;
        this.return_type = return_type;
        this.param = param;
        this.modifiers = modifiers;
    }

    clone(): SemFunction {
        const obj = new SemFunction(this.name, this.return_type, this.param, this.modifiers);
        obj.theClass = this.theClass;
        obj.llvm_func = this.llvm_func;
        return obj;
    }
}

export class SemClass extends SemType {
    name: string;
    members: Array<SemVariable>;
    methods: Array<SemFunction>;
    type: ClassTypeInfo;

    constructor(name: string, members: Array<SemVariable>, methods: Array<SemFunction>, type: ClassTypeInfo) {
        super(type);
        this.name = name;
        this.members = members;
        this.methods = methods;
        this.type = type;
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

    clone(): SemClass {
        return new SemClass(this.name, this.members, this.methods, this.type);
    }
}