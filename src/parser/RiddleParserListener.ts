// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


import { ProgramContext } from "./RiddleParser.js";
import { ExpressionEndContext } from "./RiddleParser.js";
import { MemberAccessContext } from "./RiddleParser.js";
import { BooleanContext } from "./RiddleParser.js";
import { IntegerContext } from "./RiddleParser.js";
import { StatementExprContext } from "./RiddleParser.js";
import { FloatContext } from "./RiddleParser.js";
import { CallExprContext } from "./RiddleParser.js";
import { ObjectContext } from "./RiddleParser.js";
import { StatementContext } from "./RiddleParser.js";
import { VarDeclContext } from "./RiddleParser.js";
import { BlockContext } from "./RiddleParser.js";
import { InitListContext } from "./RiddleParser.js";
import { DeclArgsContext } from "./RiddleParser.js";
import { FuncDeclContext } from "./RiddleParser.js";
import { ReturnStmtContext } from "./RiddleParser.js";
import { ClassDeclContext } from "./RiddleParser.js";
import { IdContext } from "./RiddleParser.js";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RiddleParser`.
 */
export default class RiddleParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RiddleParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.expressionEnd`.
	 * @param ctx the parse tree
	 */
	enterExpressionEnd?: (ctx: ExpressionEndContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.expressionEnd`.
	 * @param ctx the parse tree
	 */
	exitExpressionEnd?: (ctx: ExpressionEndContext) => void;
	/**
	 * Enter a parse tree produced by the `memberAccess`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMemberAccess?: (ctx: MemberAccessContext) => void;
	/**
	 * Exit a parse tree produced by the `memberAccess`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMemberAccess?: (ctx: MemberAccessContext) => void;
	/**
	 * Enter a parse tree produced by the `boolean`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Exit a parse tree produced by the `boolean`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolean?: (ctx: BooleanContext) => void;
	/**
	 * Enter a parse tree produced by the `integer`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInteger?: (ctx: IntegerContext) => void;
	/**
	 * Exit a parse tree produced by the `integer`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInteger?: (ctx: IntegerContext) => void;
	/**
	 * Enter a parse tree produced by the `statementExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStatementExpr?: (ctx: StatementExprContext) => void;
	/**
	 * Exit a parse tree produced by the `statementExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStatementExpr?: (ctx: StatementExprContext) => void;
	/**
	 * Enter a parse tree produced by the `float`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFloat?: (ctx: FloatContext) => void;
	/**
	 * Exit a parse tree produced by the `float`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFloat?: (ctx: FloatContext) => void;
	/**
	 * Enter a parse tree produced by the `callExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCallExpr?: (ctx: CallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `callExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCallExpr?: (ctx: CallExprContext) => void;
	/**
	 * Enter a parse tree produced by the `object`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterObject?: (ctx: ObjectContext) => void;
	/**
	 * Exit a parse tree produced by the `object`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitObject?: (ctx: ObjectContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.initList`.
	 * @param ctx the parse tree
	 */
	enterInitList?: (ctx: InitListContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.initList`.
	 * @param ctx the parse tree
	 */
	exitInitList?: (ctx: InitListContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.declArgs`.
	 * @param ctx the parse tree
	 */
	enterDeclArgs?: (ctx: DeclArgsContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.declArgs`.
	 * @param ctx the parse tree
	 */
	exitDeclArgs?: (ctx: DeclArgsContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.funcDecl`.
	 * @param ctx the parse tree
	 */
	enterFuncDecl?: (ctx: FuncDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.funcDecl`.
	 * @param ctx the parse tree
	 */
	exitFuncDecl?: (ctx: FuncDeclContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.classDecl`.
	 * @param ctx the parse tree
	 */
	enterClassDecl?: (ctx: ClassDeclContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.classDecl`.
	 * @param ctx the parse tree
	 */
	exitClassDecl?: (ctx: ClassDeclContext) => void;
	/**
	 * Enter a parse tree produced by `RiddleParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;
}

