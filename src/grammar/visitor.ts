import RiddleParserVisitor from '../parser/RiddleParserVisitor';
import {
    BlockContext,
    BooleanContext, CallExprContext, DeclArgsContext, ExpressionContext, ExpressionEndContext,
    FloatContext, FuncDeclContext, IdContext,
    IntegerContext, ObjectContext,
    ProgramContext, ReturnStmtContext, StatementContext, StatementExprContext, VarDeclContext,
} from '../parser/RiddleParser';
import {ParserRuleContext, ParseTree, TerminalNode} from 'antlr4';
import {
    BlockNode, CallNode,
    ConstantNode, DeclArgNode,
    ExprNode,
    FuncDeclNode,
    ObjectNode,
    ProgramNode, ReturnNode,
    SemNode,
    VarDeclNode
} from '../semantic/nodes';
import {PrimitiveType, PrimitiveTypeInfo} from '../semantic/typeInfo';

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
            }
        })
        return list;
    }

    visitFuncDecl = (ctx: FuncDeclContext) => {
        const name = ctx._name.getText();
        const body = this.visitBlock(ctx._body);
        let return_type: ExprNode;
        if (ctx._return_type) {
            return_type = this.visit(ctx._return_type);
        } else {
            return_type = new ObjectNode('void')
        }
        const args = this.visitDeclArgs(ctx.declArgs());
        return new FuncDeclNode(name, return_type, args, body);
    }

    visitBlock = (ctx: BlockContext) => {
        const children: ExprNode[] = [];
        ctx.children?.forEach(child => {
            if (child instanceof TerminalNode) {
                return;
            }
            const result = this.visit(child);
            if (result instanceof ExprNode) {
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
}