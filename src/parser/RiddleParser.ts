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
	public static readonly Template = 27;
	public static readonly TypeName = 28;
	public static readonly LeftBracket = 29;
	public static readonly RightBracket = 30;
	public static readonly LeftSquare = 31;
	public static readonly RightSquare = 32;
	public static readonly LeftCurly = 33;
	public static readonly RightCurly = 34;
	public static readonly Colon = 35;
	public static readonly Semi = 36;
	public static readonly Comma = 37;
	public static readonly Equal = 38;
	public static readonly NotEqual = 39;
	public static readonly Assign = 40;
	public static readonly Greater = 41;
	public static readonly GreaterEqual = 42;
	public static readonly Less = 43;
	public static readonly LessEqual = 44;
	public static readonly LeftShift = 45;
	public static readonly RightShift = 46;
	public static readonly Add = 47;
	public static readonly Sub = 48;
	public static readonly Star = 49;
	public static readonly Div = 50;
	public static readonly Mod = 51;
	public static readonly Not = 52;
	public static readonly And = 53;
	public static readonly Or = 54;
	public static readonly Xor = 55;
	public static readonly Dot = 56;
	public static readonly DoubleQuotes = 57;
	public static readonly Quotes = 58;
	public static readonly Tilde = 59;
	public static readonly AddAssign = 60;
	public static readonly SubAssign = 61;
	public static readonly MulAssign = 62;
	public static readonly DivAssign = 63;
	public static readonly ModAssign = 64;
	public static readonly LeftShiftAssign = 65;
	public static readonly RightShiftAssign = 66;
	public static readonly AndAssign = 67;
	public static readonly OrAssign = 68;
	public static readonly XorAssign = 69;
	public static readonly Endl = 70;
	public static readonly Identifier = 71;
	public static readonly Hexadecimal = 72;
	public static readonly Decimal = 73;
	public static readonly Octal = 74;
	public static readonly Binary = 75;
	public static readonly Float = 76;
	public static readonly IntegerSequence = 77;
	public static readonly HEX_DIGIT = 78;
	public static readonly OCTAL_DIGIT = 79;
	public static readonly BINARY_DIGIT = 80;
	public static readonly DIGIT = 81;
	public static readonly STRING = 82;
	public static readonly CHAR = 83;
	public static readonly LINE_COMMENT = 84;
	public static readonly BLOCK_COMMENT = 85;
	public static readonly WHITESPACE = 86;
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
	public static readonly RULE_funcDecl = 9;
	public static readonly RULE_returnStmt = 10;
	public static readonly RULE_classDecl = 11;
	public static readonly RULE_id = 12;
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
                                                            "'template'", 
                                                            "'typename'", 
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
                                                             "Template", 
                                                             "TypeName", 
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
		"block", "initList", "declArgs", "funcDecl", "returnStmt", "classDecl", 
		"id",
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
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536933890) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682313) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 75) !== 0)) {
				{
				{
				this.state = 26;
				this.expressionEnd();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
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
			this.state = 41;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 9:
			case 10:
			case 12:
			case 13:
			case 14:
			case 15:
			case 29:
			case 33:
			case 47:
			case 48:
			case 52:
			case 59:
			case 71:
			case 73:
			case 76:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 34;
				this.expression(0);
				this.state = 35;
				this.match(RiddleParser.Semi);
				this.state = 37;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 36;
					this.match(RiddleParser.Endl);
					}
					break;
				}
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 39;
				this.match(RiddleParser.Endl);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 40;
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
			this.state = 55;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 9:
			case 10:
			case 12:
			case 13:
			case 33:
				{
				localctx = new StatementExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 44;
				this.statement();
				}
				break;
			case 47:
			case 48:
			case 52:
			case 59:
				{
				localctx = new UnaryOpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 45;
				(localctx as UnaryOpContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4131) !== 0))) {
				    (localctx as UnaryOpContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 46;
				(localctx as UnaryOpContext)._value = this.expression(17);
				}
				break;
			case 73:
				{
				localctx = new IntegerContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 47;
				this.match(RiddleParser.Decimal);
				}
				break;
			case 76:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 48;
				this.match(RiddleParser.Float);
				}
				break;
			case 14:
			case 15:
				{
				localctx = new BooleanContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 49;
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
			case 71:
				{
				localctx = new ObjectContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 50;
				this.id();
				}
				break;
			case 29:
				{
				localctx = new BracketExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 51;
				this.match(RiddleParser.LeftBracket);
				this.state = 52;
				(localctx as BracketExprContext)._value = this.expression(0);
				this.state = 53;
				this.match(RiddleParser.RightBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 114;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ScopeOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ScopeOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 57;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 58;
						this.match(RiddleParser.Colon);
						this.state = 59;
						this.match(RiddleParser.Colon);
						this.state = 60;
						(localctx as ScopeOpContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new MemberAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberAccessContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 61;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 62;
						this.match(RiddleParser.Dot);
						this.state = 63;
						(localctx as MemberAccessContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new MulOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MulOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 64;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 65;
						(localctx as MulOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
						    (localctx as MulOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 66;
						(localctx as MulOpContext)._right = this.expression(17);
						}
						break;
					case 4:
						{
						localctx = new AddOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 67;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 68;
						(localctx as AddOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===47 || _la===48)) {
						    (localctx as AddOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 69;
						(localctx as AddOpContext)._right = this.expression(16);
						}
						break;
					case 5:
						{
						localctx = new ShiftOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ShiftOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 70;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 71;
						(localctx as ShiftOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===45 || _la===46)) {
						    (localctx as ShiftOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 72;
						(localctx as ShiftOpContext)._right = this.expression(15);
						}
						break;
					case 6:
						{
						localctx = new RelOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as RelOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 73;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 74;
						(localctx as RelOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 15) !== 0))) {
						    (localctx as RelOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 75;
						(localctx as RelOpContext)._right = this.expression(14);
						}
						break;
					case 7:
						{
						localctx = new EqOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 76;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 77;
						(localctx as EqOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===38 || _la===39)) {
						    (localctx as EqOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 78;
						(localctx as EqOpContext)._right = this.expression(13);
						}
						break;
					case 8:
						{
						localctx = new BitAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 79;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 80;
						this.match(RiddleParser.And);
						this.state = 81;
						(localctx as BitAndContext)._right = this.expression(12);
						}
						break;
					case 9:
						{
						localctx = new BitXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 82;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 83;
						this.match(RiddleParser.Xor);
						this.state = 84;
						(localctx as BitXorContext)._right = this.expression(11);
						}
						break;
					case 10:
						{
						localctx = new BitOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 85;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 86;
						this.match(RiddleParser.Or);
						this.state = 87;
						(localctx as BitOrContext)._right = this.expression(10);
						}
						break;
					case 11:
						{
						localctx = new LogicAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 88;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 89;
						this.match(RiddleParser.And);
						this.state = 90;
						this.match(RiddleParser.And);
						this.state = 91;
						(localctx as LogicAndContext)._right = this.expression(9);
						}
						break;
					case 12:
						{
						localctx = new LogicOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 92;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 93;
						this.match(RiddleParser.Or);
						this.state = 94;
						this.match(RiddleParser.Or);
						this.state = 95;
						(localctx as LogicOrContext)._right = this.expression(8);
						}
						break;
					case 13:
						{
						localctx = new CompoundAssignOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompoundAssignOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 96;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 97;
						(localctx as CompoundAssignOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1072693249) !== 0))) {
						    (localctx as CompoundAssignOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 98;
						(localctx as CompoundAssignOpContext)._right = this.expression(7);
						}
						break;
					case 14:
						{
						localctx = new CallExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CallExprContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 99;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 100;
						this.match(RiddleParser.LeftBracket);
						this.state = 109;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536933890) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682305) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 37) !== 0)) {
							{
							this.state = 101;
							this.expression(0);
							this.state = 106;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===37) {
								{
								{
								this.state = 102;
								this.match(RiddleParser.Comma);
								this.state = 103;
								this.expression(0);
								}
								}
								this.state = 108;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 111;
						this.match(RiddleParser.RightBracket);
						}
						break;
					case 15:
						{
						localctx = new PointerToContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as PointerToContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 112;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 113;
						this.match(RiddleParser.Star);
						}
						break;
					}
					}
				}
				this.state = 118;
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
			this.state = 126;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 119;
				this.varDecl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 120;
				this.funcDecl();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 121;
				this.classDecl();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 122;
				this.initList();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 123;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 124;
				this.returnStmt();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 125;
				this.packStmt();
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
			this.state = 128;
			this.match(RiddleParser.Package);
			this.state = 129;
			this.id();
			this.state = 134;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 130;
					this.match(RiddleParser.Dot);
					this.state = 131;
					this.id();
					}
					}
				}
				this.state = 136;
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
		try {
			this.state = 154;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 137;
				this.match(RiddleParser.Var);
				this.state = 138;
				localctx._name = this.id();
				this.state = 139;
				this.match(RiddleParser.Colon);
				this.state = 140;
				localctx._type_ = this.expression(0);
				this.state = 141;
				this.match(RiddleParser.Assign);
				this.state = 142;
				localctx._value = this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 144;
				this.match(RiddleParser.Var);
				this.state = 145;
				localctx._name = this.id();
				this.state = 146;
				this.match(RiddleParser.Assign);
				this.state = 147;
				localctx._value = this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 149;
				this.match(RiddleParser.Var);
				this.state = 150;
				localctx._name = this.id();
				this.state = 151;
				this.match(RiddleParser.Colon);
				this.state = 152;
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
			this.state = 156;
			this.match(RiddleParser.LeftCurly);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536933890) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682313) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 75) !== 0)) {
				{
				{
				this.state = 157;
				this.expressionEnd();
				}
				}
				this.state = 162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 163;
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
			this.state = 165;
			this.match(RiddleParser.LeftCurly);
			this.state = 174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536933890) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682305) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 37) !== 0)) {
				{
				this.state = 166;
				this.expression(0);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===37) {
					{
					{
					this.state = 167;
					this.match(RiddleParser.Comma);
					this.state = 168;
					this.expression(0);
					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 176;
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
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 185;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 178;
					this.id();
					this.state = 179;
					this.match(RiddleParser.Colon);
					this.state = 180;
					this.expression(0);
					this.state = 181;
					this.match(RiddleParser.Comma);
					}
					}
				}
				this.state = 187;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 14, this._ctx);
			}
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 188;
				this.id();
				this.state = 189;
				this.match(RiddleParser.Colon);
				this.state = 190;
				this.expression(0);
				}
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
		this.enterRule(localctx, 18, RiddleParser.RULE_funcDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 194;
			this.match(RiddleParser.Func);
			this.state = 195;
			localctx._name = this.id();
			this.state = 196;
			this.match(RiddleParser.LeftBracket);
			this.state = 197;
			this.declArgs();
			this.state = 198;
			this.match(RiddleParser.RightBracket);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 199;
				this.match(RiddleParser.Sub);
				this.state = 200;
				this.match(RiddleParser.Greater);
				this.state = 201;
				localctx._return_type = this.expression(0);
				}
			}

			this.state = 204;
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
		this.enterRule(localctx, 20, RiddleParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 206;
			this.match(RiddleParser.Return);
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 207;
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
		this.enterRule(localctx, 22, RiddleParser.RULE_classDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 210;
			this.match(RiddleParser.Class);
			this.state = 211;
			localctx._name = this.id();
			this.state = 212;
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
		this.enterRule(localctx, 24, RiddleParser.RULE_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 214;
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
			return this.precpred(this._ctx, 21);
		case 1:
			return this.precpred(this._ctx, 20);
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
			return this.precpred(this._ctx, 19);
		case 14:
			return this.precpred(this._ctx, 18);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,86,217,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,1,0,5,0,28,8,0,10,0,12,0,31,9,0,1,0,1,0,1,1,
	1,1,1,1,3,1,38,8,1,1,1,1,1,3,1,42,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,3,2,56,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
	2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,
	2,105,8,2,10,2,12,2,108,9,2,3,2,110,8,2,1,2,1,2,1,2,5,2,115,8,2,10,2,12,
	2,118,9,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,127,8,3,1,4,1,4,1,4,1,4,5,4,133,
	8,4,10,4,12,4,136,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
	5,1,5,1,5,1,5,1,5,3,5,155,8,5,1,6,1,6,5,6,159,8,6,10,6,12,6,162,9,6,1,6,
	1,6,1,7,1,7,1,7,1,7,5,7,170,8,7,10,7,12,7,173,9,7,3,7,175,8,7,1,7,1,7,1,
	8,1,8,1,8,1,8,1,8,5,8,184,8,8,10,8,12,8,187,9,8,1,8,1,8,1,8,1,8,3,8,193,
	8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,203,8,9,1,9,1,9,1,10,1,10,3,10,
	209,8,10,1,11,1,11,1,11,1,11,1,12,1,12,1,12,0,1,4,13,0,2,4,6,8,10,12,14,
	16,18,20,22,24,0,8,3,0,47,48,52,52,59,59,1,0,14,15,1,0,49,51,1,0,47,48,
	1,0,45,46,1,0,41,44,1,0,38,39,2,0,40,40,60,69,246,0,29,1,0,0,0,2,41,1,0,
	0,0,4,55,1,0,0,0,6,126,1,0,0,0,8,128,1,0,0,0,10,154,1,0,0,0,12,156,1,0,
	0,0,14,165,1,0,0,0,16,185,1,0,0,0,18,194,1,0,0,0,20,206,1,0,0,0,22,210,
	1,0,0,0,24,214,1,0,0,0,26,28,3,2,1,0,27,26,1,0,0,0,28,31,1,0,0,0,29,27,
	1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,29,1,0,0,0,32,33,5,0,0,1,33,1,1,
	0,0,0,34,35,3,4,2,0,35,37,5,36,0,0,36,38,5,70,0,0,37,36,1,0,0,0,37,38,1,
	0,0,0,38,42,1,0,0,0,39,42,5,70,0,0,40,42,5,36,0,0,41,34,1,0,0,0,41,39,1,
	0,0,0,41,40,1,0,0,0,42,3,1,0,0,0,43,44,6,2,-1,0,44,56,3,6,3,0,45,46,7,0,
	0,0,46,56,3,4,2,17,47,56,5,73,0,0,48,56,5,76,0,0,49,56,7,1,0,0,50,56,3,
	24,12,0,51,52,5,29,0,0,52,53,3,4,2,0,53,54,5,30,0,0,54,56,1,0,0,0,55,43,
	1,0,0,0,55,45,1,0,0,0,55,47,1,0,0,0,55,48,1,0,0,0,55,49,1,0,0,0,55,50,1,
	0,0,0,55,51,1,0,0,0,56,116,1,0,0,0,57,58,10,21,0,0,58,59,5,35,0,0,59,60,
	5,35,0,0,60,115,3,4,2,22,61,62,10,20,0,0,62,63,5,56,0,0,63,115,3,4,2,21,
	64,65,10,16,0,0,65,66,7,2,0,0,66,115,3,4,2,17,67,68,10,15,0,0,68,69,7,3,
	0,0,69,115,3,4,2,16,70,71,10,14,0,0,71,72,7,4,0,0,72,115,3,4,2,15,73,74,
	10,13,0,0,74,75,7,5,0,0,75,115,3,4,2,14,76,77,10,12,0,0,77,78,7,6,0,0,78,
	115,3,4,2,13,79,80,10,11,0,0,80,81,5,53,0,0,81,115,3,4,2,12,82,83,10,10,
	0,0,83,84,5,55,0,0,84,115,3,4,2,11,85,86,10,9,0,0,86,87,5,54,0,0,87,115,
	3,4,2,10,88,89,10,8,0,0,89,90,5,53,0,0,90,91,5,53,0,0,91,115,3,4,2,9,92,
	93,10,7,0,0,93,94,5,54,0,0,94,95,5,54,0,0,95,115,3,4,2,8,96,97,10,6,0,0,
	97,98,7,7,0,0,98,115,3,4,2,7,99,100,10,19,0,0,100,109,5,29,0,0,101,106,
	3,4,2,0,102,103,5,37,0,0,103,105,3,4,2,0,104,102,1,0,0,0,105,108,1,0,0,
	0,106,104,1,0,0,0,106,107,1,0,0,0,107,110,1,0,0,0,108,106,1,0,0,0,109,101,
	1,0,0,0,109,110,1,0,0,0,110,111,1,0,0,0,111,115,5,30,0,0,112,113,10,18,
	0,0,113,115,5,49,0,0,114,57,1,0,0,0,114,61,1,0,0,0,114,64,1,0,0,0,114,67,
	1,0,0,0,114,70,1,0,0,0,114,73,1,0,0,0,114,76,1,0,0,0,114,79,1,0,0,0,114,
	82,1,0,0,0,114,85,1,0,0,0,114,88,1,0,0,0,114,92,1,0,0,0,114,96,1,0,0,0,
	114,99,1,0,0,0,114,112,1,0,0,0,115,118,1,0,0,0,116,114,1,0,0,0,116,117,
	1,0,0,0,117,5,1,0,0,0,118,116,1,0,0,0,119,127,3,10,5,0,120,127,3,18,9,0,
	121,127,3,22,11,0,122,127,3,14,7,0,123,127,3,12,6,0,124,127,3,20,10,0,125,
	127,3,8,4,0,126,119,1,0,0,0,126,120,1,0,0,0,126,121,1,0,0,0,126,122,1,0,
	0,0,126,123,1,0,0,0,126,124,1,0,0,0,126,125,1,0,0,0,127,7,1,0,0,0,128,129,
	5,12,0,0,129,134,3,24,12,0,130,131,5,56,0,0,131,133,3,24,12,0,132,130,1,
	0,0,0,133,136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,9,1,0,0,0,136,
	134,1,0,0,0,137,138,5,1,0,0,138,139,3,24,12,0,139,140,5,35,0,0,140,141,
	3,4,2,0,141,142,5,40,0,0,142,143,3,4,2,0,143,155,1,0,0,0,144,145,5,1,0,
	0,145,146,3,24,12,0,146,147,5,40,0,0,147,148,3,4,2,0,148,155,1,0,0,0,149,
	150,5,1,0,0,150,151,3,24,12,0,151,152,5,35,0,0,152,153,3,4,2,0,153,155,
	1,0,0,0,154,137,1,0,0,0,154,144,1,0,0,0,154,149,1,0,0,0,155,11,1,0,0,0,
	156,160,5,33,0,0,157,159,3,2,1,0,158,157,1,0,0,0,159,162,1,0,0,0,160,158,
	1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,160,1,0,0,0,163,164,5,34,0,
	0,164,13,1,0,0,0,165,174,5,33,0,0,166,171,3,4,2,0,167,168,5,37,0,0,168,
	170,3,4,2,0,169,167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,
	0,0,172,175,1,0,0,0,173,171,1,0,0,0,174,166,1,0,0,0,174,175,1,0,0,0,175,
	176,1,0,0,0,176,177,5,34,0,0,177,15,1,0,0,0,178,179,3,24,12,0,179,180,5,
	35,0,0,180,181,3,4,2,0,181,182,5,37,0,0,182,184,1,0,0,0,183,178,1,0,0,0,
	184,187,1,0,0,0,185,183,1,0,0,0,185,186,1,0,0,0,186,192,1,0,0,0,187,185,
	1,0,0,0,188,189,3,24,12,0,189,190,5,35,0,0,190,191,3,4,2,0,191,193,1,0,
	0,0,192,188,1,0,0,0,192,193,1,0,0,0,193,17,1,0,0,0,194,195,5,9,0,0,195,
	196,3,24,12,0,196,197,5,29,0,0,197,198,3,16,8,0,198,202,5,30,0,0,199,200,
	5,48,0,0,200,201,5,41,0,0,201,203,3,4,2,0,202,199,1,0,0,0,202,203,1,0,0,
	0,203,204,1,0,0,0,204,205,3,12,6,0,205,19,1,0,0,0,206,208,5,10,0,0,207,
	209,3,4,2,0,208,207,1,0,0,0,208,209,1,0,0,0,209,21,1,0,0,0,210,211,5,13,
	0,0,211,212,3,24,12,0,212,213,3,12,6,0,213,23,1,0,0,0,214,215,5,71,0,0,
	215,25,1,0,0,0,18,29,37,41,55,106,109,114,116,126,134,154,160,171,174,185,
	192,202,208];

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
export class ScopeOpContext extends ExpressionContext {
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
	    if(listener.enterScopeOp) {
	 		listener.enterScopeOp(this);
		}
	}
	public exitRule(listener: RiddleParserListener): void {
	    if(listener.exitScopeOp) {
	 		listener.exitScopeOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RiddleParserVisitor<Result>): Result {
		if (visitor.visitScopeOp) {
			return visitor.visitScopeOp(this);
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
	public _name!: IdContext;
	public _type_!: ExpressionContext;
	public _value!: ExpressionContext;
	constructor(parser?: RiddleParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Var(): TerminalNode {
		return this.getToken(RiddleParser.Var, 0);
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
