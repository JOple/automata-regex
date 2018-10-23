// Generated from grammar/Regex.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { RegexListener } from './RegexListener';
import { RegexVisitor } from './RegexVisitor';


export class RegexParser extends Parser {
	public static readonly STAR=1;
	public static readonly PLUS=2;
	public static readonly QMARK=3;
	public static readonly OR=4;
	public static readonly HYPHEN=5;
	public static readonly LPAREN=6;
	public static readonly RPAREN=7;
	public static readonly LBRACK=8;
	public static readonly RBRACK=9;
	public static readonly CARET=10;
	public static readonly CHAR=11;
	public static readonly NORMALCHAR=12;
	public static readonly ESCAPEDCHAR=13;
	public static readonly ANY=14;
	public static readonly RULE_expression = 0;
	public static readonly RULE_term = 1;
	public static readonly RULE_factor = 2;
	public static readonly RULE_atom = 3;
	public static readonly RULE_set = 4;
	public static readonly RULE_group = 5;
	public static readonly RULE_characterRange = 6;
	public static readonly RULE_qmark = 7;
	public static readonly RULE_star = 8;
	public static readonly RULE_plus = 9;
	public static readonly RULE_beginCharacter = 10;
	public static readonly RULE_endCharacter = 11;
	public static readonly ruleNames: string[] = [
		"expression", "term", "factor", "atom", "set", "group", "characterRange", 
		"qmark", "star", "plus", "beginCharacter", "endCharacter"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'*'", "'+'", "'?'", "'|'", "'-'", "'('", "')'", "'['", "']'", 
		"'^'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegexParser._LITERAL_NAMES, RegexParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return RegexParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Regex.g4"; }

	@Override
	public get ruleNames(): string[] { return RegexParser.ruleNames; }

	@Override
	public get serializedATN(): string { return RegexParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RegexParser._ATN, this);
	}
	@RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RegexParser.RULE_expression);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.term();
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===RegexParser.OR) {
				{
				{
				this.state = 25;
				this.match(RegexParser.OR);
				this.state = 26;
				this.term();
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RegexParser.RULE_term);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33; 
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.factor();
				}
				}
				this.state = 35; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RegexParser.LPAREN) | (1 << RegexParser.LBRACK) | (1 << RegexParser.CHAR))) !== 0) );
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public factor(): FactorContext {
		let _localctx: FactorContext = new FactorContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RegexParser.RULE_factor);
		try {
			this.state = 41;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.atom();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.qmark();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 39;
				this.plus();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 40;
				this.star();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public atom(): AtomContext {
		let _localctx: AtomContext = new AtomContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RegexParser.RULE_atom);
		try {
			this.state = 46;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegexParser.LBRACK:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43;
				this.set();
				}
				break;
			case RegexParser.LPAREN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 44;
				this.group();
				}
				break;
			case RegexParser.CHAR:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 45;
				this.match(RegexParser.CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RegexParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(RegexParser.LBRACK);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===RegexParser.CARET) {
				{
				this.state = 49;
				this.match(RegexParser.CARET);
				}
			}

			this.state = 52;
			this.characterRange();
			this.state = 53;
			this.match(RegexParser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RegexParser.RULE_group);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 55;
			this.match(RegexParser.LPAREN);
			this.state = 56;
			this.expression();
			this.state = 57;
			this.match(RegexParser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public characterRange(): CharacterRangeContext {
		let _localctx: CharacterRangeContext = new CharacterRangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RegexParser.RULE_characterRange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 59;
			this.beginCharacter();
			this.state = 60;
			this.match(RegexParser.HYPHEN);
			this.state = 61;
			this.endCharacter();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public qmark(): QmarkContext {
		let _localctx: QmarkContext = new QmarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RegexParser.RULE_qmark);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this.atom();
			this.state = 64;
			this.match(RegexParser.QMARK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public star(): StarContext {
		let _localctx: StarContext = new StarContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RegexParser.RULE_star);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 66;
			this.atom();
			this.state = 67;
			this.match(RegexParser.STAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public plus(): PlusContext {
		let _localctx: PlusContext = new PlusContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RegexParser.RULE_plus);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.atom();
			this.state = 70;
			this.match(RegexParser.PLUS);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public beginCharacter(): BeginCharacterContext {
		let _localctx: BeginCharacterContext = new BeginCharacterContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RegexParser.RULE_beginCharacter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(RegexParser.CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public endCharacter(): EndCharacterContext {
		let _localctx: EndCharacterContext = new EndCharacterContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RegexParser.RULE_endCharacter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 74;
			this.match(RegexParser.CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x10O\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03"+
		"\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x06"+
		"\x03$\n\x03\r\x03\x0E\x03%\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04,\n"+
		"\x04\x03\x05\x03\x05\x03\x05\x05\x051\n\x05\x03\x06\x03\x06\x05\x065\n"+
		"\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03"+
		"\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03"+
		"\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02"+
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x02J"+
		"\x02\x1A\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b0"+
		"\x03\x02\x02\x02\n2\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0E=\x03\x02\x02"+
		"\x02\x10A\x03\x02\x02\x02\x12D\x03\x02\x02\x02\x14G\x03\x02\x02\x02\x16"+
		"J\x03\x02\x02\x02\x18L\x03\x02\x02\x02\x1A\x1F\x05\x04\x03\x02\x1B\x1C"+
		"\x07\x06\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1B\x03\x02\x02\x02\x1E!"+
		"\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03"+
		"\x02\x02\x02!\x1F\x03\x02\x02\x02\"$\x05\x06\x04\x02#\"\x03\x02\x02\x02"+
		"$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x05\x03\x02\x02"+
		"\x02\',\x05\b\x05\x02(,\x05\x10\t\x02),\x05\x14\v\x02*,\x05\x12\n\x02"+
		"+\'\x03\x02\x02\x02+(\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02"+
		"\x02,\x07\x03\x02\x02\x02-1\x05\n\x06\x02.1\x05\f\x07\x02/1\x07\r\x02"+
		"\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x021\t\x03\x02"+
		"\x02\x0224\x07\n\x02\x0235\x07\f\x02\x0243\x03\x02\x02\x0245\x03\x02\x02"+
		"\x0256\x03\x02\x02\x0267\x05\x0E\b\x0278\x07\v\x02\x028\v\x03\x02\x02"+
		"\x029:\x07\b\x02\x02:;\x05\x02\x02\x02;<\x07\t\x02\x02<\r\x03\x02\x02"+
		"\x02=>\x05\x16\f\x02>?\x07\x07\x02\x02?@\x05\x18\r\x02@\x0F\x03\x02\x02"+
		"\x02AB\x05\b\x05\x02BC\x07\x05\x02\x02C\x11\x03\x02\x02\x02DE\x05\b\x05"+
		"\x02EF\x07\x03\x02\x02F\x13\x03\x02\x02\x02GH\x05\b\x05\x02HI\x07\x04"+
		"\x02\x02I\x15\x03\x02\x02\x02JK\x07\r\x02\x02K\x17\x03\x02\x02\x02LM\x07"+
		"\r\x02\x02M\x19\x03\x02\x02\x02\x07\x1F%+04";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegexParser.__ATN) {
			RegexParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegexParser._serializedATN));
		}

		return RegexParser.__ATN;
	}

}

export class ExpressionContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public OR(): TerminalNode[];
	public OR(i: number): TerminalNode;
	public OR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegexParser.OR);
		} else {
			return this.getToken(RegexParser.OR, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_expression; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TermContext extends ParserRuleContext {
	public factor(): FactorContext[];
	public factor(i: number): FactorContext;
	public factor(i?: number): FactorContext | FactorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorContext);
		} else {
			return this.getRuleContext(i, FactorContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_term; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterTerm) listener.enterTerm(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitTerm) listener.exitTerm(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitTerm) return visitor.visitTerm(this);
		else return visitor.visitChildren(this);
	}
}


export class FactorContext extends ParserRuleContext {
	public atom(): AtomContext | undefined {
		return this.tryGetRuleContext(0, AtomContext);
	}
	public qmark(): QmarkContext | undefined {
		return this.tryGetRuleContext(0, QmarkContext);
	}
	public plus(): PlusContext | undefined {
		return this.tryGetRuleContext(0, PlusContext);
	}
	public star(): StarContext | undefined {
		return this.tryGetRuleContext(0, StarContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_factor; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterFactor) listener.enterFactor(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitFactor) listener.exitFactor(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitFactor) return visitor.visitFactor(this);
		else return visitor.visitChildren(this);
	}
}


export class AtomContext extends ParserRuleContext {
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public CHAR(): TerminalNode | undefined { return this.tryGetToken(RegexParser.CHAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_atom; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterAtom) listener.enterAtom(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitAtom) listener.exitAtom(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitAtom) return visitor.visitAtom(this);
		else return visitor.visitChildren(this);
	}
}


export class SetContext extends ParserRuleContext {
	public LBRACK(): TerminalNode { return this.getToken(RegexParser.LBRACK, 0); }
	public characterRange(): CharacterRangeContext {
		return this.getRuleContext(0, CharacterRangeContext);
	}
	public RBRACK(): TerminalNode { return this.getToken(RegexParser.RBRACK, 0); }
	public CARET(): TerminalNode | undefined { return this.tryGetToken(RegexParser.CARET, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_set; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterSet) listener.enterSet(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitSet) listener.exitSet(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitSet) return visitor.visitSet(this);
		else return visitor.visitChildren(this);
	}
}


export class GroupContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(RegexParser.LPAREN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(RegexParser.RPAREN, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_group; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterGroup) listener.enterGroup(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitGroup) listener.exitGroup(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitGroup) return visitor.visitGroup(this);
		else return visitor.visitChildren(this);
	}
}


export class CharacterRangeContext extends ParserRuleContext {
	public beginCharacter(): BeginCharacterContext {
		return this.getRuleContext(0, BeginCharacterContext);
	}
	public HYPHEN(): TerminalNode { return this.getToken(RegexParser.HYPHEN, 0); }
	public endCharacter(): EndCharacterContext {
		return this.getRuleContext(0, EndCharacterContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_characterRange; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterCharacterRange) listener.enterCharacterRange(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitCharacterRange) listener.exitCharacterRange(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitCharacterRange) return visitor.visitCharacterRange(this);
		else return visitor.visitChildren(this);
	}
}


export class QmarkContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public QMARK(): TerminalNode { return this.getToken(RegexParser.QMARK, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_qmark; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterQmark) listener.enterQmark(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitQmark) listener.exitQmark(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitQmark) return visitor.visitQmark(this);
		else return visitor.visitChildren(this);
	}
}


export class StarContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public STAR(): TerminalNode { return this.getToken(RegexParser.STAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_star; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterStar) listener.enterStar(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitStar) listener.exitStar(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitStar) return visitor.visitStar(this);
		else return visitor.visitChildren(this);
	}
}


export class PlusContext extends ParserRuleContext {
	public atom(): AtomContext {
		return this.getRuleContext(0, AtomContext);
	}
	public PLUS(): TerminalNode { return this.getToken(RegexParser.PLUS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_plus; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterPlus) listener.enterPlus(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitPlus) listener.exitPlus(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitPlus) return visitor.visitPlus(this);
		else return visitor.visitChildren(this);
	}
}


export class BeginCharacterContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(RegexParser.CHAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_beginCharacter; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterBeginCharacter) listener.enterBeginCharacter(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitBeginCharacter) listener.exitBeginCharacter(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitBeginCharacter) return visitor.visitBeginCharacter(this);
		else return visitor.visitChildren(this);
	}
}


export class EndCharacterContext extends ParserRuleContext {
	public CHAR(): TerminalNode { return this.getToken(RegexParser.CHAR, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return RegexParser.RULE_endCharacter; }
	@Override
	public enterRule(listener: RegexListener): void {
		if (listener.enterEndCharacter) listener.enterEndCharacter(this);
	}
	@Override
	public exitRule(listener: RegexListener): void {
		if (listener.exitEndCharacter) listener.exitEndCharacter(this);
	}
	@Override
	public accept<Result>(visitor: RegexVisitor<Result>): Result {
		if (visitor.visitEndCharacter) return visitor.visitEndCharacter(this);
		else return visitor.visitChildren(this);
	}
}


