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

/**
 * 表示类型信息的抽象类，用于描述特定类型的元数据。
 * 提供了获取类型名称以及判断是否为浮点类型的功能。
 * 该类作为基类使用，具体的类型实现应继承此抽象类并提供所需的行为。
 *
 * 方法 `isFloatPointTy` 用于判断当前类型是否为浮点类型，默认实现返回 false。
 */
export abstract class TypeInfo {
    name!: string;

    isFloatPointTy(): boolean {
        return false;
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
}

/**
 * 表示自定义类型的信息，继承自 TypeInfo 类。
 * 此类用于描述特定的自定义类型，并提供其名称信息。
 */
export class CustomTypeInfo extends TypeInfo {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
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
}