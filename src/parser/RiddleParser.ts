// Generated from D:/Code/riddle-ts/RiddleParser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import RiddleParserListener from "./RiddleParserListener.js";
import RiddleParserVisitor from "./RiddleParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class RiddleParser extends Parser {
	public static readonly Var = 1;
	public static readonly Val = 2;
	public static readonly For = 3;
	public static readonly While = 4;
	public static readonly Continue = 5;
	public static readonly Break = 6;
	public static readonly If = 7;
	public static readonly Else = 8;
	public static readonly Func = 9;
	public static readonly Return = 10;
	public static readonly Import = 11;
	public static readonly Package = 12;
	public static readonly Class = 13;
	public static readonly True = 14;
	public static readonly False = 15;
	public static readonly Null = 16;
	public static readonly Try = 17;
	public static readonly Catch = 18;
	public static readonly Override = 19;
	public static readonly Static = 20;
	public static readonly Const = 21;
	public static readonly Public = 22;
	public static readonly Protected = 23;
	public static readonly Private = 24;
	public static readonly Virtual = 25;
	public static readonly Operator = 26;
	public static readonly LeftBracket = 27;
	public static readonly RightBracket = 28;
	public static readonly LeftSquare = 29;
	public static readonly RightSquare = 30;
	public static readonly LeftCurly = 31;
	public static readonly RightCurly = 32;
	public static readonly Colon = 33;
	public static readonly Semi = 34;
	public static readonly Comma = 35;
	public static readonly Equal = 36;
	public static readonly NotEqual = 37;
	public static readonly Assign = 38;
	public static readonly Greater = 39;
	public static readonly GreaterEqual = 40;
	public static readonly Less = 41;
	public static readonly LessEqual = 42;
	public static readonly LeftShift = 43;
	public static readonly RightShift = 44;
	public static readonly Add = 45;
	public static readonly Sub = 46;
	public static readonly Star = 47;
	public static readonly Div = 48;
	public static readonly Mod = 49;
	public static readonly Not = 50;
	public static readonly And = 51;
	public static readonly Or = 52;
	public static readonly Xor = 53;
	public static readonly Dot = 54;
	public static readonly DoubleQuotes = 55;
	public static readonly Quotes = 56;
	public static readonly Tilde = 57;
	public static readonly AddAssign = 58;
	public static readonly SubAssign = 59;
	public static readonly MulAssign = 60;
	public static readonly DivAssign = 61;
	public static readonly ModAssign = 62;
	public static readonly LeftShiftAssign = 63;
	public static readonly RightShiftAssign = 64;
	public static readonly AndAssign = 65;
	public static readonly OrAssign = 66;
	public static readonly XorAssign = 67;
	public static readonly Endl = 68;
	public static readonly Identifier = 69;
	public static readonly Hexadecimal = 70;
	public static readonly Decimal = 71;
	public static readonly Octal = 72;
	public static readonly Binary = 73;
	public static readonly Float = 74;
	public static readonly IntegerSequence = 75;
	public static readonly HEX_DIGIT = 76;
	public static readonly OCTAL_DIGIT = 77;
	public static readonly BINARY_DIGIT = 78;
	public static readonly DIGIT = 79;
	public static readonly STRING = 80;
	public static readonly CHAR = 81;
	public static readonly LINE_COMMENT = 82;
	public static readonly BLOCK_COMMENT = 83;
	public static readonly WHITESPACE = 84;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_program = 0;
	public static readonly RULE_expressionEnd = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_statement = 3;
	public static readonly RULE_packStmt = 4;
	public static readonly RULE_varDecl = 5;
	public static readonly RULE_block = 6;
	public static readonly RULE_initList = 7;
	public static readonly RULE_declArgs = 8;
	public static readonly RULE_modifier = 9;
	public static readonly RULE_funcDecl = 10;
	public static readonly RULE_ifStmt = 11;
	public static readonly RULE_whileStmt = 12;
	public static readonly RULE_forStmt = 13;
	public static readonly RULE_returnStmt = 14;
	public static readonly RULE_classDecl = 15;
	public static readonly RULE_id = 16;
	public static readonly literalNames: (string | null)[] = [ null, "'var'", 
                                                            "'val'", "'for'", 
                                                            "'while'", "'continue'", 
                                                            "'break'", "'if'", 
                                                            "'else'", "'fun'", 
                                                            "'return'", 
                                                            "'import'", 
                                                            "'package'", 
                                                            "'class'", "'true'", 
                                                            "'false'", "'null'", 
                                                            "'try'", "'catch'", 
                                                            "'override'", 
                                                            "'static'", 
                                                            "'const'", "'public'", 
                                                            "'protected'", 
                                                            "'private'", 
                                                            "'virtual'", 
                                                            "'operator'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "':'", "';'", 
                                                            "','", "'=='", 
                                                            "'!='", "'='", 
                                                            "'>'", "'>='", 
                                                            "'<'", "'<='", 
                                                            "'<<'", "'>>'", 
                                                            "'+'", "'-'", 
                                                            "'*'", "'/'", 
                                                            "'%'", "'!'", 
                                                            "'&'", "'|'", 
                                                            "'^'", "'.'", 
                                                            "'\"'", "'''", 
                                                            "'~'", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'%='", 
                                                            "'<<='", "'>>='", 
                                                            "'&='", "'|='", 
                                                            "'^='", "'\\n'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "Var", 
                                                             "Val", "For", 
                                                             "While", "Continue", 
                                                             "Break", "If", 
                                                             "Else", "Func", 
                                                             "Return", "Import", 
                                                             "Package", 
                                                             "Class", "True", 
                                                             "False", "Null", 
                                                             "Try", "Catch", 
                                                             "Override", 
                                                             "Static", "Const", 
                                                             "Public", "Protected", 
                                                             "Private", 
                                                             "Virtual", 
                                                             "Operator", 
                                                             "LeftBracket", 
                                                             "RightBracket", 
                                                             "LeftSquare", 
                                                             "RightSquare", 
                                                             "LeftCurly", 
                                                             "RightCurly", 
                                                             "Colon", "Semi", 
                                                             "Comma", "Equal", 
                                                             "NotEqual", 
                                                             "Assign", "Greater", 
                                                             "GreaterEqual", 
                                                             "Less", "LessEqual", 
                                                             "LeftShift", 
                                                             "RightShift", 
                                                             "Add", "Sub", 
                                                             "Star", "Div", 
                                                             "Mod", "Not", 
                                                             "And", "Or", 
                                                             "Xor", "Dot", 
                                                             "DoubleQuotes", 
                                                             "Quotes", "Tilde", 
                                                             "AddAssign", 
                                                             "SubAssign", 
                                                             "MulAssign", 
                                                             "DivAssign", 
                                                             "ModAssign", 
                                                             "LeftShiftAssign", 
                                                             "RightShiftAssign", 
                                                             "AndAssign", 
                                                             "OrAssign", 
                                                             "XorAssign", 
                                                             "Endl", "Identifier", 
                                                             "Hexadecimal", 
                                                             "Decimal", 
                                                             "Octal", "Binary", 
                                                             "Float", "IntegerSequence", 
                                                             "HEX_DIGIT", 
                                                             "OCTAL_DIGIT", 
                                                             "BINARY_DIGIT", 
                                                             "DIGIT", "STRING", 
                                                             "CHAR", "LINE_COMMENT", 
                                                             "BLOCK_COMMENT", 
                                                             "WHITESPACE" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "expressionEnd", "expression", "statement", "packStmt", "varDecl", 
		"block", "initList", "declArgs", "modifier", "funcDecl", "ifStmt", "whileStmt", 
		"forStmt", "returnStmt", "classDecl", "id",
	];
	public get grammarFileName(): string { return "RiddleParser.g4"; }
	public get literalNames(): (string | null)[] { return RiddleParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return RiddleParser.symbolicNames; }
	public get ruleNames(): string[] { return RiddleParser.ruleNames; }
	public get serializedATN(): number[] { return RiddleParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, RiddleParser._ATN, RiddleParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let localctx: ProgramContext = new ProgramContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, RiddleParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 37;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 8468481) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 75) !== 0)) {
				{
				{
				this.state = 34;
				this.expressionEnd();
				}
				}
				this.state = 39;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 40;
			this.match(RiddleParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expressionEnd(): ExpressionEndContext {
		let localctx: ExpressionEndContext = new ExpressionEndContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, RiddleParser.RULE_expressionEnd);
		try {
			this.state = 49;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 27:
			case 31:
			case 45:
			case 46:
			case 47:
			case 50:
			case 57:
			case 69:
			case 71:
			case 74:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 42;
				this.expression(0);
				this.state = 43;
				this.match(RiddleParser.Semi);
				this.state = 45;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 44;
					this.match(RiddleParser.Endl);
					}
					break;
				}
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 47;
				this.match(RiddleParser.Endl);
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 48;
				this.match(RiddleParser.Semi);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 4;
		this.enterRecursionRule(localctx, 4, RiddleParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 7:
			case 9:
			case 10:
			case 12:
			case 13:
			case 19:
			case 20:
			case 22:
			case 23:
			case 24:
			case 31:
				{
				localctx = new StatementExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 52;
				this.statement();
				}
				break;
			case 47:
				{
				localctx = new LoadExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 53;
				this.match(RiddleParser.Star);
				this.state = 54;
				(localctx as LoadExprContext)._obj = this.expression(18);
				}
				break;
			case 45:
			case 46:
			case 50:
			case 57:
				{
				localctx = new UnaryOpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 55;
				(localctx as UnaryOpContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 4131) !== 0))) {
				    (localctx as UnaryOpContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 56;
				(localctx as UnaryOpContext)._value = this.expression(17);
				}
				break;
			case 71:
				{
				localctx = new IntegerContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 57;
				this.match(RiddleParser.Decimal);
				}
				break;
			case 74:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 58;
				this.match(RiddleParser.Float);
				}
				break;
			case 14:
			case 15:
				{
				localctx = new BooleanContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 59;
				_la = this._input.LA(1);
				if(!(_la===14 || _la===15)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 69:
				{
				localctx = new ObjectContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 60;
				this.id();
				}
				break;
			case 27:
				{
				localctx = new BracketExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 61;
				this.match(RiddleParser.LeftBracket);
				this.state = 62;
				(localctx as BracketExprContext)._value = this.expression(0);
				this.state = 63;
				this.match(RiddleParser.RightBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 126;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 124;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ScopeAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ScopeAccessContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 67;
						if (!(this.precpred(this._ctx, 22))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 22)");
						}
						this.state = 68;
						this.match(RiddleParser.Colon);
						this.state = 69;
						this.match(RiddleParser.Colon);
						this.state = 70;
						(localctx as ScopeAccessContext)._right = this.expression(23);
						}
						break;
					case 2:
						{
						localctx = new MemberAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberAccessContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 71;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 72;
						this.match(RiddleParser.Dot);
						this.state = 73;
						(localctx as MemberAccessContext)._right = this.expression(22);
						}
						break;
					case 3:
						{
						localctx = new MulOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MulOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 74;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 75;
						(localctx as MulOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 7) !== 0))) {
						    (localctx as MulOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 76;
						(localctx as MulOpContext)._right = this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new AddOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 78;
						(localctx as AddOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===45 || _la===46)) {
						    (localctx as AddOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 79;
						(localctx as AddOpContext)._right = this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ShiftOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ShiftOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 81;
						(localctx as ShiftOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===43 || _la===44)) {
						    (localctx as ShiftOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 82;
						(localctx as ShiftOpContext)._right = this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new RelOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as RelOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 84;
						(localctx as RelOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & 15) !== 0))) {
						    (localctx as RelOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 85;
						(localctx as RelOpContext)._right = this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new EqOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 86;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 87;
						(localctx as EqOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===36 || _la===37)) {
						    (localctx as EqOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 88;
						(localctx as EqOpContext)._right = this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new BitAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 89;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 90;
						this.match(RiddleParser.And);
						this.state = 91;
						(localctx as BitAndContext)._right = this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new BitXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 93;
						this.match(RiddleParser.Xor);
						this.state = 94;
						(localctx as BitXorContext)._right = this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new BitOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 95;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 96;
						this.match(RiddleParser.Or);
						this.state = 97;
						(localctx as BitOrContext)._right = this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new LogicAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 98;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 99;
						this.match(RiddleParser.And);
						this.state = 100;
						this.match(RiddleParser.And);
						this.state = 101;
						(localctx as LogicAndContext)._right = this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new LogicOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 102;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 103;
						this.match(RiddleParser.Or);
						this.state = 104;
						this.match(RiddleParser.Or);
						this.state = 105;
						(localctx as LogicOrContext)._right = this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new CompoundAssignOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompoundAssignOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 106;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 107;
						(localctx as CompoundAssignOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 1072693249) !== 0))) {
						    (localctx as CompoundAssignOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 108;
						(localctx as CompoundAssignOpContext)._right = this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new CallExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CallExprContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 109;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 110;
						this.match(RiddleParser.LeftBracket);
						this.state = 119;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 620761127) !== 0)) {
							{
							this.state = 111;
							this.expression(0);
							this.state = 116;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===35) {
								{
								{
								this.state = 112;
								this.match(RiddleParser.Comma);
								this.state = 113;
								this.expression(0);
								}
								}
								this.state = 118;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 121;
						this.match(RiddleParser.RightBracket);
						}
						break;
					case 15:
						{
						localctx = new PointerToContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as PointerToContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 122;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 123;
						this.match(RiddleParser.Star);
						}
						break;
					}
					}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, RiddleParser.RULE_statement);
		try {
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 129;
				this.varDecl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 130;
				this.funcDecl();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 131;
				this.classDecl();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 132;
				this.initList();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 133;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 134;
				this.returnStmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 135;
				this.packStmt();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 136;
				this.ifStmt();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 137;
				this.whileStmt();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 10);
				{
				this.state = 138;
				this.forStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public packStmt(): PackStmtContext {
		let localctx: PackStmtContext = new PackStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RiddleParser.RULE_packStmt);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 141;
			this.match(RiddleParser.Package);
			this.state = 142;
			this.id();
			this.state = 147;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 143;
					this.match(RiddleParser.Dot);
					this.state = 144;
					this.id();
					}
					}
				}
				this.state = 149;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, RiddleParser.RULE_varDecl);
		let _la: number;
		try {
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0)) {
					{
					{
					this.state = 150;
					this.modifier();
					}
					}
					this.state = 155;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 156;
				localctx._varType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===1 || _la===2)) {
				    localctx._varType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 157;
				localctx._name = this.id();
				this.state = 158;
				this.match(RiddleParser.Colon);
				this.state = 159;
				localctx._type_ = this.expression(0);
				this.state = 160;
				this.match(RiddleParser.Assign);
				this.state = 161;
				localctx._value = this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0)) {
					{
					{
					this.state = 163;
					this.modifier();
					}
					}
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 169;
				localctx._varType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===1 || _la===2)) {
				    localctx._varType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 170;
				localctx._name = this.id();
				this.state = 171;
				this.match(RiddleParser.Assign);
				this.state = 172;
				localctx._value = this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 177;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0)) {
					{
					{
					this.state = 174;
					this.modifier();
					}
					}
					this.state = 179;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 180;
				localctx._varType = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(_la===1 || _la===2)) {
				    localctx._varType = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 181;
				localctx._name = this.id();
				this.state = 182;
				this.match(RiddleParser.Colon);
				this.state = 183;
				localctx._type_ = this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, RiddleParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 187;
			this.match(RiddleParser.LeftCurly);
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 8468481) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 75) !== 0)) {
				{
				{
				this.state = 188;
				this.expressionEnd();
				}
				}
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 194;
			this.match(RiddleParser.RightCurly);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public initList(): InitListContext {
		let localctx: InitListContext = new InitListContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, RiddleParser.RULE_initList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			this.match(RiddleParser.LeftCurly);
			this.state = 205;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 620761127) !== 0)) {
				{
				this.state = 197;
				this.expression(0);
				this.state = 202;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===35) {
					{
					{
					this.state = 198;
					this.match(RiddleParser.Comma);
					this.state = 199;
					this.expression(0);
					}
					}
					this.state = 204;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 207;
			this.match(RiddleParser.RightCurly);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declArgs(): DeclArgsContext {
		let localctx: DeclArgsContext = new DeclArgsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, RiddleParser.RULE_declArgs);
		let _la: number;
		try {
			let _alt: number;
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 209;
						this.id();
						this.state = 210;
						this.match(RiddleParser.Colon);
						this.state = 211;
						this.expression(0);
						this.state = 212;
						this.match(RiddleParser.Comma);
						}
						}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
				}
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 219;
					this.id();
					this.state = 220;
					this.match(RiddleParser.Colon);
					this.state = 221;
					this.expression(0);
					}
				}

				localctx.isVar = false;
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 231;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 226;
					this.id();
					this.state = 227;
					this.match(RiddleParser.Colon);
					this.state = 228;
					this.expression(0);
					this.state = 229;
					this.match(RiddleParser.Comma);
					}
					}
					this.state = 233;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la===69);
				this.state = 235;
				this.match(RiddleParser.Dot);
				this.state = 236;
				this.match(RiddleParser.Dot);
				this.state = 237;
				this.match(RiddleParser.Dot);
				localctx.isVar = true;
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 240;
				this.match(RiddleParser.Dot);
				this.state = 241;
				this.match(RiddleParser.Dot);
				this.state = 242;
				this.match(RiddleParser.Dot);
				localctx.isVar = true;
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let localctx: ModifierContext = new ModifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, RiddleParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public funcDecl(): FuncDeclContext {
		let localctx: FuncDeclContext = new FuncDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, RiddleParser.RULE_funcDecl);
		let _la: number;
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 251;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0)) {
					{
					{
					this.state = 248;
					this.modifier();
					}
					}
					this.state = 253;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 254;
				this.match(RiddleParser.Func);
				this.state = 255;
				localctx._name = this.id();
				this.state = 256;
				this.match(RiddleParser.LeftBracket);
				this.state = 257;
				this.declArgs();
				this.state = 258;
				this.match(RiddleParser.RightBracket);
				this.state = 262;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===46) {
					{
					this.state = 259;
					this.match(RiddleParser.Sub);
					this.state = 260;
					this.match(RiddleParser.Greater);
					this.state = 261;
					localctx._return_type = this.expression(0);
					}
				}

				this.state = 264;
				localctx._body = this.block();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 30932992) !== 0)) {
					{
					{
					this.state = 266;
					this.modifier();
					}
					}
					this.state = 271;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 272;
				this.match(RiddleParser.Func);
				this.state = 273;
				localctx._name = this.id();
				this.state = 274;
				this.match(RiddleParser.LeftBracket);
				this.state = 275;
				this.declArgs();
				this.state = 276;
				this.match(RiddleParser.RightBracket);
				this.state = 277;
				this.match(RiddleParser.Sub);
				this.state = 278;
				this.match(RiddleParser.Greater);
				this.state = 279;
				localctx._return_type = this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let localctx: IfStmtContext = new IfStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, RiddleParser.RULE_ifStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 283;
			this.match(RiddleParser.If);
			this.state = 284;
			this.match(RiddleParser.LeftBracket);
			this.state = 285;
			localctx._cond = this.expression(0);
			this.state = 286;
			this.match(RiddleParser.RightBracket);
			this.state = 287;
			localctx._then = this.block();
			this.state = 290;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 288;
				this.match(RiddleParser.Else);
				this.state = 289;
				localctx._else_ = this.block();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public whileStmt(): WhileStmtContext {
		let localctx: WhileStmtContext = new WhileStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, RiddleParser.RULE_whileStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 292;
			this.match(RiddleParser.While);
			this.state = 293;
			this.match(RiddleParser.LeftBracket);
			this.state = 294;
			localctx._cond = this.expression(0);
			this.state = 295;
			this.match(RiddleParser.RightBracket);
			this.state = 296;
			localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public forStmt(): ForStmtContext {
		let localctx: ForStmtContext = new ForStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, RiddleParser.RULE_forStmt);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 298;
			this.match(RiddleParser.For);
			this.state = 299;
			this.match(RiddleParser.LeftBracket);
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 620761127) !== 0)) {
				{
				this.state = 300;
				localctx._init = this.expression(0);
				}
			}

			this.state = 303;
			this.match(RiddleParser.Semi);
			this.state = 305;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 620761127) !== 0)) {
				{
				this.state = 304;
				localctx._cond = this.expression(0);
				}
			}

			this.state = 307;
			this.match(RiddleParser.Semi);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2312697502) !== 0) || ((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 620761127) !== 0)) {
				{
				this.state = 308;
				localctx._change = this.expression(0);
				}
			}

			this.state = 311;
			this.match(RiddleParser.RightBracket);
			this.state = 312;
			localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let localctx: ReturnStmtContext = new ReturnStmtContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, RiddleParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 314;
			this.match(RiddleParser.Return);
			this.state = 316;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 315;
				localctx._result = this.expression(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public classDecl(): ClassDeclContext {
		let localctx: ClassDeclContext = new ClassDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, RiddleParser.RULE_classDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 318;
			this.match(RiddleParser.Class);
			this.state = 319;
			localctx._name = this.id();
			this.state = 320;
			localctx._body = this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let localctx: IdContext = new IdContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, RiddleParser.RULE_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.match(RiddleParser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 22);
		case 1:
			return this.precpred(this._ctx, 21);
		case 2:
			return this.precpred(this._ctx, 16);
		case 3:
			return this.precpred(this._ctx, 15);
		case 4:
			return this.precpred(this._ctx, 14);
		case 5:
			return this.precpred(this._ctx, 13);
		case 6:
			return this.precpred(this._ctx, 12);
		case 7:
			return this.precpred(this._ctx, 11);
		case 8:
			return this.precpred(this._ctx, 10);
		case 9:
			return this.precpred(this._ctx, 9);
		case 10:
			return this.precpred(this._ctx, 8);
		case 11:
			return this.precpred(this._ctx, 7);
		case 12:
			return this.precpred(this._ctx, 6);
		case 13:
			return this.precpred(this._ctx, 20);
		case 14:
			return this.precpred(this._ctx, 19);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,84,325,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,1,0,
	5,0,36,8,0,10,0,12,0,39,9,0,1,0,1,0,1,1,1,1,1,1,3,1,46,8,1,1,1,1,1,3,1,
	50,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,66,8,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,115,8,2,10,2,12,2,118,
	9,2,3,2,120,8,2,1,2,1,2,1,2,5,2,125,8,2,10,2,12,2,128,9,2,1,3,1,3,1,3,1,
	3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,140,8,3,1,4,1,4,1,4,1,4,5,4,146,8,4,10,4,
	12,4,149,9,4,1,5,5,5,152,8,5,10,5,12,5,155,9,5,1,5,1,5,1,5,1,5,1,5,1,5,
	1,5,1,5,5,5,165,8,5,10,5,12,5,168,9,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,176,8,
	5,10,5,12,5,179,9,5,1,5,1,5,1,5,1,5,1,5,3,5,186,8,5,1,6,1,6,5,6,190,8,6,
	10,6,12,6,193,9,6,1,6,1,6,1,7,1,7,1,7,1,7,5,7,201,8,7,10,7,12,7,204,9,7,
	3,7,206,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,5,8,215,8,8,10,8,12,8,218,9,8,1,
	8,1,8,1,8,1,8,3,8,224,8,8,1,8,1,8,1,8,1,8,1,8,1,8,4,8,232,8,8,11,8,12,8,
	233,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,245,8,8,1,9,1,9,1,10,5,10,250,
	8,10,10,10,12,10,253,9,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,
	263,8,10,1,10,1,10,1,10,5,10,268,8,10,10,10,12,10,271,9,10,1,10,1,10,1,
	10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,282,8,10,1,11,1,11,1,11,1,11,1,11,
	1,11,1,11,3,11,291,8,11,1,12,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,3,
	13,302,8,13,1,13,1,13,3,13,306,8,13,1,13,1,13,3,13,310,8,13,1,13,1,13,1,
	13,1,14,1,14,3,14,317,8,14,1,15,1,15,1,15,1,15,1,16,1,16,1,16,0,1,4,17,
	0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,0,10,3,0,45,46,50,50,57,57,
	1,0,14,15,1,0,47,49,1,0,45,46,1,0,43,44,1,0,39,42,1,0,36,37,2,0,38,38,58,
	67,1,0,1,2,2,0,19,20,22,24,367,0,37,1,0,0,0,2,49,1,0,0,0,4,65,1,0,0,0,6,
	139,1,0,0,0,8,141,1,0,0,0,10,185,1,0,0,0,12,187,1,0,0,0,14,196,1,0,0,0,
	16,244,1,0,0,0,18,246,1,0,0,0,20,281,1,0,0,0,22,283,1,0,0,0,24,292,1,0,
	0,0,26,298,1,0,0,0,28,314,1,0,0,0,30,318,1,0,0,0,32,322,1,0,0,0,34,36,3,
	2,1,0,35,34,1,0,0,0,36,39,1,0,0,0,37,35,1,0,0,0,37,38,1,0,0,0,38,40,1,0,
	0,0,39,37,1,0,0,0,40,41,5,0,0,1,41,1,1,0,0,0,42,43,3,4,2,0,43,45,5,34,0,
	0,44,46,5,68,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,50,1,0,0,0,47,50,5,68,0,
	0,48,50,5,34,0,0,49,42,1,0,0,0,49,47,1,0,0,0,49,48,1,0,0,0,50,3,1,0,0,0,
	51,52,6,2,-1,0,52,66,3,6,3,0,53,54,5,47,0,0,54,66,3,4,2,18,55,56,7,0,0,
	0,56,66,3,4,2,17,57,66,5,71,0,0,58,66,5,74,0,0,59,66,7,1,0,0,60,66,3,32,
	16,0,61,62,5,27,0,0,62,63,3,4,2,0,63,64,5,28,0,0,64,66,1,0,0,0,65,51,1,
	0,0,0,65,53,1,0,0,0,65,55,1,0,0,0,65,57,1,0,0,0,65,58,1,0,0,0,65,59,1,0,
	0,0,65,60,1,0,0,0,65,61,1,0,0,0,66,126,1,0,0,0,67,68,10,22,0,0,68,69,5,
	33,0,0,69,70,5,33,0,0,70,125,3,4,2,23,71,72,10,21,0,0,72,73,5,54,0,0,73,
	125,3,4,2,22,74,75,10,16,0,0,75,76,7,2,0,0,76,125,3,4,2,17,77,78,10,15,
	0,0,78,79,7,3,0,0,79,125,3,4,2,16,80,81,10,14,0,0,81,82,7,4,0,0,82,125,
	3,4,2,15,83,84,10,13,0,0,84,85,7,5,0,0,85,125,3,4,2,14,86,87,10,12,0,0,
	87,88,7,6,0,0,88,125,3,4,2,13,89,90,10,11,0,0,90,91,5,51,0,0,91,125,3,4,
	2,12,92,93,10,10,0,0,93,94,5,53,0,0,94,125,3,4,2,11,95,96,10,9,0,0,96,97,
	5,52,0,0,97,125,3,4,2,10,98,99,10,8,0,0,99,100,5,51,0,0,100,101,5,51,0,
	0,101,125,3,4,2,9,102,103,10,7,0,0,103,104,5,52,0,0,104,105,5,52,0,0,105,
	125,3,4,2,8,106,107,10,6,0,0,107,108,7,7,0,0,108,125,3,4,2,7,109,110,10,
	20,0,0,110,119,5,27,0,0,111,116,3,4,2,0,112,113,5,35,0,0,113,115,3,4,2,
	0,114,112,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,1,0,0,0,117,120,
	1,0,0,0,118,116,1,0,0,0,119,111,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,
	121,125,5,28,0,0,122,123,10,19,0,0,123,125,5,47,0,0,124,67,1,0,0,0,124,
	71,1,0,0,0,124,74,1,0,0,0,124,77,1,0,0,0,124,80,1,0,0,0,124,83,1,0,0,0,
	124,86,1,0,0,0,124,89,1,0,0,0,124,92,1,0,0,0,124,95,1,0,0,0,124,98,1,0,
	0,0,124,102,1,0,0,0,124,106,1,0,0,0,124,109,1,0,0,0,124,122,1,0,0,0,125,
	128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,5,1,0,0,0,128,126,1,0,0,
	0,129,140,3,10,5,0,130,140,3,20,10,0,131,140,3,30,15,0,132,140,3,14,7,0,
	133,140,3,12,6,0,134,140,3,28,14,0,135,140,3,8,4,0,136,140,3,22,11,0,137,
	140,3,24,12,0,138,140,3,26,13,0,139,129,1,0,0,0,139,130,1,0,0,0,139,131,
	1,0,0,0,139,132,1,0,0,0,139,133,1,0,0,0,139,134,1,0,0,0,139,135,1,0,0,0,
	139,136,1,0,0,0,139,137,1,0,0,0,139,138,1,0,0,0,140,7,1,0,0,0,141,142,5,
	12,0,0,142,147,3,32,16,0,143,144,5,54,0,0,144,146,3,32,16,0,145,143,1,0,
	0,0,146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,9,1,0,0,0,149,147,
	1,0,0,0,150,152,3,18,9,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,
	0,153,154,1,0,0,0,154,156,1,0,0,0,155,153,1,0,0,0,156,157,7,8,0,0,157,158,
	3,32,16,0,158,159,5,33,0,0,159,160,3,4,2,0,160,161,5,38,0,0,161,162,3,4,
	2,0,162,186,1,0,0,0,163,165,3,18,9,0,164,163,1,0,0,0,165,168,1,0,0,0,166,
	164,1,0,0,0,166,167,1,0,0,0,167,169,1,0,0,0,168,166,1,0,0,0,169,170,7,8,
	0,0,170,171,3,32,16,0,171,172,5,38,0,0,172,173,3,4,2,0,173,186,1,0,0,0,
	174,176,3,18,9,0,175,174,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,
	1,0,0,0,178,180,1,0,0,0,179,177,1,0,0,0,180,181,7,8,0,0,181,182,3,32,16,
	0,182,183,5,33,0,0,183,184,3,4,2,0,184,186,1,0,0,0,185,153,1,0,0,0,185,
	166,1,0,0,0,185,177,1,0,0,0,186,11,1,0,0,0,187,191,5,31,0,0,188,190,3,2,
	1,0,189,188,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,
	194,1,0,0,0,193,191,1,0,0,0,194,195,5,32,0,0,195,13,1,0,0,0,196,205,5,31,
	0,0,197,202,3,4,2,0,198,199,5,35,0,0,199,201,3,4,2,0,200,198,1,0,0,0,201,
	204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,206,1,0,0,0,204,202,1,0,
	0,0,205,197,1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,5,32,0,0,208,
	15,1,0,0,0,209,210,3,32,16,0,210,211,5,33,0,0,211,212,3,4,2,0,212,213,5,
	35,0,0,213,215,1,0,0,0,214,209,1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,
	216,217,1,0,0,0,217,223,1,0,0,0,218,216,1,0,0,0,219,220,3,32,16,0,220,221,
	5,33,0,0,221,222,3,4,2,0,222,224,1,0,0,0,223,219,1,0,0,0,223,224,1,0,0,
	0,224,225,1,0,0,0,225,245,6,8,-1,0,226,227,3,32,16,0,227,228,5,33,0,0,228,
	229,3,4,2,0,229,230,5,35,0,0,230,232,1,0,0,0,231,226,1,0,0,0,232,233,1,
	0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,236,5,54,0,0,
	236,237,5,54,0,0,237,238,5,54,0,0,238,239,6,8,-1,0,239,245,1,0,0,0,240,
	241,5,54,0,0,241,242,5,54,0,0,242,243,5,54,0,0,243,245,6,8,-1,0,244,216,
	1,0,0,0,244,231,1,0,0,0,244,240,1,0,0,0,245,17,1,0,0,0,246,247,7,9,0,0,
	247,19,1,0,0,0,248,250,3,18,9,0,249,248,1,0,0,0,250,253,1,0,0,0,251,249,
	1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,0,253,251,1,0,0,0,254,255,5,9,0,0,
	255,256,3,32,16,0,256,257,5,27,0,0,257,258,3,16,8,0,258,262,5,28,0,0,259,
	260,5,46,0,0,260,261,5,39,0,0,261,263,3,4,2,0,262,259,1,0,0,0,262,263,1,
	0,0,0,263,264,1,0,0,0,264,265,3,12,6,0,265,282,1,0,0,0,266,268,3,18,9,0,
	267,266,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,270,1,0,0,0,270,272,
	1,0,0,0,271,269,1,0,0,0,272,273,5,9,0,0,273,274,3,32,16,0,274,275,5,27,
	0,0,275,276,3,16,8,0,276,277,5,28,0,0,277,278,5,46,0,0,278,279,5,39,0,0,
	279,280,3,4,2,0,280,282,1,0,0,0,281,251,1,0,0,0,281,269,1,0,0,0,282,21,
	1,0,0,0,283,284,5,7,0,0,284,285,5,27,0,0,285,286,3,4,2,0,286,287,5,28,0,
	0,287,290,3,12,6,0,288,289,5,8,0,0,289,291,3,12,6,0,290,288,1,0,0,0,290,
	291,1,0,0,0,291,23,1,0,0,0,292,293,5,4,0,0,293,294,5,27,0,0,294,295,3,4,
	2,0,295,296,5,28,0,0,296,297,3,12,6,0,297,25,1,0,0,0,298,299,5,3,0,0,299,
	301,5,27,0,0,300,302,3,4,2,0,301,300,1,0,0,0,301,302,1,0,0,0,302,303,1,
	0,0,0,303,305,5,34,0,0,304,306,3,4,2,0,305,304,1,0,0,0,305,306,1,0,0,0,
	306,307,1,0,0,0,307,309,5,34,0,0,308,310,3,4,2,0,309,308,1,0,0,0,309,310,
	1,0,0,0,310,311,1,0,0,0,311,312,5,28,0,0,312,313,3,12,6,0,313,27,1,0,0,
	0,314,316,5,10,0,0,315,317,3,4,2,0,316,315,1,0,0,0,316,317,1,0,0,0,317,
	29,1,0,0,0,318,319,5,13,0,0,319,320,3,32,16,0,320,321,3,12,6,0,321,31,1,
	0,0,0,322,323,5,69,0,0,323,33,1,0,0,0,30,37,45,49,65,116,119,124,126,139,
	147,153,166,177,185,191,202,205,216,223,233,244,251,262,269,281,290,301,
	305,309,316];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RiddleParser.__ATN) {
			RiddleParser.__ATN = new ATNDeserializer().deserialize(RiddleParser._serializedATN);
		}

		return RiddleParser.__ATN;
	}


	static DecisionsToDFA = RiddleParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgramContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(RiddleParser.EOF, 0);
	}
	public expressionEnd_list(): ExpressionEndContext[] {
		return this.getTypedRuleContexts(ExpressionEndContext) as ExpressionEndContext[];
	}
	public expressionEnd(i: number): ExpressionEndContext {
		return this.getTypedRuleContext(ExpressionEndContext, i) as ExpressionEndContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_program;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterProgram) {
	 		listener.enterProgram(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitProgram) {
	 		listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionEndContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Semi(): TerminalNode {
		return this.getToken(RiddleParser.Semi, 0);
	}
	public Endl(): TerminalNode {
		return this.getToken(RiddleParser.Endl, 0);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_expressionEnd;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterExpressionEnd) {
	 		listener.enterExpressionEnd(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitExpressionEnd) {
	 		listener.exitExpressionEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitExpressionEnd) {
			return visitor.visitExpressionEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_expression;
	}
	public override copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class LoadExprContext extends ExpressionContext {
	public _obj!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Star(): TerminalNode {
		return this.getToken(RiddleParser.Star, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterLoadExpr) {
	 		listener.enterLoadExpr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitLoadExpr) {
	 		listener.exitLoadExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitLoadExpr) {
			return visitor.visitLoadExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MemberAccessContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Dot(): TerminalNode {
		return this.getToken(RiddleParser.Dot, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterMemberAccess) {
	 		listener.enterMemberAccess(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitMemberAccess) {
	 		listener.exitMemberAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitMemberAccess) {
			return visitor.visitMemberAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EqOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Equal(): TerminalNode {
		return this.getToken(RiddleParser.Equal, 0);
	}
	public NotEqual(): TerminalNode {
		return this.getToken(RiddleParser.NotEqual, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterEqOp) {
	 		listener.enterEqOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitEqOp) {
	 		listener.exitEqOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitEqOp) {
			return visitor.visitEqOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BracketExprContext extends ExpressionContext {
	public _value!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBracketExpr) {
	 		listener.enterBracketExpr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBracketExpr) {
	 		listener.exitBracketExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBracketExpr) {
			return visitor.visitBracketExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitOrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Or(): TerminalNode {
		return this.getToken(RiddleParser.Or, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBitOr) {
	 		listener.enterBitOr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBitOr) {
	 		listener.exitBitOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBitOr) {
			return visitor.visitBitOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicOrContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Or_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Or);
	}
	public Or(i: number): TerminalNode {
		return this.getToken(RiddleParser.Or, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterLogicOr) {
	 		listener.enterLogicOr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitLogicOr) {
	 		listener.exitLogicOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitLogicOr) {
			return visitor.visitLogicOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AddOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Add(): TerminalNode {
		return this.getToken(RiddleParser.Add, 0);
	}
	public Sub(): TerminalNode {
		return this.getToken(RiddleParser.Sub, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterAddOp) {
	 		listener.enterAddOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitAddOp) {
	 		listener.exitAddOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitAddOp) {
			return visitor.visitAddOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CompoundAssignOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Assign(): TerminalNode {
		return this.getToken(RiddleParser.Assign, 0);
	}
	public AddAssign(): TerminalNode {
		return this.getToken(RiddleParser.AddAssign, 0);
	}
	public SubAssign(): TerminalNode {
		return this.getToken(RiddleParser.SubAssign, 0);
	}
	public MulAssign(): TerminalNode {
		return this.getToken(RiddleParser.MulAssign, 0);
	}
	public DivAssign(): TerminalNode {
		return this.getToken(RiddleParser.DivAssign, 0);
	}
	public ModAssign(): TerminalNode {
		return this.getToken(RiddleParser.ModAssign, 0);
	}
	public LeftShiftAssign(): TerminalNode {
		return this.getToken(RiddleParser.LeftShiftAssign, 0);
	}
	public RightShiftAssign(): TerminalNode {
		return this.getToken(RiddleParser.RightShiftAssign, 0);
	}
	public AndAssign(): TerminalNode {
		return this.getToken(RiddleParser.AndAssign, 0);
	}
	public XorAssign(): TerminalNode {
		return this.getToken(RiddleParser.XorAssign, 0);
	}
	public OrAssign(): TerminalNode {
		return this.getToken(RiddleParser.OrAssign, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterCompoundAssignOp) {
	 		listener.enterCompoundAssignOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitCompoundAssignOp) {
	 		listener.exitCompoundAssignOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitCompoundAssignOp) {
			return visitor.visitCompoundAssignOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnaryOpContext extends ExpressionContext {
	public _op!: Token;
	public _value!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public Not(): TerminalNode {
		return this.getToken(RiddleParser.Not, 0);
	}
	public Add(): TerminalNode {
		return this.getToken(RiddleParser.Add, 0);
	}
	public Sub(): TerminalNode {
		return this.getToken(RiddleParser.Sub, 0);
	}
	public Tilde(): TerminalNode {
		return this.getToken(RiddleParser.Tilde, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterUnaryOp) {
	 		listener.enterUnaryOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitUnaryOp) {
	 		listener.exitUnaryOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitUnaryOp) {
			return visitor.visitUnaryOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IntegerContext extends ExpressionContext {
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Decimal(): TerminalNode {
		return this.getToken(RiddleParser.Decimal, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterInteger) {
	 		listener.enterInteger(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitInteger) {
	 		listener.exitInteger(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitInteger) {
			return visitor.visitInteger(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FloatContext extends ExpressionContext {
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Float(): TerminalNode {
		return this.getToken(RiddleParser.Float, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterFloat) {
	 		listener.enterFloat(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitFloat) {
	 		listener.exitFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitFloat) {
			return visitor.visitFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ScopeAccessContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Colon_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Colon);
	}
	public Colon(i: number): TerminalNode {
		return this.getToken(RiddleParser.Colon, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterScopeAccess) {
	 		listener.enterScopeAccess(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitScopeAccess) {
	 		listener.exitScopeAccess(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitScopeAccess) {
			return visitor.visitScopeAccess(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RelOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Less(): TerminalNode {
		return this.getToken(RiddleParser.Less, 0);
	}
	public LessEqual(): TerminalNode {
		return this.getToken(RiddleParser.LessEqual, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(RiddleParser.Greater, 0);
	}
	public GreaterEqual(): TerminalNode {
		return this.getToken(RiddleParser.GreaterEqual, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterRelOp) {
	 		listener.enterRelOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitRelOp) {
	 		listener.exitRelOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitRelOp) {
			return visitor.visitRelOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PointerToContext extends ExpressionContext {
	public _obj!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Star(): TerminalNode {
		return this.getToken(RiddleParser.Star, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterPointerTo) {
	 		listener.enterPointerTo(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitPointerTo) {
	 		listener.exitPointerTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitPointerTo) {
			return visitor.visitPointerTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitAndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public And(): TerminalNode {
		return this.getToken(RiddleParser.And, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBitAnd) {
	 		listener.enterBitAnd(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBitAnd) {
	 		listener.exitBitAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBitAnd) {
			return visitor.visitBitAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LogicAndContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public And_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.And);
	}
	public And(i: number): TerminalNode {
		return this.getToken(RiddleParser.And, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterLogicAnd) {
	 		listener.enterLogicAnd(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitLogicAnd) {
	 		listener.exitLogicAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitLogicAnd) {
			return visitor.visitLogicAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BooleanContext extends ExpressionContext {
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public True(): TerminalNode {
		return this.getToken(RiddleParser.True, 0);
	}
	public False(): TerminalNode {
		return this.getToken(RiddleParser.False, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBoolean) {
	 		listener.enterBoolean(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBoolean) {
	 		listener.exitBoolean(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBoolean) {
			return visitor.visitBoolean(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Star(): TerminalNode {
		return this.getToken(RiddleParser.Star, 0);
	}
	public Div(): TerminalNode {
		return this.getToken(RiddleParser.Div, 0);
	}
	public Mod(): TerminalNode {
		return this.getToken(RiddleParser.Mod, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterMulOp) {
	 		listener.enterMulOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitMulOp) {
	 		listener.exitMulOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitMulOp) {
			return visitor.visitMulOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BitXorContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Xor(): TerminalNode {
		return this.getToken(RiddleParser.Xor, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBitXor) {
	 		listener.enterBitXor(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBitXor) {
	 		listener.exitBitXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBitXor) {
			return visitor.visitBitXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StatementExprContext extends ExpressionContext {
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public statement(): StatementContext {
		return this.getTypedRuleContext(StatementContext, 0) as StatementContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterStatementExpr) {
	 		listener.enterStatementExpr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitStatementExpr) {
	 		listener.exitStatementExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitStatementExpr) {
			return visitor.visitStatementExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CallExprContext extends ExpressionContext {
	public _obj!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(RiddleParser.Comma, i);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterCallExpr) {
	 		listener.enterCallExpr(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitCallExpr) {
	 		listener.exitCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitCallExpr) {
			return visitor.visitCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ObjectContext extends ExpressionContext {
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterObject) {
	 		listener.enterObject(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitObject) {
	 		listener.exitObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitObject) {
			return visitor.visitObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ShiftOpContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _op!: Token;
	public _right!: ExpressionContext;
	constructor(parser: RiddleParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LeftShift(): TerminalNode {
		return this.getToken(RiddleParser.LeftShift, 0);
	}
	public RightShift(): TerminalNode {
		return this.getToken(RiddleParser.RightShift, 0);
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterShiftOp) {
	 		listener.enterShiftOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitShiftOp) {
	 		listener.exitShiftOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitShiftOp) {
			return visitor.visitShiftOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public varDecl(): VarDeclContext {
		return this.getTypedRuleContext(VarDeclContext, 0) as VarDeclContext;
	}
	public funcDecl(): FuncDeclContext {
		return this.getTypedRuleContext(FuncDeclContext, 0) as FuncDeclContext;
	}
	public classDecl(): ClassDeclContext {
		return this.getTypedRuleContext(ClassDeclContext, 0) as ClassDeclContext;
	}
	public initList(): InitListContext {
		return this.getTypedRuleContext(InitListContext, 0) as InitListContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public returnStmt(): ReturnStmtContext {
		return this.getTypedRuleContext(ReturnStmtContext, 0) as ReturnStmtContext;
	}
	public packStmt(): PackStmtContext {
		return this.getTypedRuleContext(PackStmtContext, 0) as PackStmtContext;
	}
	public ifStmt(): IfStmtContext {
		return this.getTypedRuleContext(IfStmtContext, 0) as IfStmtContext;
	}
	public whileStmt(): WhileStmtContext {
		return this.getTypedRuleContext(WhileStmtContext, 0) as WhileStmtContext;
	}
	public forStmt(): ForStmtContext {
		return this.getTypedRuleContext(ForStmtContext, 0) as ForStmtContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_statement;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PackStmtContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Package(): TerminalNode {
		return this.getToken(RiddleParser.Package, 0);
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(RiddleParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_packStmt;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterPackStmt) {
	 		listener.enterPackStmt(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitPackStmt) {
	 		listener.exitPackStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitPackStmt) {
			return visitor.visitPackStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public _varType!: Token;
	public _name!: IdContext;
	public _type_!: ExpressionContext;
	public _value!: ExpressionContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Colon(): TerminalNode {
		return this.getToken(RiddleParser.Colon, 0);
	}
	public Assign(): TerminalNode {
		return this.getToken(RiddleParser.Assign, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Var(): TerminalNode {
		return this.getToken(RiddleParser.Var, 0);
	}
	public Val(): TerminalNode {
		return this.getToken(RiddleParser.Val, 0);
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_varDecl;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterVarDecl) {
	 		listener.enterVarDecl(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitVarDecl) {
	 		listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftCurly(): TerminalNode {
		return this.getToken(RiddleParser.LeftCurly, 0);
	}
	public RightCurly(): TerminalNode {
		return this.getToken(RiddleParser.RightCurly, 0);
	}
	public expressionEnd_list(): ExpressionEndContext[] {
		return this.getTypedRuleContexts(ExpressionEndContext) as ExpressionEndContext[];
	}
	public expressionEnd(i: number): ExpressionEndContext {
		return this.getTypedRuleContext(ExpressionEndContext, i) as ExpressionEndContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_block;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InitListContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LeftCurly(): TerminalNode {
		return this.getToken(RiddleParser.LeftCurly, 0);
	}
	public RightCurly(): TerminalNode {
		return this.getToken(RiddleParser.RightCurly, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(RiddleParser.Comma, i);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_initList;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterInitList) {
	 		listener.enterInitList(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitInitList) {
	 		listener.exitInitList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitInitList) {
			return visitor.visitInitList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclArgsContext extends ParserRuleContext {
	public isVar: boolean = false;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public id_list(): IdContext[] {
		return this.getTypedRuleContexts(IdContext) as IdContext[];
	}
	public id(i: number): IdContext {
		return this.getTypedRuleContext(IdContext, i) as IdContext;
	}
	public Colon_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Colon);
	}
	public Colon(i: number): TerminalNode {
		return this.getToken(RiddleParser.Colon, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public Comma_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Comma);
	}
	public Comma(i: number): TerminalNode {
		return this.getToken(RiddleParser.Comma, i);
	}
	public Dot_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Dot);
	}
	public Dot(i: number): TerminalNode {
		return this.getToken(RiddleParser.Dot, i);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_declArgs;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterDeclArgs) {
	 		listener.enterDeclArgs(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitDeclArgs) {
	 		listener.exitDeclArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitDeclArgs) {
			return visitor.visitDeclArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Static(): TerminalNode {
		return this.getToken(RiddleParser.Static, 0);
	}
	public Public(): TerminalNode {
		return this.getToken(RiddleParser.Public, 0);
	}
	public Protected(): TerminalNode {
		return this.getToken(RiddleParser.Protected, 0);
	}
	public Private(): TerminalNode {
		return this.getToken(RiddleParser.Private, 0);
	}
	public Override(): TerminalNode {
		return this.getToken(RiddleParser.Override, 0);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_modifier;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterModifier) {
	 		listener.enterModifier(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitModifier) {
	 		listener.exitModifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitModifier) {
			return visitor.visitModifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FuncDeclContext extends ParserRuleContext {
	public _name!: IdContext;
	public _return_type!: ExpressionContext;
	public _body!: BlockContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Func(): TerminalNode {
		return this.getToken(RiddleParser.Func, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public declArgs(): DeclArgsContext {
		return this.getTypedRuleContext(DeclArgsContext, 0) as DeclArgsContext;
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public modifier_list(): ModifierContext[] {
		return this.getTypedRuleContexts(ModifierContext) as ModifierContext[];
	}
	public modifier(i: number): ModifierContext {
		return this.getTypedRuleContext(ModifierContext, i) as ModifierContext;
	}
	public Sub(): TerminalNode {
		return this.getToken(RiddleParser.Sub, 0);
	}
	public Greater(): TerminalNode {
		return this.getToken(RiddleParser.Greater, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_funcDecl;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterFuncDecl) {
	 		listener.enterFuncDecl(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitFuncDecl) {
	 		listener.exitFuncDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitFuncDecl) {
			return visitor.visitFuncDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public _then!: BlockContext;
	public _else_!: BlockContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public If(): TerminalNode {
		return this.getToken(RiddleParser.If, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public Else(): TerminalNode {
		return this.getToken(RiddleParser.Else, 0);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_ifStmt;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterIfStmt) {
	 		listener.enterIfStmt(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitIfStmt) {
	 		listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileStmtContext extends ParserRuleContext {
	public _cond!: ExpressionContext;
	public _body!: BlockContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public While(): TerminalNode {
		return this.getToken(RiddleParser.While, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_whileStmt;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterWhileStmt) {
	 		listener.enterWhileStmt(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitWhileStmt) {
	 		listener.exitWhileStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitWhileStmt) {
			return visitor.visitWhileStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForStmtContext extends ParserRuleContext {
	public _init!: ExpressionContext;
	public _cond!: ExpressionContext;
	public _change!: ExpressionContext;
	public _body!: BlockContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public For(): TerminalNode {
		return this.getToken(RiddleParser.For, 0);
	}
	public LeftBracket(): TerminalNode {
		return this.getToken(RiddleParser.LeftBracket, 0);
	}
	public Semi_list(): TerminalNode[] {
	    	return this.getTokens(RiddleParser.Semi);
	}
	public Semi(i: number): TerminalNode {
		return this.getToken(RiddleParser.Semi, i);
	}
	public RightBracket(): TerminalNode {
		return this.getToken(RiddleParser.RightBracket, 0);
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_forStmt;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterForStmt) {
	 		listener.enterForStmt(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitForStmt) {
	 		listener.exitForStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitForStmt) {
			return visitor.visitForStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public _result!: ExpressionContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Return(): TerminalNode {
		return this.getToken(RiddleParser.Return, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_returnStmt;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterReturnStmt) {
	 		listener.enterReturnStmt(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitReturnStmt) {
	 		listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ClassDeclContext extends ParserRuleContext {
	public _name!: IdContext;
	public _body!: BlockContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Class(): TerminalNode {
		return this.getToken(RiddleParser.Class, 0);
	}
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
	}
	public block(): BlockContext {
		return this.getTypedRuleContext(BlockContext, 0) as BlockContext;
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_classDecl;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterClassDecl) {
	 		listener.enterClassDecl(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitClassDecl) {
	 		listener.exitClassDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitClassDecl) {
			return visitor.visitClassDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdContext extends ParserRuleContext {
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(RiddleParser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return RiddleParser.RULE_id;
	}
	public enterRule(listener: RiddleParserListener): void {
	    if(listener.enterId) {
	 		listener.enterId(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitId) {
	 		listener.exitId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitId) {
			return visitor.visitId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
