import RiddleParserVisitor from '../parser/RiddleParserVisitor';
import {
    BlockContext,
    BooleanContext, ExpressionEndContext,
    FloatContext, FuncDeclContext,
    IntegerContext, ObjectContext,
    ProgramContext, StatementContext, StatementExprContext, VarDeclContext,
} from '../parser/RiddleParser';
import {ParserRuleContext, ParseTree, TerminalNode} from 'antlr4';
import {BlockNode, ConstantNode, ExprNode, FuncDeclNode, ObjectNode, ProgramNode, VarDeclNode} from '../semantic/nodes';
import {PrimitiveType, PrimitiveTypeInfo} from '../semantic/types';

export class GrammarVisitor extends RiddleParserVisitor<any> {
    errors: string[] = [];
    primitiveTypeMap: Map<PrimitiveType, PrimitiveTypeInfo> = new Map();

    constructor() {
        super();
        const addPrimitiveType = (name: PrimitiveType) => {
            this.primitiveTypeMap.set(
                name,
                {
                    kind: 'primitive',
                    name: name,
                }
            );
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
    private getLineNumber(node: ParserRuleContext | TerminalNode): number {
        if (node instanceof ParserRuleContext) {
            return node.start.line;
        } else {
            return node.symbol.line;
        }
    }

    visit(tree: ParseTree): ExprNode {
        return super.visit(tree);
    }

    visitProgram = (ctx: ProgramContext) => {
        const node = new ProgramNode()
        ctx.children?.forEach(child => {
            node.children.push(this.visit(child));
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

    visitFuncDecl = (ctx: FuncDeclContext) => {
        const name = ctx._name.getText();
        const body = this.visitBlock(ctx._body);
        const return_type: ExprNode = this.visit(ctx._return_type);
        //todo 添加函数参数
        return new FuncDeclNode(name, return_type, body);
    }

    visitBlock = (ctx: BlockContext) => {
        const children: ExprNode[] = [];
        ctx.children?.forEach(child => {
            const result = this.visit(child);
            children.push(result);
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
}