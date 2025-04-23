import {
    ConstantNode,
    FuncDeclNode,
    ProgramNode,
    SemBaseVisitor, VarDeclNode
} from '../semantic/nodes';
import llvm from 'llvm-bindings';
import {Config} from './config';
import * as semType from '../semantic/typeInfo';
import {PrimitiveTypeInfo} from "../semantic/typeInfo";

export class Generate extends SemBaseVisitor {
    context = Config.globalContext
    module = new llvm.Module('main', Config.globalContext)
    builder = new llvm.IRBuilder(Config.globalContext)

    primitiveTypeMap = new Map<string, llvm.Type>();

    private registerPrimitiveType() {
        this.primitiveTypeMap.set('int', this.builder.getInt32Ty());
        this.primitiveTypeMap.set('long', this.builder.getInt64Ty());
        this.primitiveTypeMap.set('short', this.builder.getInt16Ty());
        this.primitiveTypeMap.set('char', this.builder.getInt8Ty());
        this.primitiveTypeMap.set('bool', this.builder.getInt1Ty());
        this.primitiveTypeMap.set('float', this.builder.getFloatTy());
        this.primitiveTypeMap.set('double', this.builder.getDoubleTy());
        this.primitiveTypeMap.set('void', this.builder.getVoidTy());
    }

    private parseType(type: semType.TypeInfo): llvm.Type {
        if (type instanceof semType.PrimitiveTypeInfo) {
            const result = this.primitiveTypeMap.get(type.name);
            if (result === undefined) {
                throw new Error(`Unknown primitive type ${type.name}`);
            }
            return result;
        }
        return this.builder.getVoidTy();
    }

    constructor() {
        super();
        this.registerPrimitiveType();
    }

    visitProgram(node: ProgramNode) {
        super.visitProgram(node);
    }

    visitConstant(node: ConstantNode) {
        if (node.type instanceof PrimitiveTypeInfo) {
            const check = (typename:string)=>{
                if (typeof node.value !== typename) {
                    throw new Error('node.value Error');
                }
            }

            switch (node.type.name) {
                case 'int':
                    check('number')
                    return this.builder.getInt32(node.value);
                case 'long':
                    check('number')
                    return this.builder.getInt64(node.value);
                case 'short':
                    check('number')
                    return this.builder.getInt16(node.value);
                case 'char':
                    check('number')
                    return this.builder.getInt8(node.value);
                case 'bool':
                    check('boolean')
                    return this.builder.getInt1(node.value);
                case 'float':
                    check('number')
                    return llvm.ConstantFP.get(this.builder.getFloatTy(), node.value);
                case 'double':
                    check('number')
                    return llvm.ConstantFP.get(this.builder.getDoubleTy(), node.value);
            }
        }
        throw new Error(`Unsupported type ${node.type.name}`);
    }

    visitFuncDecl(node: FuncDeclNode) {
        const returnType = this.parseType(node.obj.return_type)
        const funcType = llvm.FunctionType.get(returnType, false)
        const func = llvm.Function.Create(funcType, llvm.GlobalValue.LinkageTypes.ExternalLinkage, node.name, this.module)
        const entry = llvm.BasicBlock.Create(this.context, "entry", func);
        this.builder.SetInsertPoint(entry);

        node.alloc_list.forEach(alloc => {
            let type = this.parseType(alloc.type);
            if (type.isVoidTy()) {
                return;
            }
            alloc.alloc = this.builder.CreateAlloca(type);
        })
        this.visit(node.body)
    }

    visitVarDecl(node: VarDeclNode) {
        const type = node.obj.type;
        if (type === undefined) {
            throw new Error("unknown type");
        }
        if (type instanceof PrimitiveTypeInfo && type.name === 'void') {
            throw new Error("The \'void \'type cannot be used as the type of a variable");
        }
        if (node.value && node.obj.alloc.alloc) {
            const value = this.visit(node.value);
            this.builder.CreateStore(node.obj.alloc.alloc, value);
        }
    }
}