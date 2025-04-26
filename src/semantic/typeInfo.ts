import llvm from "llvm-bindings";
import {SemClass} from "./objects";

export const PRIMITIVE_TYPES = [
    'int',
    'short',
    'long',
    'char',
    'float',
    'bool',
    'void',
    'double',
] as const;

export type PrimitiveType = typeof PRIMITIVE_TYPES[number];

export abstract class TypeInfo {
    name!: string;

    isFloatPointTy(): boolean {
        return false;
    }
}

export class PrimitiveTypeInfo extends TypeInfo {
    name: PrimitiveType

    constructor(name: PrimitiveType) {
        super();
        this.name = name;
    }

    isFloatPointTy() {
        return this.name === 'float' || this.name === 'double';
    }
}

export class CustomTypeInfo extends TypeInfo {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }
}

export class ClassTypeInfo extends TypeInfo {
    name: string;
    members: Array<TypeInfo>;
    llvm_type: llvm.StructType | undefined;
    the_class: SemClass | undefined;

    constructor(name: string, members: Array<TypeInfo>) {
        super();
        this.name = name;
        this.members = members;
    }
}

/**
 * 模板参数表示
 */
export class TemplateParamInfo {
    /**
     * 模板参数名
     */
    name: string;
    constraints?: TypeInfo;

    constructor(name: string, constraints?: TypeInfo) {
        this.name = name;
        this.constraints = constraints;
    }
}