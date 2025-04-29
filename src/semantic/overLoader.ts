import {TypeInfo} from "./typeInfo";
import {SemFunction} from "./objects";

/**
 * 函数重载器类，用于根据参数类型动态调用相应的函数实现。
 * 提供了添加函数重载和调用匹配函数的功能。
 */
export class FunctionOverloader {
    private overloads: Map<TypeInfo[], SemFunction> = new Map();

    public register(type: TypeInfo[], func: SemFunction) {
        this.overloads.set(type, func);
    }

    public get(type: TypeInfo[]) {
        if (!this.overloads.has(type)) {
            let signature = '';
            type.forEach(type => {
                signature += type.name + ',';
            })
            signature = signature.slice(0,-1);
            throw new Error(`Function implementation not found: '${signature}'`);
        }
        return this.overloads.get(type);
    }
}
