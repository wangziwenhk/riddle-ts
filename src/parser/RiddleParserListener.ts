// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2

import {ParseTreeListener} from "antlr4";


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
import { RelOpContext } from "./RiddleParser.js";
import { PointerToContext } from "./RiddleParser.js";
import { BitAndContext } from "./RiddleParser.js";
import { LogicAndContext } from "./RiddleParser.js";
import { BooleanContext } from "./RiddleParser.js";
import { MulOpContext } from "./RiddleParser.js";
import { BitXorContext } from "./RiddleParser.js";
import { ScopeOpContext } from "./RiddleParser.js";
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
	 * Enter a parse tree produced by the `loadExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLoadExpr?: (ctx: LoadExprContext) => void;
	/**
	 * Exit a parse tree produced by the `loadExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLoadExpr?: (ctx: LoadExprContext) => void;
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
	 * Enter a parse tree produced by the `eqOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqOp?: (ctx: EqOpContext) => void;
	/**
	 * Exit a parse tree produced by the `eqOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqOp?: (ctx: EqOpContext) => void;
	/**
	 * Enter a parse tree produced by the `bracketExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBracketExpr?: (ctx: BracketExprContext) => void;
	/**
	 * Exit a parse tree produced by the `bracketExpr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBracketExpr?: (ctx: BracketExprContext) => void;
	/**
	 * Enter a parse tree produced by the `bitOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitOr?: (ctx: BitOrContext) => void;
	/**
	 * Exit a parse tree produced by the `bitOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitOr?: (ctx: BitOrContext) => void;
	/**
	 * Enter a parse tree produced by the `logicOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicOr?: (ctx: LogicOrContext) => void;
	/**
	 * Exit a parse tree produced by the `logicOr`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicOr?: (ctx: LogicOrContext) => void;
	/**
	 * Enter a parse tree produced by the `addOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddOp?: (ctx: AddOpContext) => void;
	/**
	 * Exit a parse tree produced by the `addOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddOp?: (ctx: AddOpContext) => void;
	/**
	 * Enter a parse tree produced by the `compoundAssignOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompoundAssignOp?: (ctx: CompoundAssignOpContext) => void;
	/**
	 * Exit a parse tree produced by the `compoundAssignOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompoundAssignOp?: (ctx: CompoundAssignOpContext) => void;
	/**
	 * Enter a parse tree produced by the `unaryOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryOp?: (ctx: UnaryOpContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryOp?: (ctx: UnaryOpContext) => void;
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
	 * Enter a parse tree produced by the `relOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterRelOp?: (ctx: RelOpContext) => void;
	/**
	 * Exit a parse tree produced by the `relOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitRelOp?: (ctx: RelOpContext) => void;
	/**
	 * Enter a parse tree produced by the `pointerTo`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPointerTo?: (ctx: PointerToContext) => void;
	/**
	 * Exit a parse tree produced by the `pointerTo`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPointerTo?: (ctx: PointerToContext) => void;
	/**
	 * Enter a parse tree produced by the `bitAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitAnd?: (ctx: BitAndContext) => void;
	/**
	 * Exit a parse tree produced by the `bitAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitAnd?: (ctx: BitAndContext) => void;
	/**
	 * Enter a parse tree produced by the `logicAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLogicAnd?: (ctx: LogicAndContext) => void;
	/**
	 * Exit a parse tree produced by the `logicAnd`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLogicAnd?: (ctx: LogicAndContext) => void;
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
	 * Enter a parse tree produced by the `mulOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMulOp?: (ctx: MulOpContext) => void;
	/**
	 * Exit a parse tree produced by the `mulOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMulOp?: (ctx: MulOpContext) => void;
	/**
	 * Enter a parse tree produced by the `bitXor`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitXor?: (ctx: BitXorContext) => void;
	/**
	 * Exit a parse tree produced by the `bitXor`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitXor?: (ctx: BitXorContext) => void;
	/**
	 * Enter a parse tree produced by the `scopeOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterScopeOp?: (ctx: ScopeOpContext) => void;
	/**
	 * Exit a parse tree produced by the `scopeOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitScopeOp?: (ctx: ScopeOpContext) => void;
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
	 * Enter a parse tree produced by the `shiftOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	enterShiftOp?: (ctx: ShiftOpContext) => void;
	/**
	 * Exit a parse tree produced by the `shiftOp`
	 * labeled alternative in `RiddleParser.expression`.
	 * @param ctx the parse tree
	 */
	exitShiftOp?: (ctx: ShiftOpContext) => void;
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
	 * Enter a parse tree produced by `RiddleParser.packStmt`.
	 * @param ctx the parse tree
	 */
	enterPackStmt?: (ctx: PackStmtContext) => void;
	/**
	 * Exit a parse tree produced by `RiddleParser.packStmt`.
	 * @param ctx the parse tree
	 */
	exitPackStmt?: (ctx: PackStmtContext) => void;
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

