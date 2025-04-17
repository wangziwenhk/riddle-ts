import RiddleParserVisitor from '../parser/RiddleParserVisitor';
import {
    BlockContext,
    BooleanContext, ExpressionEndContext,
    FloatContext, FuncDeclContext,
    IntegerContext,
    ProgramContext, StatementExprContext,
} from "../parser/RiddleParser";
import {ParserRuleContext, TerminalNode} from "antlr4";
import {PrimitiveType, PrimitiveTypeInfo} from "./types";
import {BlockNode, ConstantNode, ExprNode, ProgramNode} from "./nodes";

export class SemanticVisitor extends RiddleParserVisitor<any> {
    errors: string[] = [];
    primitive_types = new Map<string, PrimitiveTypeInfo>();

    constructor() {
        super();
        this.registerPrimitiveType("int")
        this.registerPrimitiveType("float")
        this.registerPrimitiveType("long")
        this.registerPrimitiveType("short")
        this.registerPrimitiveType("char")
        this.registerPrimitiveType("void")
        this.registerPrimitiveType("bool")
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

    /**
     * 注册一个基本类型，保证多个基本类型的 object 是相同的
     * @param name 基本类型的名称
     */
    private registerPrimitiveType(name: PrimitiveType) {
        this.primitive_types.set(name, {
            kind: "primitive",
            name: name,
        });
    }

    /**
     * 获取一个基本类型
     * @param name 基本类型的名称
     */
    private getPrimitiveType(name: PrimitiveType) {
        const type = this.primitive_types.get(name);
        if (this.primitive_types.has(name) && type !== undefined) {
            return type;
        }
        throw new Error(`Unknown primitive type: ${name}`);
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

        return new ConstantNode({
            kind: "primitive",
            value: value,
            type: this.getPrimitiveType("int")
        });
    }

    visitFloat = (ctx: FloatContext) => {
        const text = ctx.getText();
        const value = Number.parseFloat(text);

        if (isNaN(value)) {
            this.log(`Float type out of range`, this.getLineNumber(ctx));
        }

        return new ConstantNode({
            kind: "primitive",
            value: value,
            type: this.getPrimitiveType("float")
        });
    }

    visitBoolean = (ctx: BooleanContext) => {
        const text = ctx.getText();
        let value: Boolean;
        value = text === "true";
        return new ConstantNode({
            kind: "primitive",
            value: value,
            type: this.getPrimitiveType("bool")
        });
    }

    visitFuncDecl = (ctx: FuncDeclContext) => {
        const name = ctx._name.getText()
        const body = this.visitBlock(ctx._body);
    }

    visitBlock = (ctx: BlockContext) => {
        const children: ExprNode[] = []
        ctx.children?.forEach(child => {
            const result = this.visit(child);
            children.push(result);
        })
        return new BlockNode(children)
    }
}