import {FunctionOverloader} from '../../src/semantic/overLoader';
import {PrimitiveTypeInfo, TypeInfo} from "../../src/semantic/typeInfo";
import {SemFunction} from "../../src/semantic/objects";

describe('FunctionOverloader', () => {
    test('register and get a function overload', () => {
        const overloader = new FunctionOverloader();
        const typeInfo: TypeInfo[] = [new PrimitiveTypeInfo('int')];
        const func = new SemFunction('testFunc', new PrimitiveTypeInfo('void'));

        overloader.register(typeInfo, func);
        const result = overloader.get(typeInfo);

        expect(result).toBe(func);
    });

    test('throws error when no matching overload is found', () => {
        const overloader = new FunctionOverloader();
        const typeInfo: TypeInfo[] = [new PrimitiveTypeInfo('int')];

        expect(() => overloader.get(typeInfo)).toThrowError("Function implementation not found: 'int'");
    });
});