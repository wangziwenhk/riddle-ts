import {
    BinaryOpNode,
    BlockNode,
    CallNode,
    ClassDeclNode, CompoundOpNode,
    ConstantNode,
    FuncDeclNode, IfNode,
    LoadExprNode,
    MemberAccessNode,
    ObjectNode,
    ProgramNode,
    ReturnNode,
    SemBaseVisitor,
    VarDeclNode
} from '../semantic/nodes';
import llvm from '@wangziwenhk/llvm-bindings';
import {Config} from './config';
import * as semType from '../semantic/typeInfo';
import {PrimitiveTypeInfo} from '../semantic/typeInfo';
import {SemFunction, SemVariable} from "../semantic/objects";
import {ok} from "node:assert";

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
        if (type instanceof semType.PointerTypeInfo) {
            const result = this.parseType(type.type);
            return llvm.PointerType.get(result, 0);
        } else if (type instanceof semType.PrimitiveTypeInfo) {
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
        const returnType = this.parseType(node.obj!.return_type)

        let paramTypes = node.obj?.param.map(param=>{return this.parseType(param.type)}) || []

        // 构造函数的全名（包括类名）
        const functionName = node.obj?.theClass?.name
            ? `${node.obj.theClass.name}.${node.name}`
            : node.name;

        // 如果函数尚未定义，则创建 LLVM 函数
        if (!node.obj?.llvm_func) {
            const functionType = llvm.FunctionType.get(returnType, paramTypes, node.isVarArg);
            node.obj!.llvm_func = llvm.Function.Create(
                functionType,
                llvm.GlobalValue.LinkageTypes.ExternalLinkage,
                functionName,
                this.module
            );
        }

        // 绑定函数参数到 LLVM 参数
        node.params.forEach((param, index) => {
            param.obj!.alloc.alloc = node.obj?.llvm_func?.getArg(index);
        });

        // 非懒加载函数的处理
        if (!node.isLazy && node.body) {
            const entryBlock = llvm.BasicBlock.Create(this.context, "entry", node.obj?.llvm_func);
            this.builder.SetInsertPoint(entryBlock);

            // 为每个分配节点创建内存分配
            node.alloc_list.forEach(alloc => {
                const type = this.parseType(alloc.type);
                if (!type.isVoidTy()) {
                    alloc.alloc = this.builder.CreateAlloca(type);
                }
            });

            // 访问函数体并验证函数
            this.visit(node.body);
            llvm.verifyFunction(node.obj?.llvm_func!);
        }
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
            return this.builder.CreateLoad(this.parseType(node.obj.type), node.obj.alloc.alloc!);
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
        if (value instanceof SemFunction) {
            return this.builder.CreateCall(value.llvm_func!, params);
        } else {
            const func = <SemFunction>value.getMember(value.name)
            return this.builder.CreateCall(func.llvm_func!, params);
        }
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
        // 预先声明
        node.body.forEach(child => {
            if (child instanceof FuncDeclNode) {
                child.isLazy = true;
                this.visit(child);
            }
        })
        node.body.forEach(child => {
            if (child instanceof FuncDeclNode) {
                child.isLazy = false;
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
        const index = node.left_type!.the_class!.getMemberIndex(node.right);
        return this.builder.CreateGEP(node.left_type?.llvm_type!, lhs, this.builder.getInt32(index));
    }

    visitBinaryOp(node: BinaryOpNode) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        ok(left instanceof llvm.Value, "Expected 'left' to be an instance of llvm.Value");
        ok(right instanceof llvm.Value, "Expected 'right' to be an instance of llvm.Value");
        return node.func!(left, right, this.builder);
    }

    visitComparisonOp(node: CompoundOpNode) {
        const left = this.visit(node.left);
        const right = this.visit(node.right);
        ok(left instanceof llvm.Value, "Expected 'left' to be an instance of llvm.Value");
        ok(right instanceof llvm.Value, "Expected 'right' to be an instance of llvm.Value");
        let result = right;
        if (node.func) {
            result = node.func(left, right, this.builder);
        }
        return this.builder.CreateStore(left, result);
    }

    visitLoad(node: LoadExprNode) {
        const value = this.visit(node.value);
        const t = node.obj!;
        this.builder.CreateLoad(this.parseType(t.type), value);
        return value;
    }

    visitIf(node: IfNode) {
        const parent = this.builder.GetInsertBlock()?.getParent()!;
        const condBlock = llvm.BasicBlock.Create(this.context, "b", parent);
        const hasElse = node.else_ !== undefined;

        this.builder.CreateBr(condBlock);
        this.builder.SetInsertPoint(condBlock);
        const cond = this.visit(node.cond);
        ok(cond instanceof llvm.Value, "Expected condition to be an instance of llvm.Value");
        ok(cond.getType().isIntegerTy(1), "Condition must be of type bool");

        const thenBlock = llvm.BasicBlock.Create(this.context, "b", parent);
        let elseBlock: llvm.BasicBlock | undefined;
        const exitBlock = llvm.BasicBlock.Create(this.context, "b", parent);
        if (hasElse) {
            elseBlock = llvm.BasicBlock.Create(this.context, "b", parent, exitBlock);
            this.builder.CreateCondBr(cond, thenBlock, elseBlock);
        } else {
            this.builder.CreateCondBr(cond, thenBlock, exitBlock);
        }

        this.builder.SetInsertPoint(thenBlock);
        this.visit(node.then);
        this.builder.CreateBr(exitBlock);


        if (hasElse) {
            this.builder.SetInsertPoint(elseBlock!);
            this.visit(node.else_!);
            this.builder.CreateBr(exitBlock);
        }

        this.builder.SetInsertPoint(exitBlock);
    }
}