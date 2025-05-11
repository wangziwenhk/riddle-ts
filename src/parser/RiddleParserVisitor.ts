// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./RiddleParser.js";
import { ExpressionEndContext } from "./RiddleParser.js";
import { LoadExprContext } from "./RiddleParser.js";
import { MemberAccessContext } from "./RiddleParser.js";
import { EqOpContext } from "./RiddleParser.js";
import { BracketExprContext } from "./RiddleParser.js";
import { BitOrContext } from "./RiddleParser.js";
import { LogicOrContext } from "./RiddleParser.js";
import { AddOpContext } from "./RiddleParser.js";
import { CompoundAssignOpContext } from "./RiddleParser.js";
import { UnaryOpContext } from "./RiddleParser.js";
import { IntegerContext } from "./RiddleParser.js";
import { FloatContext } from "./RiddleParser.js";
import { ScopeAccessContext } from "./RiddleParser.js";
import { RelOpContext } from "./RiddleParser.js";
import { PointerToContext } from "./RiddleParser.js";
import { BitAndContext } from "./RiddleParser.js";
import { LogicAndContext } from "./RiddleParser.js";
import { BooleanContext } from "./RiddleParser.js";
import { MulOpContext } from "./RiddleParser.js";
import { BitXorContext } from "./RiddleParser.js";
import { StatementExprContext } from "./RiddleParser.js";
import { CallExprContext } from "./RiddleParser.js";
import { ObjectContext } from "./RiddleParser.js";
import { ShiftOpContext } from "./RiddleParser.js";
import { StatementContext } from "./RiddleParser.js";
import { PackStmtContext } from "./RiddleParser.js";
import { VarDeclContext } from "./RiddleParser.js";
import { BlockContext } from "./RiddleParser.js";
import { InitListContext } from "./RiddleParser.js";
import { DeclArgsContext } from "./RiddleParser.js";
import { ModifierContext } from "./RiddleParser.js";
import { FuncDeclContext } from "./RiddleParser.js";
import { IfStmtContext } from "./RiddleParser.js";
import { ReturnStmtContext } from "./RiddleParser.js";
import { ClassDeclContext } from "./RiddleParser.js";
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
	 * Visit a parse tree produced by the `loadExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadExpr?: (ctx: LoadExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `memberAccess`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMemberAccess?: (ctx: MemberAccessContext) => Result;
	/**
	 * Visit a parse tree produced by the `eqOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqOp?: (ctx: EqOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `bracketExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracketExpr?: (ctx: BracketExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitOr?: (ctx: BitOrContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicOr?: (ctx: LogicOrContext) => Result;
	/**
	 * Visit a parse tree produced by the `addOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddOp?: (ctx: AddOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `compoundAssignOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundAssignOp?: (ctx: CompoundAssignOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `unaryOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryOp?: (ctx: UnaryOpContext) => Result;
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
	 * Visit a parse tree produced by the `scopeAccess`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScopeAccess?: (ctx: ScopeAccessContext) => Result;
	/**
	 * Visit a parse tree produced by the `relOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelOp?: (ctx: RelOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `pointerTo`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPointerTo?: (ctx: PointerToContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitAnd?: (ctx: BitAndContext) => Result;
	/**
	 * Visit a parse tree produced by the `logicAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLogicAnd?: (ctx: LogicAndContext) => Result;
	/**
	 * Visit a parse tree produced by the `boolean`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
	/**
	 * Visit a parse tree produced by the `mulOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMulOp?: (ctx: MulOpContext) => Result;
	/**
	 * Visit a parse tree produced by the `bitXor`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBitXor?: (ctx: BitXorContext) => Result;
	/**
	 * Visit a parse tree produced by the `statementExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpr?: (ctx: StatementExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `callExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCallExpr?: (ctx: CallExprContext) => Result;
	/**
	 * Visit a parse tree produced by the `object`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;
	/**
	 * Visit a parse tree produced by the `shiftOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftOp?: (ctx: ShiftOpContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.packStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackStmt?: (ctx: PackStmtContext) => Result;
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
	 * Visit a parse tree produced by `RiddleParser.initList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitList?: (ctx: InitListContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.declArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclArgs?: (ctx: DeclArgsContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.modifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModifier?: (ctx: ModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.funcDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDecl?: (ctx: FuncDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.classDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDecl?: (ctx: ClassDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

