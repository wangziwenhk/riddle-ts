import {SemClass, SemFunction, SemVariable} from '../../src/semantic/objects';
import {ClassTypeInfo, TypeInfo} from "../../src/semantic/typeInfo";

describe('SemClass', () => {
    const member1 = new SemVariable('member1', {} as TypeInfo);
    const member2 = new SemVariable('member2', {} as TypeInfo);
    const method1 = new SemFunction('method1', {} as TypeInfo);
    const method2 = new SemFunction('method2', {} as TypeInfo);
    const classTypeInfo = new ClassTypeInfo('TestClass', [{} as TypeInfo]);
    const semClass = new SemClass('TestClass', [member1, member2], [method1, method2], classTypeInfo);

    test('getMember should return a member when found', () => {
        const result = semClass.getMember('member1');
        expect(result).toBe(member1);
    });

    test('getMember should return a method when found', () => {
        const result = semClass.getMember('method1');
        expect(result).toBe(method1);
    });

    test('getMember should throw an error when neither member nor method is found', () => {
        expect(() => semClass.getMember('nonExistent')).toThrow("Member or method 'nonExistent' not found in class 'TestClass'");
    });

    test('getMemberIndex should return the correct index of a member', () => {
        const result = semClass.getMemberIndex('member2');
        expect(result).toBe(1);
    });

    test('getMemberIndex should throw an error when the member is not found', () => {
        expect(() => semClass.getMemberIndex('nonExistent')).toThrow("Member 'nonExistent' not found in class 'TestClass'");
    });
});