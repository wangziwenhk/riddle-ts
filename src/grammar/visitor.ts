import RiddleParserVisitor from '../parser/RiddleParserVisitor';
import {
    BlockContext,
    BooleanContext,
    CallExprContext,
    ClassDeclContext,
    DeclArgsContext,
    ExpressionContext,
    ExpressionEndContext,
    FloatContext,
    FuncDeclContext,
    IdContext,
    InitListContext,
    IntegerContext,
    ObjectContext,
    MemberAccessContext,
    ProgramContext,
    ReturnStmtContext,
    StatementContext,
    StatementExprContext,
    VarDeclContext,
    BracketExprContext,
    AddOpContext,
    MulOpContext,
    EqOpContext,
    BitOrContext,
    BitAndContext,
    LogicOrContext,
    LogicAndContext,
    BitXorContext,
    UnaryOpContext,
    RelOpContext,
    CompoundAssignOpContext,
    ShiftOpContext,
    PointerToContext,
    LoadExprContext, ScopeAccessContext,
} from '../parser/RiddleParser';
import {ParserRuleContext, ParseTree, TerminalNode} from 'antlr4';
import {
    BinaryOpNode,
    BlockNode, CallNode, ClassDeclNode, CompoundOpNode,
    ConstantNode, DeclArgNode, DeclNode,
    ExprNode,
    FuncDeclNode, InitListNode, LoadExprNode, MemberAccessNode, NoneNode,
    ObjectNode, PointerToNode,
    ProgramNode, ReturnNode, ScopeAccessNode,
    SemNode, UnaryOpNode,
    VarDeclNode
} from '../semantic/nodes';
import {PrimitiveType, PrimitiveTypeInfo} from '../semantic/typeInfo';
import {ModifierList, ModifierType} from "../semantic/modifier";

/**
 * 表示一个空节点的对象，通常用于表示树形结构或链表中的空占位符。
 * 该节点不包含任何实际数据，主要用于逻辑上的占位或作为终止标志。
 * 在需要判断节点是否为空时，可以通过此对象进行识别。
 */
const noneNode = new NoneNode();

/**
 * GrammarVisitor 是一个用于遍历语法规则树的类，继承自 RiddleParserVisitor。
 * 该类的主要功能是解析语法树节点并生成相应的语义节点，同时记录解析过程中出现的错误。
 *
 * 该类维护了一个基本类型映射表，用于存储和检索语言中的基本类型信息。
 * 在遍历语法树时，会根据节点类型调用相应的方法进行处理，并生成对应的语义节点。
 * 如果在解析过程中发现错误，会将错误信息记录到错误列表中。
 *
 * 注意：该类依赖于 ANTLR4 的解析器上下文对象以及自定义的语义节点类。
 */
export class GrammarVisitor extends RiddleParserVisitor<any> {
    errors: string[] = [];
    primitiveTypeMap: Map<PrimitiveType, PrimitiveTypeInfo> = new Map();

    constructor() {
        super();
        const addPrimitiveType = (name: PrimitiveType) => {
            this.primitiveTypeMap.set(name, new PrimitiveTypeInfo(name));
        };
        addPrimitiveType('int')
        addPrimitiveType('float')
        addPrimitiveType('bool')
    }

    /**
     * 获取基本类型的 TypeInfo
     * @param name 基本类型名称
     */
    private getPrimitiveType(name: PrimitiveType) {
        const result = this.primitiveTypeMap.get(name)
        if (result === undefined) {
            throw new Error(`Expected primitive type for primitive type '${name}'`);
        }
        return result;
    }

    /**
     * 向错误保存器中保存一个错误
     * @param message 错误消息
     * @param line 错误行数
     */
    private log(message: string, line: Number) {
        this.errors.push(`line: ${line}: ${message}`);
    }

    /**
     * 获取一个 context 节点的起始行号
     * @param node antlr4 ParserTree节点
     * @returns number
     */
    private getLineNumber(node: ParserRuleContext | TerminalNode | ParseTree): number {
        if (node instanceof ParserRuleContext) {
            return node.start.line;
        } else if (node instanceof TerminalNode) {
            return node.symbol.line;
        }
        return 0;
    }

    visit(tree: ParseTree): any {
        const result = super.visit(tree);
        if (result instanceof SemNode) {
            result.line = this.getLineNumber(tree);
        }
        return result;
    }

    visitProgram = (ctx: ProgramContext) => {
        const node = new ProgramNode()
        ctx.children?.forEach(child => {
            if (child instanceof TerminalNode) {
                return;
            }
            const result = this.visit(child);
            if (result instanceof ExprNode) {
                if (result instanceof NoneNode) {
                    return;
                }
                node.children.push(result);
            } else {
                this.log("Result does not ExprNode", this.getLineNumber(child));
                return;
            }
        })
        return node;
    }

    visitExpressionEnd = (ctx: ExpressionEndContext) => {
        return this.visit(ctx.children![0])
    }

    visitStatementExpr = (ctx: StatementExprContext) => {
        return this.visit(ctx.children![0])
    }

    visitStatement = (ctx: StatementContext) => {
        return this.visit(ctx.children![0])
    }

    visitPackStmt = () => {
        return noneNode;
    }

    visitInteger = (ctx: IntegerContext) => {
        const text = ctx.getText();
        const value = Number.parseInt(text);
        if (isNaN(value)) {
            this.log(`Integer type out of range`, this.getLineNumber(ctx));
        }

        // 检查是否溢出
        const MAX_INT = 2 ** 31 - 1;
        const MIN_INT = -(2 ** 31);
        if (value > MAX_INT || value < MIN_INT) {
            this.log(`Integer type out of range`, this.getLineNumber(ctx));
        }

        return new ConstantNode(value, this.getPrimitiveType('int'));
    }

    visitFloat = (ctx: FloatContext) => {
        const text = ctx.getText();
        const value = Number.parseFloat(text);

        if (isNaN(value)) {
            this.log(`Float type out of range`, this.getLineNumber(ctx));
        }

        return new ConstantNode(value, this.getPrimitiveType('float'));
    }

    visitBoolean = (ctx: BooleanContext) => {
        const text = ctx.getText();
        let value: Boolean;
        value = text === 'true';
        return new ConstantNode(value, this.getPrimitiveType('bool'));
    }

    visitDeclArgs = (ctx: DeclArgsContext) => {
        if (ctx.children === undefined || ctx.children === null) {
            return [];
        }
        let name: string = "";
        let type: ExprNode | undefined = undefined;
        let list = new Array<DeclArgNode>();
        ctx.children.forEach((child) => {
            if (child instanceof TerminalNode) {
                return;
            }
            if (child instanceof IdContext) {
                name = child.getText();
            } else if (child instanceof ExpressionContext) {
                type = this.visit(child);
            }
            if (name != "" && type) {
                list.push(new DeclArgNode(name, type))
                name = "";
                type = undefined;
            }
        })
        return list;
    }

    visitFuncDecl = (ctx: FuncDeclContext) => {
        const name = ctx._name.getText();
        let body: BlockNode | undefined;
        let modifiers = new ModifierList();
        if (ctx.modifier_list().length) {
            ctx.modifier_list().forEach(child => {
                modifiers.add(child.getText());
            })
        }
        if (ctx._body) {
            body = this.visitBlock(ctx._body);
        }
        let return_type: ExprNode;
        if (ctx._return_type) {
            return_type = this.visit(ctx._return_type);
        } else {
            return_type = new ObjectNode('void')
        }
        const args = this.visitDeclArgs(ctx.declArgs());
        return new FuncDeclNode(name, return_type, args, modifiers, body);
    }

    visitBlock = (ctx: BlockContext) => {
        const children: ExprNode[] = [];
        ctx.children?.forEach(child => {
            if (child instanceof TerminalNode) {
                return;
            }
            const result = this.visit(child);
            if (result instanceof ExprNode) {
                if (result instanceof NoneNode) {
                    return;
                }
                children.push(result);
            } else {
                this.log("Result does not ExprNode", this.getLineNumber(child));
                return;
            }
        });
        return new BlockNode(children);
    }

    visitObject = (ctx: ObjectContext) => {
        return new ObjectNode(ctx.getText());
    }

    visitVarDecl = (ctx: VarDeclContext) => {
        let type: ExprNode | undefined = undefined
        let value: ExprNode | undefined = undefined;
        if (ctx._type_) {
            type = this.visit(ctx._type_);
        }
        if (ctx._value) {
            value = this.visit(ctx._value);
        }
        return new VarDeclNode(ctx._name.getText(), type, value);
    }

    visitId = (ctx: IdContext) => {
        return ctx.getText();
    }

    visitReturnStmt = (ctx: ReturnStmtContext) => {
        let result: ExprNode | undefined = undefined;
        if (ctx._result) {
            result = this.visit(ctx._result);
        }
        return new ReturnNode(result);
    }

    visitCallExpr = (ctx: CallExprContext) => {
        const value: ExprNode = this.visit(ctx._obj)
        let params: ExprNode[] = [];
        for (let i = 1; i < ctx.children?.length!; i++) {
            const child = ctx.children![i];
            if (child instanceof TerminalNode) {
                continue;
            }
            const result = this.visit(child);
            if (result instanceof ExprNode) {
                params.push(result);
            }
        }
        return new CallNode(value, params);
    }

    visitMemberAccess = (ctx: MemberAccessContext) => {
        const left: ExprNode = this.visit(ctx._left);
        const right: string = ctx._right.getText();
        return new MemberAccessNode(left, right);
    }

    visitScopeAccess = (ctx: ScopeAccessContext): any => {
        const left: ExprNode = this.visit(ctx._left);
        const right: string = ctx._right.getText();
        return new ScopeAccessNode(left, right);
    }

    visitInitList = (ctx: InitListContext) => {
        let children: ExprNode[] = [];
        ctx.children?.forEach(child => {
            const result = this.visit(child);
            if (result instanceof ExprNode) {
                children.push(result);
            }
        })
        return new InitListNode(children);
    }

    visitClassDecl = (ctx: ClassDeclContext) => {
        const name = ctx._name.getText();
        //todo 添加类继承
        const members: DeclNode[] = [];
        const body = this.visitBlock(ctx._body);
        body.children.forEach(child => {
            if (child instanceof DeclNode) {
                members.push(child);
            } else {
                this.log("Result is not a DeclNode", this.getLineNumber(ctx));
            }
        })
        return new ClassDeclNode(name, members);
    }

    visitBracketExpr = (ctx: BracketExprContext) => {
        return this.visit(ctx._value);
    }

    visitBinaryOp = (ctx: { _left: ExpressionContext; _right: ExpressionContext }, op: string): BinaryOpNode => {
        const left: ExprNode = this.visit(ctx._left);
        const right: ExprNode = this.visit(ctx._right);
        return new BinaryOpNode(op, left, right);
    };

    visitAddOp = (ctx: AddOpContext) => this.visitBinaryOp(ctx, ctx._op.text);
    visitMulOp = (ctx: MulOpContext) => this.visitBinaryOp(ctx, ctx._op.text);
    visitEqOp = (ctx: EqOpContext) => this.visitBinaryOp(ctx, ctx._op.text);
    visitBitOr = (ctx: BitOrContext) => this.visitBinaryOp(ctx, '|');
    visitBitAnd = (ctx: BitAndContext) => this.visitBinaryOp(ctx, '&');
    visitLogicOr = (ctx: LogicOrContext) => this.visitBinaryOp(ctx, '||');
    visitLogicAnd = (ctx: LogicAndContext) => this.visitBinaryOp(ctx, '&&');
    visitBitXor = (ctx: BitXorContext) => this.visitBinaryOp(ctx, '^');
    visitShiftOp = (ctx: ShiftOpContext) => this.visitBinaryOp(ctx, ctx._op.text);
    visitRelOp = (ctx: RelOpContext) => this.visitBinaryOp(ctx, ctx._op.text);

    visitUnaryOp = (ctx: UnaryOpContext) => {
        const value: ExprNode = this.visit(ctx._value);
        const op = ctx._op.text;
        return new UnaryOpNode(op, value);
    }

    visitCompoundAssignOp = (ctx: CompoundAssignOpContext) => {
        const left = this.visit(ctx._left);
        const right = this.visit(ctx._right);
        const op = ctx._op.text;
        return new CompoundOpNode(op, left, right);
    }

    visitPointerTo = (ctx: PointerToContext) => {
        const value: ExprNode = this.visit(ctx._obj);
        if (!(value instanceof ObjectNode)) {
            throw new Error("Value Must be a ObjectNode");
        }
        return new PointerToNode(value);
    }

    visitLoadExpr = (ctx: LoadExprContext) => {
        const value: ExprNode = this.visit(ctx._obj);
        return new LoadExprNode(value);
    }
}