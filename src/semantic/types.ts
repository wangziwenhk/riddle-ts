export type PrimitiveType = 'int' | 'short' | 'long' | 'char' | 'float' | 'bool' | 'void' | 'double';

export interface Types {
    kind: string;
}

export interface PrimitiveTypeInfo extends Types {
    kind: 'primitive';
    name: PrimitiveType
}

export interface FunctionTypeInfo extends Types {
    kind: 'function';
    returnType: Types;
    parameters: Types[];
}

export interface ClassTypeInfo extends Types {
    kind: 'class';
    name: string;
    properties: Map<string, Types>;
    methods: Map<string, FunctionTypeInfo>;
    parent?: ClassTypeInfo;
}

export interface TypeInfo extends Types {
    kind: 'type';
    name: string;
}