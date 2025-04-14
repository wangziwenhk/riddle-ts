import {FunctionTypeInfo, PrimitiveTypeInfo, TypeInfo, Types} from "./types";

interface Value {
    kind: string;
    type: Types;
    value: any;
}

interface PrimitiveValue extends Value {
    kind: 'primitive';
    type: PrimitiveTypeInfo;
    value: any;
}

interface FunctionValue extends Value {
    kind: 'function';
    type: FunctionTypeInfo;
    value: any;
}

interface TypeValue extends Value {
    kind: 'type';
    type: TypeInfo;
    value: Types;
}