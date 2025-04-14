// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2

import {ParseTreeVisitor} from 'antlr4';


import { ProgramContext } from "./RiddleParser.js";
import { IntegerContext } from "./RiddleParser.js";
import { FloatContext } from "./RiddleParser.js";
import { BooleanContext } from "./RiddleParser.js";
import { ObjectContext } from "./RiddleParser.js";
import { VarDeclContext } from "./RiddleParser.js";
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
	 * Visit a parse tree produced by the `integer`
	 * labeled alternative in `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInteger?: (ctx: IntegerContext) => Result;
	/**
	 * Visit a parse tree produced by the `float`
	 * labeled alternative in `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloat?: (ctx: FloatContext) => Result;
	/**
	 * Visit a parse tree produced by the `boolean`
	 * labeled alternative in `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBoolean?: (ctx: BooleanContext) => Result;
	/**
	 * Visit a parse tree produced by the `object`
	 * labeled alternative in `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitObject?: (ctx: ObjectContext) => Result;
	/**
	 * Visit a parse tree produced by the `varDecl`
	 * labeled alternative in `RiddleParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;
	/**
	 * Visit a parse tree produced by `RiddleParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;
}

