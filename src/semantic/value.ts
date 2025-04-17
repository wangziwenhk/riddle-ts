import {FunctionTypeInfo, PrimitiveTypeInfo, TypeInfo, Types} from "./types";

export interface Value {
    kind: string;
    type: Types;
    value: any;
}

export interface PrimitiveValue extends Value {
    kind: 'primitive';
    type: PrimitiveTypeInfo;
    value: any;
}

export interface FunctionValue extends Value {
    kind: 'function';
    type: FunctionTypeInfo;
    value: any;
}

export interface TypeValue extends Value {
    kind: 'type';
    type: TypeInfo;
    value: Types;
}