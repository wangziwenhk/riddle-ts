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

    abstract isFloatPointTy(): boolean;
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

export class FunctionTypeInfo extends TypeInfo {
    returnType: TypeInfo;
    parameters: TypeInfo[];

    constructor(returnType: TypeInfo, parameters: TypeInfo[] = []) {
        super();
        this.returnType = returnType;
        this.parameters = parameters;
        this.name = "@";
    }

    isFloatPointTy(): boolean {
        return false;
    }
}

export class ClassTypeInfo extends TypeInfo {
    properties: Map<string, TypeInfo>;
    methods: Map<string, FunctionTypeInfo>;
    parent?: ClassTypeInfo;

    constructor(name: string, properties: Map<string, FunctionTypeInfo> = new Map(),
                methods: Map<string, FunctionTypeInfo> = new Map(), parent?: ClassTypeInfo) {
        super();
        this.name = name;
        this.properties = properties;
        this.methods = methods;
        this.parent = parent;
    }

    isFloatPointTy(): boolean {
        return false;
    }
}