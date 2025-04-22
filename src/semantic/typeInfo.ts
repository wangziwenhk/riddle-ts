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
    kind!: string;
}

export class PrimitiveTypeInfo extends TypeInfo {
    kind = 'primitive';
    name: PrimitiveType

    constructor(name: PrimitiveType) {
        super();
        this.name = name;
    }
}

export class FunctionTypeInfo extends TypeInfo {
    kind = 'function';
    returnType: TypeInfo;
    parameters: TypeInfo[];

    constructor(returnType: TypeInfo, parameters: TypeInfo[] = []) {
        super();
        this.returnType = returnType;
        this.parameters = parameters;
    }
}

export class ClassTypeInfo extends TypeInfo {
    kind = 'class';
    name: string;
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
}