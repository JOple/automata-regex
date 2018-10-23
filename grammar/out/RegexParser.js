"use strict";
// Generated from grammar/Regex.g4 by ANTLR 4.6-SNAPSHOT
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const Decorators_1 = require("antlr4ts/Decorators");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Decorators_2 = require("antlr4ts/Decorators");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const RuleVersion_1 = require("antlr4ts/RuleVersion");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class RegexParser extends Parser_1.Parser {
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(RegexParser._ATN, this);
    }
    get vocabulary() {
        return RegexParser.VOCABULARY;
    }
    get grammarFileName() { return "Regex.g4"; }
    get ruleNames() { return RegexParser.ruleNames; }
    get serializedATN() { return RegexParser._serializedATN; }
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, RegexParser.RULE_expression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 24;
                this.term();
                this.state = 29;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === RegexParser.OR) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    term() {
        let _localctx = new TermContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, RegexParser.RULE_term);
        let _la;
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
                } while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RegexParser.LPAREN) | (1 << RegexParser.LBRACK) | (1 << RegexParser.CHAR))) !== 0));
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    factor() {
        let _localctx = new FactorContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, RegexParser.RULE_factor);
        try {
            this.state = 41;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    atom() {
        let _localctx = new AtomContext(this._ctx, this.state);
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
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    set() {
        let _localctx = new SetContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, RegexParser.RULE_set);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 48;
                this.match(RegexParser.LBRACK);
                this.state = 50;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === RegexParser.CARET) {
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    group() {
        let _localctx = new GroupContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    characterRange() {
        let _localctx = new CharacterRangeContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    qmark() {
        let _localctx = new QmarkContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    star() {
        let _localctx = new StarContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    plus() {
        let _localctx = new PlusContext(this._ctx, this.state);
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
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    beginCharacter() {
        let _localctx = new BeginCharacterContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, RegexParser.RULE_beginCharacter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 72;
                this.match(RegexParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    endCharacter() {
        let _localctx = new EndCharacterContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, RegexParser.RULE_endCharacter);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 74;
                this.match(RegexParser.CHAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!RegexParser.__ATN) {
            RegexParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RegexParser._serializedATN));
        }
        return RegexParser.__ATN;
    }
}
RegexParser.STAR = 1;
RegexParser.PLUS = 2;
RegexParser.QMARK = 3;
RegexParser.OR = 4;
RegexParser.HYPHEN = 5;
RegexParser.LPAREN = 6;
RegexParser.RPAREN = 7;
RegexParser.LBRACK = 8;
RegexParser.RBRACK = 9;
RegexParser.CARET = 10;
RegexParser.CHAR = 11;
RegexParser.NORMALCHAR = 12;
RegexParser.ESCAPEDCHAR = 13;
RegexParser.ANY = 14;
RegexParser.RULE_expression = 0;
RegexParser.RULE_term = 1;
RegexParser.RULE_factor = 2;
RegexParser.RULE_atom = 3;
RegexParser.RULE_set = 4;
RegexParser.RULE_group = 5;
RegexParser.RULE_characterRange = 6;
RegexParser.RULE_qmark = 7;
RegexParser.RULE_star = 8;
RegexParser.RULE_plus = 9;
RegexParser.RULE_beginCharacter = 10;
RegexParser.RULE_endCharacter = 11;
RegexParser.ruleNames = [
    "expression", "term", "factor", "atom", "set", "group", "characterRange",
    "qmark", "star", "plus", "beginCharacter", "endCharacter"
];
RegexParser._LITERAL_NAMES = [
    undefined, "'*'", "'+'", "'?'", "'|'", "'-'", "'('", "')'", "'['", "']'",
    "'^'"
];
RegexParser._SYMBOLIC_NAMES = [
    undefined, "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN",
    "LBRACK", "RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
];
RegexParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RegexParser._LITERAL_NAMES, RegexParser._SYMBOLIC_NAMES, []);
RegexParser._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x10O\x04\x02" +
    "\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
    "\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
    "\x02\x03\x02\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x03\x06" +
    "\x03$\n\x03\r\x03\x0E\x03%\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04,\n" +
    "\x04\x03\x05\x03\x05\x03\x05\x05\x051\n\x05\x03\x06\x03\x06\x05\x065\n" +
    "\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03" +
    "\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03" +
    "\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02\x06\x02\b\x02" +
    "\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\x02J" +
    "\x02\x1A\x03\x02\x02\x02\x04#\x03\x02\x02\x02\x06+\x03\x02\x02\x02\b0" +
    "\x03\x02\x02\x02\n2\x03\x02\x02\x02\f9\x03\x02\x02\x02\x0E=\x03\x02\x02" +
    "\x02\x10A\x03\x02\x02\x02\x12D\x03\x02\x02\x02\x14G\x03\x02\x02\x02\x16" +
    "J\x03\x02\x02\x02\x18L\x03\x02\x02\x02\x1A\x1F\x05\x04\x03\x02\x1B\x1C" +
    "\x07\x06\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1B\x03\x02\x02\x02\x1E!" +
    "\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x03\x03" +
    "\x02\x02\x02!\x1F\x03\x02\x02\x02\"$\x05\x06\x04\x02#\"\x03\x02\x02\x02" +
    "$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03\x02\x02\x02&\x05\x03\x02\x02" +
    "\x02\',\x05\b\x05\x02(,\x05\x10\t\x02),\x05\x14\v\x02*,\x05\x12\n\x02" +
    "+\'\x03\x02\x02\x02+(\x03\x02\x02\x02+)\x03\x02\x02\x02+*\x03\x02\x02" +
    "\x02,\x07\x03\x02\x02\x02-1\x05\n\x06\x02.1\x05\f\x07\x02/1\x07\r\x02" +
    "\x020-\x03\x02\x02\x020.\x03\x02\x02\x020/\x03\x02\x02\x021\t\x03\x02" +
    "\x02\x0224\x07\n\x02\x0235\x07\f\x02\x0243\x03\x02\x02\x0245\x03\x02\x02" +
    "\x0256\x03\x02\x02\x0267\x05\x0E\b\x0278\x07\v\x02\x028\v\x03\x02\x02" +
    "\x029:\x07\b\x02\x02:;\x05\x02\x02\x02;<\x07\t\x02\x02<\r\x03\x02\x02" +
    "\x02=>\x05\x16\f\x02>?\x07\x07\x02\x02?@\x05\x18\r\x02@\x0F\x03\x02\x02" +
    "\x02AB\x05\b\x05\x02BC\x07\x05\x02\x02C\x11\x03\x02\x02\x02DE\x05\b\x05" +
    "\x02EF\x07\x03\x02\x02F\x13\x03\x02\x02\x02GH\x05\b\x05\x02HI\x07\x04" +
    "\x02\x02I\x15\x03\x02\x02\x02JK\x07\r\x02\x02K\x17\x03\x02\x02\x02LM\x07" +
    "\r\x02\x02M\x19\x03\x02\x02\x02\x07\x1F%+04";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], RegexParser.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], RegexParser.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], RegexParser.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], RegexParser.prototype, "serializedATN", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "expression", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "term", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "factor", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "atom", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "set", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "group", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "characterRange", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "qmark", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "star", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "plus", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "beginCharacter", null);
__decorate([
    RuleVersion_1.RuleVersion(0)
], RegexParser.prototype, "endCharacter", null);
exports.RegexParser = RegexParser;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    term(i) {
        if (i === undefined) {
            return this.getRuleContexts(TermContext);
        }
        else {
            return this.getRuleContext(i, TermContext);
        }
    }
    OR(i) {
        if (i === undefined) {
            return this.getTokens(RegexParser.OR);
        }
        else {
            return this.getToken(RegexParser.OR, i);
        }
    }
    get ruleIndex() { return RegexParser.RULE_expression; }
    enterRule(listener) {
        if (listener.enterExpression)
            listener.enterExpression(this);
    }
    exitRule(listener) {
        if (listener.exitExpression)
            listener.exitExpression(this);
    }
    accept(visitor) {
        if (visitor.visitExpression)
            return visitor.visitExpression(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], ExpressionContext.prototype, "accept", null);
exports.ExpressionContext = ExpressionContext;
class TermContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    factor(i) {
        if (i === undefined) {
            return this.getRuleContexts(FactorContext);
        }
        else {
            return this.getRuleContext(i, FactorContext);
        }
    }
    get ruleIndex() { return RegexParser.RULE_term; }
    enterRule(listener) {
        if (listener.enterTerm)
            listener.enterTerm(this);
    }
    exitRule(listener) {
        if (listener.exitTerm)
            listener.exitTerm(this);
    }
    accept(visitor) {
        if (visitor.visitTerm)
            return visitor.visitTerm(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], TermContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], TermContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], TermContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], TermContext.prototype, "accept", null);
exports.TermContext = TermContext;
class FactorContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    atom() {
        return this.tryGetRuleContext(0, AtomContext);
    }
    qmark() {
        return this.tryGetRuleContext(0, QmarkContext);
    }
    plus() {
        return this.tryGetRuleContext(0, PlusContext);
    }
    star() {
        return this.tryGetRuleContext(0, StarContext);
    }
    get ruleIndex() { return RegexParser.RULE_factor; }
    enterRule(listener) {
        if (listener.enterFactor)
            listener.enterFactor(this);
    }
    exitRule(listener) {
        if (listener.exitFactor)
            listener.exitFactor(this);
    }
    accept(visitor) {
        if (visitor.visitFactor)
            return visitor.visitFactor(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], FactorContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], FactorContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], FactorContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], FactorContext.prototype, "accept", null);
exports.FactorContext = FactorContext;
class AtomContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    set() {
        return this.tryGetRuleContext(0, SetContext);
    }
    group() {
        return this.tryGetRuleContext(0, GroupContext);
    }
    CHAR() { return this.tryGetToken(RegexParser.CHAR, 0); }
    get ruleIndex() { return RegexParser.RULE_atom; }
    enterRule(listener) {
        if (listener.enterAtom)
            listener.enterAtom(this);
    }
    exitRule(listener) {
        if (listener.exitAtom)
            listener.exitAtom(this);
    }
    accept(visitor) {
        if (visitor.visitAtom)
            return visitor.visitAtom(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], AtomContext.prototype, "accept", null);
exports.AtomContext = AtomContext;
class SetContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LBRACK() { return this.getToken(RegexParser.LBRACK, 0); }
    characterRange() {
        return this.getRuleContext(0, CharacterRangeContext);
    }
    RBRACK() { return this.getToken(RegexParser.RBRACK, 0); }
    CARET() { return this.tryGetToken(RegexParser.CARET, 0); }
    get ruleIndex() { return RegexParser.RULE_set; }
    enterRule(listener) {
        if (listener.enterSet)
            listener.enterSet(this);
    }
    exitRule(listener) {
        if (listener.exitSet)
            listener.exitSet(this);
    }
    accept(visitor) {
        if (visitor.visitSet)
            return visitor.visitSet(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], SetContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], SetContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], SetContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], SetContext.prototype, "accept", null);
exports.SetContext = SetContext;
class GroupContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    LPAREN() { return this.getToken(RegexParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(RegexParser.RPAREN, 0); }
    get ruleIndex() { return RegexParser.RULE_group; }
    enterRule(listener) {
        if (listener.enterGroup)
            listener.enterGroup(this);
    }
    exitRule(listener) {
        if (listener.exitGroup)
            listener.exitGroup(this);
    }
    accept(visitor) {
        if (visitor.visitGroup)
            return visitor.visitGroup(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], GroupContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], GroupContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], GroupContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], GroupContext.prototype, "accept", null);
exports.GroupContext = GroupContext;
class CharacterRangeContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    beginCharacter() {
        return this.getRuleContext(0, BeginCharacterContext);
    }
    HYPHEN() { return this.getToken(RegexParser.HYPHEN, 0); }
    endCharacter() {
        return this.getRuleContext(0, EndCharacterContext);
    }
    get ruleIndex() { return RegexParser.RULE_characterRange; }
    enterRule(listener) {
        if (listener.enterCharacterRange)
            listener.enterCharacterRange(this);
    }
    exitRule(listener) {
        if (listener.exitCharacterRange)
            listener.exitCharacterRange(this);
    }
    accept(visitor) {
        if (visitor.visitCharacterRange)
            return visitor.visitCharacterRange(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], CharacterRangeContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], CharacterRangeContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], CharacterRangeContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], CharacterRangeContext.prototype, "accept", null);
exports.CharacterRangeContext = CharacterRangeContext;
class QmarkContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    QMARK() { return this.getToken(RegexParser.QMARK, 0); }
    get ruleIndex() { return RegexParser.RULE_qmark; }
    enterRule(listener) {
        if (listener.enterQmark)
            listener.enterQmark(this);
    }
    exitRule(listener) {
        if (listener.exitQmark)
            listener.exitQmark(this);
    }
    accept(visitor) {
        if (visitor.visitQmark)
            return visitor.visitQmark(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], QmarkContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], QmarkContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], QmarkContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], QmarkContext.prototype, "accept", null);
exports.QmarkContext = QmarkContext;
class StarContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    STAR() { return this.getToken(RegexParser.STAR, 0); }
    get ruleIndex() { return RegexParser.RULE_star; }
    enterRule(listener) {
        if (listener.enterStar)
            listener.enterStar(this);
    }
    exitRule(listener) {
        if (listener.exitStar)
            listener.exitStar(this);
    }
    accept(visitor) {
        if (visitor.visitStar)
            return visitor.visitStar(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], StarContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], StarContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], StarContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], StarContext.prototype, "accept", null);
exports.StarContext = StarContext;
class PlusContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    atom() {
        return this.getRuleContext(0, AtomContext);
    }
    PLUS() { return this.getToken(RegexParser.PLUS, 0); }
    get ruleIndex() { return RegexParser.RULE_plus; }
    enterRule(listener) {
        if (listener.enterPlus)
            listener.enterPlus(this);
    }
    exitRule(listener) {
        if (listener.exitPlus)
            listener.exitPlus(this);
    }
    accept(visitor) {
        if (visitor.visitPlus)
            return visitor.visitPlus(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], PlusContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], PlusContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], PlusContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], PlusContext.prototype, "accept", null);
exports.PlusContext = PlusContext;
class BeginCharacterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CHAR() { return this.getToken(RegexParser.CHAR, 0); }
    get ruleIndex() { return RegexParser.RULE_beginCharacter; }
    enterRule(listener) {
        if (listener.enterBeginCharacter)
            listener.enterBeginCharacter(this);
    }
    exitRule(listener) {
        if (listener.exitBeginCharacter)
            listener.exitBeginCharacter(this);
    }
    accept(visitor) {
        if (visitor.visitBeginCharacter)
            return visitor.visitBeginCharacter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], BeginCharacterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], BeginCharacterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], BeginCharacterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], BeginCharacterContext.prototype, "accept", null);
exports.BeginCharacterContext = BeginCharacterContext;
class EndCharacterContext extends ParserRuleContext_1.ParserRuleContext {
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    CHAR() { return this.getToken(RegexParser.CHAR, 0); }
    get ruleIndex() { return RegexParser.RULE_endCharacter; }
    enterRule(listener) {
        if (listener.enterEndCharacter)
            listener.enterEndCharacter(this);
    }
    exitRule(listener) {
        if (listener.exitEndCharacter)
            listener.exitEndCharacter(this);
    }
    accept(visitor) {
        if (visitor.visitEndCharacter)
            return visitor.visitEndCharacter(this);
        else
            return visitor.visitChildren(this);
    }
}
__decorate([
    Decorators_2.Override
], EndCharacterContext.prototype, "ruleIndex", null);
__decorate([
    Decorators_2.Override
], EndCharacterContext.prototype, "enterRule", null);
__decorate([
    Decorators_2.Override
], EndCharacterContext.prototype, "exitRule", null);
__decorate([
    Decorators_2.Override
], EndCharacterContext.prototype, "accept", null);
exports.EndCharacterContext = EndCharacterContext;
