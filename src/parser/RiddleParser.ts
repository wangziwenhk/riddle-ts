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
	public static readonly Assign = 39;
	public static readonly Greater = 40;
	public static readonly Less = 41;
	public static readonly LeftLeft = 42;
	public static readonly RightRight = 43;
	public static readonly Add = 44;
	public static readonly Sub = 45;
	public static readonly Star = 46;
	public static readonly Div = 47;
	public static readonly Mod = 48;
	public static readonly Not = 49;
	public static readonly And = 50;
	public static readonly Or = 51;
	public static readonly Xor = 52;
	public static readonly Dot = 53;
	public static readonly DoubleQuotes = 54;
	public static readonly Quotes = 55;
	public static readonly Endl = 56;
	public static readonly Identifier = 57;
	public static readonly Hexadecimal = 58;
	public static readonly Decimal = 59;
	public static readonly Octal = 60;
	public static readonly Binary = 61;
	public static readonly Float = 62;
	public static readonly IntegerSequence = 63;
	public static readonly HEX_DIGIT = 64;
	public static readonly OCTAL_DIGIT = 65;
	public static readonly BINARY_DIGIT = 66;
	public static readonly DIGIT = 67;
	public static readonly STRING = 68;
	public static readonly CHAR = 69;
	public static readonly LINE_COMMENT = 70;
	public static readonly BLOCK_COMMENT = 71;
	public static readonly WHITESPACE = 72;
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
                                                            "'='", "'>'", 
                                                            "'<'", "'<<'", 
                                                            "'>>'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'%'", 
                                                            "'!'", "'&'", 
                                                            "'|'", "'^'", 
                                                            "'.'", "'\"'", 
                                                            "'''", "'\\n'" ];
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
                                                             "Assign", "Greater", 
                                                             "Less", "LeftLeft", 
                                                             "RightRight", 
                                                             "Add", "Sub", 
                                                             "Star", "Div", 
                                                             "Mod", "Not", 
                                                             "And", "Or", 
                                                             "Xor", "Dot", 
                                                             "DoubleQuotes", 
                                                             "Quotes", "Endl", 
                                                             "Identifier", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58882) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 629145609) !== 0)) {
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
			case 33:
			case 57:
			case 59:
			case 62:
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
			case 56:
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
			this.state = 47;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 9:
			case 10:
			case 13:
			case 33:
				{
				localctx = new StatementExprContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 42;
				this.statement();
				}
				break;
			case 59:
				{
				localctx = new IntegerContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 43;
				this.match(RiddleParser.Decimal);
				}
				break;
			case 62:
				{
				localctx = new FloatContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 44;
				this.match(RiddleParser.Float);
				}
				break;
			case 14:
			case 15:
				{
				localctx = new BooleanContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 45;
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
			case 57:
				{
				localctx = new ObjectContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 46;
				this.id();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 67;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 65;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						localctx = new MemberAccessContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberAccessContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 49;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 50;
						this.match(RiddleParser.Dot);
						this.state = 51;
						(localctx as MemberAccessContext)._right = this.expression(2);
						}
						break;
					case 2:
						{
						localctx = new CallExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CallExprContext)._obj = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, RiddleParser.RULE_expression);
						this.state = 52;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 53;
						this.match(RiddleParser.LeftBracket);
						this.state = 62;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58882) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 620756993) !== 0)) {
							{
							this.state = 54;
							this.expression(0);
							this.state = 59;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							while (_la===37) {
								{
								{
								this.state = 55;
								this.match(RiddleParser.Comma);
								this.state = 56;
								this.expression(0);
								}
								}
								this.state = 61;
								this._errHandler.sync(this);
								_la = this._input.LA(1);
							}
							}
						}

						this.state = 64;
						this.match(RiddleParser.RightBracket);
						}
						break;
					}
					}
				}
				this.state = 69;
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
			this.state = 76;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 70;
				this.varDecl();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 71;
				this.funcDecl();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 72;
				this.classDecl();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 73;
				this.initList();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 74;
				this.block();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 75;
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
			this.state = 95;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 78;
				this.match(RiddleParser.Var);
				this.state = 79;
				localctx._name = this.id();
				this.state = 80;
				this.match(RiddleParser.Colon);
				this.state = 81;
				localctx._type_ = this.expression(0);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 83;
				this.match(RiddleParser.Var);
				this.state = 84;
				localctx._name = this.id();
				this.state = 85;
				this.match(RiddleParser.Assign);
				this.state = 86;
				localctx._value = this.expression(0);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 88;
				this.match(RiddleParser.Var);
				this.state = 89;
				localctx._name = this.id();
				this.state = 90;
				this.match(RiddleParser.Colon);
				this.state = 91;
				localctx._type_ = this.expression(0);
				this.state = 92;
				this.match(RiddleParser.Assign);
				this.state = 93;
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
			this.state = 97;
			this.match(RiddleParser.LeftCurly);
			this.state = 101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58882) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 629145609) !== 0)) {
				{
				{
				this.state = 98;
				this.expressionEnd();
				}
				}
				this.state = 103;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 104;
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
			this.state = 106;
			this.match(RiddleParser.LeftCurly);
			this.state = 115;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 58882) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 620756993) !== 0)) {
				{
				this.state = 107;
				this.expression(0);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===37) {
					{
					{
					this.state = 108;
					this.match(RiddleParser.Comma);
					this.state = 109;
					this.expression(0);
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 117;
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
			this.state = 126;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 119;
					this.id();
					this.state = 120;
					this.match(RiddleParser.Colon);
					this.state = 121;
					this.expression(0);
					this.state = 122;
					this.match(RiddleParser.Comma);
					}
					}
				}
				this.state = 128;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 129;
				this.id();
				this.state = 130;
				this.match(RiddleParser.Colon);
				this.state = 131;
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
			this.state = 135;
			this.match(RiddleParser.Func);
			this.state = 136;
			localctx._name = this.id();
			this.state = 137;
			this.match(RiddleParser.LeftBracket);
			this.state = 138;
			this.declArgs();
			this.state = 139;
			this.match(RiddleParser.RightBracket);
			this.state = 143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 140;
				this.match(RiddleParser.Sub);
				this.state = 141;
				this.match(RiddleParser.Greater);
				this.state = 142;
				localctx._return_type = this.expression(0);
				}
			}

			this.state = 145;
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
			this.state = 147;
			this.match(RiddleParser.Return);
			this.state = 149;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 148;
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
			this.state = 151;
			this.match(RiddleParser.Class);
			this.state = 152;
			localctx._name = this.id();
			this.state = 153;
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
			this.state = 155;
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
			return this.precpred(this._ctx, 1);
		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,72,158,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,1,0,5,0,26,8,0,10,0,12,0,29,9,0,1,0,1,0,1,1,1,1,1,1,3,
	1,36,8,1,1,1,1,1,3,1,40,8,1,1,2,1,2,1,2,1,2,1,2,1,2,3,2,48,8,2,1,2,1,2,
	1,2,1,2,1,2,1,2,1,2,1,2,5,2,58,8,2,10,2,12,2,61,9,2,3,2,63,8,2,1,2,5,2,
	66,8,2,10,2,12,2,69,9,2,1,3,1,3,1,3,1,3,1,3,1,3,3,3,77,8,3,1,4,1,4,1,4,
	1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,96,8,4,1,5,
	1,5,5,5,100,8,5,10,5,12,5,103,9,5,1,5,1,5,1,6,1,6,1,6,1,6,5,6,111,8,6,10,
	6,12,6,114,9,6,3,6,116,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,5,7,125,8,7,10,7,
	12,7,128,9,7,1,7,1,7,1,7,1,7,3,7,134,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
	8,3,8,144,8,8,1,8,1,8,1,9,1,9,3,9,150,8,9,1,10,1,10,1,10,1,10,1,11,1,11,
	1,11,0,1,4,12,0,2,4,6,8,10,12,14,16,18,20,22,0,1,1,0,14,15,171,0,27,1,0,
	0,0,2,39,1,0,0,0,4,47,1,0,0,0,6,76,1,0,0,0,8,95,1,0,0,0,10,97,1,0,0,0,12,
	106,1,0,0,0,14,126,1,0,0,0,16,135,1,0,0,0,18,147,1,0,0,0,20,151,1,0,0,0,
	22,155,1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,29,1,0,0,0,27,25,1,0,0,0,
	27,28,1,0,0,0,28,30,1,0,0,0,29,27,1,0,0,0,30,31,5,0,0,1,31,1,1,0,0,0,32,
	33,3,4,2,0,33,35,5,36,0,0,34,36,5,56,0,0,35,34,1,0,0,0,35,36,1,0,0,0,36,
	40,1,0,0,0,37,40,5,56,0,0,38,40,5,36,0,0,39,32,1,0,0,0,39,37,1,0,0,0,39,
	38,1,0,0,0,40,3,1,0,0,0,41,42,6,2,-1,0,42,48,3,6,3,0,43,48,5,59,0,0,44,
	48,5,62,0,0,45,48,7,0,0,0,46,48,3,22,11,0,47,41,1,0,0,0,47,43,1,0,0,0,47,
	44,1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,67,1,0,0,0,49,50,10,1,0,0,50,
	51,5,53,0,0,51,66,3,4,2,2,52,53,10,3,0,0,53,62,5,29,0,0,54,59,3,4,2,0,55,
	56,5,37,0,0,56,58,3,4,2,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,
	60,1,0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,62,54,1,0,0,0,62,63,1,0,0,0,63,64,
	1,0,0,0,64,66,5,30,0,0,65,49,1,0,0,0,65,52,1,0,0,0,66,69,1,0,0,0,67,65,
	1,0,0,0,67,68,1,0,0,0,68,5,1,0,0,0,69,67,1,0,0,0,70,77,3,8,4,0,71,77,3,
	16,8,0,72,77,3,20,10,0,73,77,3,12,6,0,74,77,3,10,5,0,75,77,3,18,9,0,76,
	70,1,0,0,0,76,71,1,0,0,0,76,72,1,0,0,0,76,73,1,0,0,0,76,74,1,0,0,0,76,75,
	1,0,0,0,77,7,1,0,0,0,78,79,5,1,0,0,79,80,3,22,11,0,80,81,5,35,0,0,81,82,
	3,4,2,0,82,96,1,0,0,0,83,84,5,1,0,0,84,85,3,22,11,0,85,86,5,39,0,0,86,87,
	3,4,2,0,87,96,1,0,0,0,88,89,5,1,0,0,89,90,3,22,11,0,90,91,5,35,0,0,91,92,
	3,4,2,0,92,93,5,39,0,0,93,94,3,4,2,0,94,96,1,0,0,0,95,78,1,0,0,0,95,83,
	1,0,0,0,95,88,1,0,0,0,96,9,1,0,0,0,97,101,5,33,0,0,98,100,3,2,1,0,99,98,
	1,0,0,0,100,103,1,0,0,0,101,99,1,0,0,0,101,102,1,0,0,0,102,104,1,0,0,0,
	103,101,1,0,0,0,104,105,5,34,0,0,105,11,1,0,0,0,106,115,5,33,0,0,107,112,
	3,4,2,0,108,109,5,37,0,0,109,111,3,4,2,0,110,108,1,0,0,0,111,114,1,0,0,
	0,112,110,1,0,0,0,112,113,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,115,107,
	1,0,0,0,115,116,1,0,0,0,116,117,1,0,0,0,117,118,5,34,0,0,118,13,1,0,0,0,
	119,120,3,22,11,0,120,121,5,35,0,0,121,122,3,4,2,0,122,123,5,37,0,0,123,
	125,1,0,0,0,124,119,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,
	0,0,127,133,1,0,0,0,128,126,1,0,0,0,129,130,3,22,11,0,130,131,5,35,0,0,
	131,132,3,4,2,0,132,134,1,0,0,0,133,129,1,0,0,0,133,134,1,0,0,0,134,15,
	1,0,0,0,135,136,5,9,0,0,136,137,3,22,11,0,137,138,5,29,0,0,138,139,3,14,
	7,0,139,143,5,30,0,0,140,141,5,45,0,0,141,142,5,40,0,0,142,144,3,4,2,0,
	143,140,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,146,3,10,5,0,146,17,
	1,0,0,0,147,149,5,10,0,0,148,150,3,4,2,0,149,148,1,0,0,0,149,150,1,0,0,
	0,150,19,1,0,0,0,151,152,5,13,0,0,152,153,3,22,11,0,153,154,3,10,5,0,154,
	21,1,0,0,0,155,156,5,57,0,0,156,23,1,0,0,0,17,27,35,39,47,59,62,65,67,76,
	95,101,112,115,126,133,143,149];

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
