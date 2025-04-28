import RiddleParserVisitor from "../parser/RiddleParserVisitor";
import {
    ExpressionEndContext,
    PackStmtContext,
    ProgramContext,
    StatementContext,
    StatementExprContext
} from "../parser/RiddleParser";

class PackageVisitor extends RiddleParserVisitor<any> {
    visitProgram = (ctx: ProgramContext) => {
        let name = '';
        ctx.children?.forEach(child => {
            const result = this.visit(child);
            if (typeof result === 'string') {
                name = result;
            }
        })
        if (name === '') {
            throw new Error("Can't find package name");
        }
        return name;
    }

    visitPackStmt = (ctx: PackStmtContext) => {
        let name = '';
        for (let i = 1; i < ctx.children?.length!; i++) {
            name = name + ctx.children![i].getText();
        }
        return name;
    }

    visitExpressionEnd = (ctx: ExpressionEndContext) => {
        return this.visit(ctx.children![0]);
    }

    visitStatementExpr = (ctx: StatementExprContext) => {
        return this.visit(ctx.children![0]);
    }

    visitStatement = (ctx: StatementContext) => {
        return this.visit(ctx.children![0]);
    }
}

export const packageVisitor = new PackageVisitor();