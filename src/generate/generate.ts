import {
    BlockNode,
    CallNode,
    ClassDeclNode,
    ConstantNode,
    FuncDeclNode,
    MemberAccessNode,
    ObjectNode,
    ProgramNode,
    ReturnNode,
    SemBaseVisitor,
    VarDeclNode
} from '../semantic/nodes';
import llvm from 'llvm-bindings';
import {Config} from './config';
import * as semType from '../semantic/typeInfo';
import {PrimitiveTypeInfo} from '../semantic/typeInfo';
import {SemFunction, SemVariable} from "../semantic/objects";

export class Generate extends SemBaseVisitor {
    context = Config.globalContext
    module = new llvm.Module('', Config.globalContext)
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
        } else if (type instanceof semType.ClassTypeInfo) {
            return type.llvm_type!;
        }
        return this.builder.getVoidTy();
    }

    constructor(name: string) {
        super();
        this.registerPrimitiveType();
        this.module.setModuleIdentifier(name);
    }

    visitProgram(node: ProgramNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
    }

    visitConstant(node: ConstantNode) {
        if (node.type instanceof PrimitiveTypeInfo) {
            switch (node.type.name) {
                case 'int':
                    return this.builder.getInt32(node.value);
                case 'long':
                    return this.builder.getInt64(node.value);
                case 'short':
                    return this.builder.getInt16(node.value);
                case 'char':
                    return this.builder.getInt8(node.value);
                case 'bool':
                    return this.builder.getInt1(node.value);
                case 'float':
                    return llvm.ConstantFP.get(this.builder.getFloatTy(), node.value);
                case 'double':
                    return llvm.ConstantFP.get(this.builder.getDoubleTy(), node.value);
            }
        }
        throw new Error(`Unsupported type ${node.type.name}`);
    }

    visitFuncDecl(node: FuncDeclNode) {
        const return_type = this.parseType(node.obj!.return_type)

        let param_type: llvm.Type[] = []
        // 处理函数参数类型来生成 func_type
        if (node.obj?.param) {
            node.obj.param.forEach((param) => {
                param_type.push(this.parseType(param.type));
            });
        }

        const true_name = (node.obj?.theClass?.name ? node.obj?.theClass?.name + "." : "") + node.name;

        const func_type = llvm.FunctionType.get(return_type, param_type, false)
        const func = llvm.Function.Create(func_type, llvm.GlobalValue.LinkageTypes.ExternalLinkage, true_name, this.module)
        node.obj!.llvm_func = func;

        // 处理参数的内存
        let i = 0
        node.params.forEach((param) => {
            param.obj!.alloc.alloc = func.getArg(i);
            i++;
        })

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
        const type = node.obj!.type;
        if (type === undefined) {
            throw new Error("unknown type");
        }
        if (type instanceof PrimitiveTypeInfo && type.name === 'void') {
            throw new Error("The \'void \'type cannot be used as the type of a variable");
        }
        if (node.value && node.obj!.alloc.alloc) {
            const value = this.visit(node.value);
            this.builder.CreateStore(value, node.obj!.alloc.alloc);
        }
    }

    visitObject(node: ObjectNode) {
        if (!node.obj) {
            throw new Error("unknown obj");
        } else if (node.obj instanceof SemVariable) {
            return node.obj.alloc.alloc;
        } else if (node.obj instanceof SemFunction) {
            return node.obj;
        }
    }

    visitReturn(node: ReturnNode) {
        if (node.value) {
            const result = this.visit(node.value);
            if (!(result instanceof llvm.Value)) {
                throw new Error(`Unknown value for ${node.value}`);
            }
            return this.builder.CreateRet(result);
        }
        return this.builder.CreateRetVoid();
    }

    visitCall(node: CallNode) {
        const value = node.obj;
        if (value === undefined) {
            throw new Error("unknown call");
        }
        const params = new Array<llvm.Value>()
        node.params.forEach((param) => {
            params.push(this.visit(param))
        })
        return this.builder.CreateCall(value.llvm_func!, params);
    }

    visitBlock(node: BlockNode) {
        let result: llvm.Value = llvm.Constant.getNullValue(this.builder.getInt32Ty());
        node.children.forEach((child) => {
            result = this.visit(child);
        })
        return result;
    }

    visitClassDecl(node: ClassDeclNode) {
        let member_types = new Array<llvm.Type>();
        node.obj?.type.members.forEach(type => {
            member_types.push(this.parseType(type));
        })
        const type = llvm.StructType.create(this.context, member_types, node.name);
        node.obj!.type.llvm_type = type;
        node.body.forEach(child => {
            if (child instanceof FuncDeclNode) {
                this.visit(child);
            }
        })
        return type;
    }

    visitMemberAccess(node: MemberAccessNode) {
        const lhs: llvm.Value = this.visit(node.left);
        const member = node.left_type!.the_class!.getMember(node.right);
        if (member instanceof SemFunction) {
            return member;
        }
        if (!lhs.getType().isStructTy() && !lhs.getType().getPointerElementType().isStructTy()) {
            throw new Error("Result not a Struct Value");
        }
        const index = node.left_type!.the_class!.getMemberIndex(node.right);
        return this.builder.CreateGEP(lhs.getType().getPointerElementType(), lhs, this.builder.getInt32(index));
    }
}