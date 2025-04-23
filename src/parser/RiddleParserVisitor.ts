// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./RiddleParser.js";
import { ExpressionEndContext } from "./RiddleParser.js";
import { IntegerContext } from "./RiddleParser.js";
import { FloatContext } from "./RiddleParser.js";
import { BooleanContext } from "./RiddleParser.js";
import { ObjectContext } from "./RiddleParser.js";
import { StatementExprContext } from "./RiddleParser.js";
import { StatementContext } from "./RiddleParser.js";
import { VarDeclContext } from "./RiddleParser.js";
import { BlockContext } from "./RiddleParser.js";
import { DeclArgsContext } from "./RiddleParser.js";
import { FuncDeclContext } from "./RiddleParser.js";
import { ReturnStmtContext } from "./RiddleParser.js";
import { IdContext } from "./RiddleParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RiddleParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class RiddleParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RiddleParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.expressionEnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionEnd?: (ctx: ExpressionEndContext) => Result;
	/**
	 * Visit a parse tree produced by the `integer`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;
	/**
	 * Visit a parse tree produced by the `float`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;
	/**
	 * Visit a parse tree produced by the `boolean`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
	/**
	 * Visit a parse tree produced by the `object`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpr?: (ctx: StatementExprContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.declArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclArgs?: (ctx: DeclArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.funcDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDecl?: (ctx: FuncDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

