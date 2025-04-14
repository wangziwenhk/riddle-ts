import RiddleParserVisitor from '../parser/RiddleParserVisitor';
import {IntegerContext, ProgramContext} from "../parser/RiddleParser";
import {ParserRuleContext, TerminalNode} from "antlr4";

export class SemanticVisitor extends RiddleParserVisitor<any> {
    errors: string[] = [];

    log(message: string, line: Number) {
        this.errors.push(`line: ${line}: ${message}`)
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

    visitProgram = (ctx: ProgramContext) => {
        return this.visitChildren(ctx);
    }

    visitInteger = (ctx: IntegerContext) => {
        const text = ctx.getText();
        const value = Number.parseInt(text);
        if (isNaN(value)) {
            this.log(`Integer type out of range`, this.getLineNumber(ctx));
        }

        const MAX_INT = 2 ** 31 - 1;
        const MIN_INT = -(2 ** 31);
        if (value > MAX_INT || value < MIN_INT) {
            this.log(`Integer type out of range`, this.getLineNumber(ctx));
        }
    }
}