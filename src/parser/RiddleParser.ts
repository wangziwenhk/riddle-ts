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
	public static readonly RULE_varDecl = 4;
	public static readonly RULE_block = 5;
	public static readonly RULE_initList = 6;
	public static readonly RULE_declArgs = 7;
	public static readonly RULE_funcDecl = 8;
	public static readonly RULE_returnStmt = 9;
	public static readonly RULE_classDecl = 10;
	public static readonly RULE_id = 11;
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
		"program", "expressionEnd", "expression", "statement", "varDecl", "block", 
		"initList", "declArgs", "funcDecl", "returnStmt", "classDecl", "id",
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
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536929794) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682313) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 75) !== 0)) {
				{
				{
				this.state = 24;
				this.expressionEnd();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 30;
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
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 9:
			case 10:
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
				this.state = 32;
				this.expression(0);
				this.state = 33;
				this.match(RiddleParser.Semi);
				this.state = 35;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
				case 1:
					{
					this.state = 34;
					this.match(RiddleParser.Endl);
					}
					break;
				}
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 37;
				this.match(RiddleParser.Endl);
				}
				break;
			case 36:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 38;
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
			this.state = 53;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 47:
			case 48:
			case 52:
			case 59:
				{
				localctx = new UnaryOpContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 42;
				(localctx as UnaryOpContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if(!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & 4131) !== 0))) {
				    (localctx as UnaryOpContext)._op = this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 43;
				(localctx as UnaryOpContext)._value = this.expression(19);
				}
				break;
			case 1:
			case 9:
			case 10:
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
			case 73:
				{
				localctx = new IntegerContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 45;
				this.match(RiddleParser.Decimal);
				}
				break;
			case 76:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 46;
				this.match(RiddleParser.Float);
				}
				break;
			case 14:
			case 15:
				{
				localctx = new BooleanContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 47;
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
				this.state = 48;
				this.id();
				}
				break;
			case 29:
				{
				localctx = new BracketExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 49;
				this.match(RiddleParser.LeftBracket);
				this.state = 50;
				(localctx as BracketExprContext)._value = this.expression(0);
				this.state = 51;
				this.match(RiddleParser.RightBracket);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 110;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new ScopeOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ScopeOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 55;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 56;
						this.match(RiddleParser.Colon);
						this.state = 57;
						this.match(RiddleParser.Colon);
						this.state = 58;
						(localctx as ScopeOpContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new MemberAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberAccessContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 59;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 60;
						this.match(RiddleParser.Dot);
						this.state = 61;
						(localctx as MemberAccessContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new MulOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MulOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 62;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 63;
						(localctx as MulOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & 7) !== 0))) {
						    (localctx as MulOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 64;
						(localctx as MulOpContext)._right = this.expression(19);
						}
						break;
					case 4:
						{
						localctx = new AddOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 65;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 66;
						(localctx as AddOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===47 || _la===48)) {
						    (localctx as AddOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 67;
						(localctx as AddOpContext)._right = this.expression(18);
						}
						break;
					case 5:
						{
						localctx = new ShiftOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ShiftOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 68;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 69;
						(localctx as ShiftOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===45 || _la===46)) {
						    (localctx as ShiftOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 70;
						(localctx as ShiftOpContext)._right = this.expression(17);
						}
						break;
					case 6:
						{
						localctx = new RelOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as RelOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 71;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 72;
						(localctx as RelOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 41)) & ~0x1F) === 0 && ((1 << (_la - 41)) & 15) !== 0))) {
						    (localctx as RelOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 73;
						(localctx as RelOpContext)._right = this.expression(16);
						}
						break;
					case 7:
						{
						localctx = new EqOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 74;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 75;
						(localctx as EqOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(_la===38 || _la===39)) {
						    (localctx as EqOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 76;
						(localctx as EqOpContext)._right = this.expression(15);
						}
						break;
					case 8:
						{
						localctx = new BitAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 78;
						this.match(RiddleParser.And);
						this.state = 79;
						(localctx as BitAndContext)._right = this.expression(14);
						}
						break;
					case 9:
						{
						localctx = new BitXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 80;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 81;
						this.match(RiddleParser.Xor);
						this.state = 82;
						(localctx as BitXorContext)._right = this.expression(13);
						}
						break;
					case 10:
						{
						localctx = new BitOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 84;
						this.match(RiddleParser.Or);
						this.state = 85;
						(localctx as BitOrContext)._right = this.expression(12);
						}
						break;
					case 11:
						{
						localctx = new LogicAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicAndContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 86;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 87;
						this.match(RiddleParser.And);
						this.state = 88;
						this.match(RiddleParser.And);
						this.state = 89;
						(localctx as LogicAndContext)._right = this.expression(11);
						}
						break;
					case 12:
						{
						localctx = new LogicOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as LogicOrContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 90;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 91;
						this.match(RiddleParser.Or);
						this.state = 92;
						this.match(RiddleParser.Or);
						this.state = 93;
						(localctx as LogicOrContext)._right = this.expression(10);
						}
						break;
					case 13:
						{
						localctx = new CompoundAssignOpContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompoundAssignOpContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 94;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 95;
						(localctx as CompoundAssignOpContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if(!(((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & 1072693249) !== 0))) {
						    (localctx as CompoundAssignOpContext)._op = this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 96;
						(localctx as CompoundAssignOpContext)._right = this.expression(9);
						}
						break;
					case 14:
						{
						localctx = new CallExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CallExprContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 97;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 98;
						this.match(RiddleParser.LeftBracket);
						this.state = 107;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536929794) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682305) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 37) !== 0)) {
							{
							this.state = 99;
							this.expression(0);
							this.state = 104;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===37) {
								{
								{
								this.state = 100;
								this.match(RiddleParser.Comma);
								this.state = 101;
								this.expression(0);
								}
								}
								this.state = 106;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 109;
						this.match(RiddleParser.RightBracket);
						}
						break;
					}
					}
				}
				this.state = 114;
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
			this.state = 121;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 115;
				this.varDecl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 116;
				this.funcDecl();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 117;
				this.classDecl();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 118;
				this.initList();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 119;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 120;
				this.returnStmt();
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
	public varDecl(): VarDeclContext {
		let localctx: VarDeclContext = new VarDeclContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, RiddleParser.RULE_varDecl);
		try {
			this.state = 140;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 123;
				this.match(RiddleParser.Var);
				this.state = 124;
				localctx._name = this.id();
				this.state = 125;
				this.match(RiddleParser.Colon);
				this.state = 126;
				localctx._type_ = this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 128;
				this.match(RiddleParser.Var);
				this.state = 129;
				localctx._name = this.id();
				this.state = 130;
				this.match(RiddleParser.Assign);
				this.state = 131;
				localctx._value = this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 133;
				this.match(RiddleParser.Var);
				this.state = 134;
				localctx._name = this.id();
				this.state = 135;
				this.match(RiddleParser.Colon);
				this.state = 136;
				localctx._type_ = this.expression(0);
				this.state = 137;
				this.match(RiddleParser.Assign);
				this.state = 138;
				localctx._value = this.expression(0);
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
		this.enterRule(localctx, 10, RiddleParser.RULE_block);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
			this.match(RiddleParser.LeftCurly);
			this.state = 146;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536929794) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682313) !== 0) || ((((_la - 70)) & ~0x1F) === 0 && ((1 << (_la - 70)) & 75) !== 0)) {
				{
				{
				this.state = 143;
				this.expressionEnd();
				}
				}
				this.state = 148;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 149;
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
		this.enterRule(localctx, 12, RiddleParser.RULE_initList);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 151;
			this.match(RiddleParser.LeftCurly);
			this.state = 160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 536929794) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 67682305) !== 0) || ((((_la - 71)) & ~0x1F) === 0 && ((1 << (_la - 71)) & 37) !== 0)) {
				{
				this.state = 152;
				this.expression(0);
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===37) {
					{
					{
					this.state = 153;
					this.match(RiddleParser.Comma);
					this.state = 154;
					this.expression(0);
					}
					}
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 162;
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
		this.enterRule(localctx, 14, RiddleParser.RULE_declArgs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 164;
					this.id();
					this.state = 165;
					this.match(RiddleParser.Colon);
					this.state = 166;
					this.expression(0);
					this.state = 167;
					this.match(RiddleParser.Comma);
					}
					}
				}
				this.state = 173;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 178;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===71) {
				{
				this.state = 174;
				this.id();
				this.state = 175;
				this.match(RiddleParser.Colon);
				this.state = 176;
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
		this.enterRule(localctx, 16, RiddleParser.RULE_funcDecl);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this.match(RiddleParser.Func);
			this.state = 181;
			localctx._name = this.id();
			this.state = 182;
			this.match(RiddleParser.LeftBracket);
			this.state = 183;
			this.declArgs();
			this.state = 184;
			this.match(RiddleParser.RightBracket);
			this.state = 188;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 185;
				this.match(RiddleParser.Sub);
				this.state = 186;
				this.match(RiddleParser.Greater);
				this.state = 187;
				localctx._return_type = this.expression(0);
				}
			}

			this.state = 190;
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
		this.enterRule(localctx, 18, RiddleParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this.match(RiddleParser.Return);
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 193;
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
		this.enterRule(localctx, 20, RiddleParser.RULE_classDecl);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 196;
			this.match(RiddleParser.Class);
			this.state = 197;
			localctx._name = this.id();
			this.state = 198;
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
		this.enterRule(localctx, 22, RiddleParser.RULE_id);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 200;
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
			return this.precpred(this._ctx, 18);
		case 3:
			return this.precpred(this._ctx, 17);
		case 4:
			return this.precpred(this._ctx, 16);
		case 5:
			return this.precpred(this._ctx, 15);
		case 6:
			return this.precpred(this._ctx, 14);
		case 7:
			return this.precpred(this._ctx, 13);
		case 8:
			return this.precpred(this._ctx, 12);
		case 9:
			return this.precpred(this._ctx, 11);
		case 10:
			return this.precpred(this._ctx, 10);
		case 11:
			return this.precpred(this._ctx, 9);
		case 12:
			return this.precpred(this._ctx, 8);
		case 13:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,86,203,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,5,0,26,8,0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,3,
	1,36,8,1,1,1,1,1,3,1,40,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,3,2,54,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,103,8,2,
	10,2,12,2,106,9,2,3,2,108,8,2,1,2,5,2,111,8,2,10,2,12,2,114,9,2,1,3,1,3,
	1,3,1,3,1,3,1,3,3,3,122,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,3,4,141,8,4,1,5,1,5,5,5,145,8,5,10,5,12,5,148,9,
	5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,156,8,6,10,6,12,6,159,9,6,3,6,161,8,6,1,6,
	1,6,1,7,1,7,1,7,1,7,1,7,5,7,170,8,7,10,7,12,7,173,9,7,1,7,1,7,1,7,1,7,3,
	7,179,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,189,8,8,1,8,1,8,1,9,1,9,3,
	9,195,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,0,1,4,12,0,2,4,6,8,10,12,14,
	16,18,20,22,0,8,3,0,47,48,52,52,59,59,1,0,14,15,1,0,49,51,1,0,47,48,1,0,
	45,46,1,0,41,44,1,0,38,39,2,0,40,40,60,69,230,0,27,1,0,0,0,2,39,1,0,0,0,
	4,53,1,0,0,0,6,121,1,0,0,0,8,140,1,0,0,0,10,142,1,0,0,0,12,151,1,0,0,0,
	14,171,1,0,0,0,16,180,1,0,0,0,18,192,1,0,0,0,20,196,1,0,0,0,22,200,1,0,
	0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,27,28,1,0,0,
	0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,33,3,4,2,0,
	33,35,5,36,0,0,34,36,5,70,0,0,35,34,1,0,0,0,35,36,1,0,0,0,36,40,1,0,0,0,
	37,40,5,70,0,0,38,40,5,36,0,0,39,32,1,0,0,0,39,37,1,0,0,0,39,38,1,0,0,0,
	40,3,1,0,0,0,41,42,6,2,-1,0,42,43,7,0,0,0,43,54,3,4,2,19,44,54,3,6,3,0,
	45,54,5,73,0,0,46,54,5,76,0,0,47,54,7,1,0,0,48,54,3,22,11,0,49,50,5,29,
	0,0,50,51,3,4,2,0,51,52,5,30,0,0,52,54,1,0,0,0,53,41,1,0,0,0,53,44,1,0,
	0,0,53,45,1,0,0,0,53,46,1,0,0,0,53,47,1,0,0,0,53,48,1,0,0,0,53,49,1,0,0,
	0,54,112,1,0,0,0,55,56,10,21,0,0,56,57,5,35,0,0,57,58,5,35,0,0,58,111,3,
	4,2,22,59,60,10,20,0,0,60,61,5,56,0,0,61,111,3,4,2,21,62,63,10,18,0,0,63,
	64,7,2,0,0,64,111,3,4,2,19,65,66,10,17,0,0,66,67,7,3,0,0,67,111,3,4,2,18,
	68,69,10,16,0,0,69,70,7,4,0,0,70,111,3,4,2,17,71,72,10,15,0,0,72,73,7,5,
	0,0,73,111,3,4,2,16,74,75,10,14,0,0,75,76,7,6,0,0,76,111,3,4,2,15,77,78,
	10,13,0,0,78,79,5,53,0,0,79,111,3,4,2,14,80,81,10,12,0,0,81,82,5,55,0,0,
	82,111,3,4,2,13,83,84,10,11,0,0,84,85,5,54,0,0,85,111,3,4,2,12,86,87,10,
	10,0,0,87,88,5,53,0,0,88,89,5,53,0,0,89,111,3,4,2,11,90,91,10,9,0,0,91,
	92,5,54,0,0,92,93,5,54,0,0,93,111,3,4,2,10,94,95,10,8,0,0,95,96,7,7,0,0,
	96,111,3,4,2,9,97,98,10,3,0,0,98,107,5,29,0,0,99,104,3,4,2,0,100,101,5,
	37,0,0,101,103,3,4,2,0,102,100,1,0,0,0,103,106,1,0,0,0,104,102,1,0,0,0,
	104,105,1,0,0,0,105,108,1,0,0,0,106,104,1,0,0,0,107,99,1,0,0,0,107,108,
	1,0,0,0,108,109,1,0,0,0,109,111,5,30,0,0,110,55,1,0,0,0,110,59,1,0,0,0,
	110,62,1,0,0,0,110,65,1,0,0,0,110,68,1,0,0,0,110,71,1,0,0,0,110,74,1,0,
	0,0,110,77,1,0,0,0,110,80,1,0,0,0,110,83,1,0,0,0,110,86,1,0,0,0,110,90,
	1,0,0,0,110,94,1,0,0,0,110,97,1,0,0,0,111,114,1,0,0,0,112,110,1,0,0,0,112,
	113,1,0,0,0,113,5,1,0,0,0,114,112,1,0,0,0,115,122,3,8,4,0,116,122,3,16,
	8,0,117,122,3,20,10,0,118,122,3,12,6,0,119,122,3,10,5,0,120,122,3,18,9,
	0,121,115,1,0,0,0,121,116,1,0,0,0,121,117,1,0,0,0,121,118,1,0,0,0,121,119,
	1,0,0,0,121,120,1,0,0,0,122,7,1,0,0,0,123,124,5,1,0,0,124,125,3,22,11,0,
	125,126,5,35,0,0,126,127,3,4,2,0,127,141,1,0,0,0,128,129,5,1,0,0,129,130,
	3,22,11,0,130,131,5,40,0,0,131,132,3,4,2,0,132,141,1,0,0,0,133,134,5,1,
	0,0,134,135,3,22,11,0,135,136,5,35,0,0,136,137,3,4,2,0,137,138,5,40,0,0,
	138,139,3,4,2,0,139,141,1,0,0,0,140,123,1,0,0,0,140,128,1,0,0,0,140,133,
	1,0,0,0,141,9,1,0,0,0,142,146,5,33,0,0,143,145,3,2,1,0,144,143,1,0,0,0,
	145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,149,1,0,0,0,148,146,
	1,0,0,0,149,150,5,34,0,0,150,11,1,0,0,0,151,160,5,33,0,0,152,157,3,4,2,
	0,153,154,5,37,0,0,154,156,3,4,2,0,155,153,1,0,0,0,156,159,1,0,0,0,157,
	155,1,0,0,0,157,158,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,0,160,152,1,0,
	0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,163,5,34,0,0,163,13,1,0,0,0,164,
	165,3,22,11,0,165,166,5,35,0,0,166,167,3,4,2,0,167,168,5,37,0,0,168,170,
	1,0,0,0,169,164,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,
	172,178,1,0,0,0,173,171,1,0,0,0,174,175,3,22,11,0,175,176,5,35,0,0,176,
	177,3,4,2,0,177,179,1,0,0,0,178,174,1,0,0,0,178,179,1,0,0,0,179,15,1,0,
	0,0,180,181,5,9,0,0,181,182,3,22,11,0,182,183,5,29,0,0,183,184,3,14,7,0,
	184,188,5,30,0,0,185,186,5,48,0,0,186,187,5,41,0,0,187,189,3,4,2,0,188,
	185,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,191,3,10,5,0,191,17,1,0,
	0,0,192,194,5,10,0,0,193,195,3,4,2,0,194,193,1,0,0,0,194,195,1,0,0,0,195,
	19,1,0,0,0,196,197,5,13,0,0,197,198,3,22,11,0,198,199,3,10,5,0,199,21,1,
	0,0,0,200,201,5,71,0,0,201,23,1,0,0,0,17,27,35,39,53,104,107,110,112,121,
	140,146,157,160,171,178,188,194];

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
	public id(): IdContext {
		return this.getTypedRuleContext(IdContext, 0) as IdContext;
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
