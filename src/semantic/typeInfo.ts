import llvm from "@wangziwenhk/llvm-bindings";
import {SemClass} from "./objects";
import {Equatable} from "../utils/equatable";
import "../utils/hash"

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

/**
 * 表示类型信息的抽象类，用于描述特定类型的元数据。
 * 提供了获取类型名称以及判断是否为浮点类型的功能。
 * 该类作为基类使用，具体的类型实现应继承此抽象类并提供所需的行为。
 */
export abstract class TypeInfo implements Equatable<TypeInfo> {
    name!: string;

    isFloatPointTy(): boolean {
        return false;
    }

    equal(type: TypeInfo) {
        return this.name === type.name;
    }

    getElementType(): TypeInfo {
        return this;
    }

    abstract toString(): string;

    hashCode(): number {
        return this.toString().hashCode();
    }
}

/**
 * 表示基本类型的信息类，继承自 TypeInfo。
 * 该类用于描述和操作基本数据类型的相关信息。
 * 提供了判断当前类型是否为浮点类型的功能。
 */
export class PrimitiveTypeInfo extends TypeInfo {
    name: PrimitiveType

    constructor(name: PrimitiveType) {
        super();
        this.name = name;
    }

    isFloatPointTy() {
        return this.name === 'float' || this.name === 'double';
    }

    equal(type: TypeInfo): boolean {
        return super.equal(type) && type instanceof PrimitiveTypeInfo;
    }

    toString(): string {
        return `PrimitiveType(${this.name})`;
    }
}

/**
 * 表示类类型的详细信息，继承自 TypeInfo。
 * 该类用于描述类的名称、成员类型以及与 LLVM 和语义分析相关的类型信息。
 * 它主要用于在编译器或解释器中存储和管理类的元数据。
 */
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

    equal(type: TypeInfo): boolean {
        if (type.name !== this.name) return false;
        return type instanceof ClassTypeInfo;
    }

    toString(): string {
        let result = `ClassType(${this.name}){`;
        this.members.forEach(child => {
            result += child.name + ',';
        })
        if (result[-1] === ',') {
            result = result.trimEnd();
        }
        result += '}'
        return result;
    }
}

export class PointerTypeInfo extends TypeInfo {
    type: TypeInfo;
    size: number;

    constructor(type: TypeInfo) {
        super();
        this.type = type;
        this.name = type.name;
        if (type instanceof PointerTypeInfo) {
            this.size = type.size + 1;
        } else {
            this.size = 1;
        }
    }

    equal(type: TypeInfo): boolean {
        if (type.name !== this.name) return false;
        return type instanceof PointerTypeInfo && type.size == this.size;
    }

    getElementType() {
        return this.type.getElementType();
    }

    toString(): string {
        return `PointerType(${this.type.toString()})`;
    }
}