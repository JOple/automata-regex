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
const Lexer_1 = require("antlr4ts/Lexer");
const LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
const Decorators_1 = require("antlr4ts/Decorators");
const Decorators_2 = require("antlr4ts/Decorators");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = require("antlr4ts/misc/Utils");
class RegexLexer extends Lexer_1.Lexer {
    constructor(input) {
        super(input);
        this._interp = new LexerATNSimulator_1.LexerATNSimulator(RegexLexer._ATN, this);
    }
    get vocabulary() {
        return RegexLexer.VOCABULARY;
    }
    get grammarFileName() { return "Regex.g4"; }
    get ruleNames() { return RegexLexer.ruleNames; }
    get serializedATN() { return RegexLexer._serializedATN; }
    get modeNames() { return RegexLexer.modeNames; }
    static get _ATN() {
        if (!RegexLexer.__ATN) {
            RegexLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(RegexLexer._serializedATN));
        }
        return RegexLexer.__ATN;
    }
}
RegexLexer.STAR = 1;
RegexLexer.PLUS = 2;
RegexLexer.QMARK = 3;
RegexLexer.OR = 4;
RegexLexer.HYPHEN = 5;
RegexLexer.LPAREN = 6;
RegexLexer.RPAREN = 7;
RegexLexer.LBRACK = 8;
RegexLexer.RBRACK = 9;
RegexLexer.CARET = 10;
RegexLexer.CHAR = 11;
RegexLexer.NORMALCHAR = 12;
RegexLexer.ESCAPEDCHAR = 13;
RegexLexer.ANY = 14;
RegexLexer.modeNames = [
    "DEFAULT_MODE"
];
RegexLexer.ruleNames = [
    "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN", "LBRACK",
    "RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
];
RegexLexer._LITERAL_NAMES = [
    undefined, "'*'", "'+'", "'?'", "'|'", "'-'", "'('", "')'", "'['", "']'",
    "'^'"
];
RegexLexer._SYMBOLIC_NAMES = [
    undefined, "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN",
    "LBRACK", "RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
];
RegexLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(RegexLexer._LITERAL_NAMES, RegexLexer._SYMBOLIC_NAMES, []);
RegexLexer._serializedATN = "\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x10G\b\x01\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03" +
    "\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t" +
    "\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x05\f6\n\f\x03\r\x03\r\x03" +
    "\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
    "\x0E\x05\x0ED\n\x0E\x03\x0F\x03\x0F\x02\x02\x02\x10\x03\x02\x03\x05\x02" +
    "\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02" +
    "\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x03\x02\x03" +
    "\b\x02\v\f\x0E\x0F\"\"2;C\\c|K\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
    "\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
    "\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02" +
    "\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02" +
    "\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02" +
    "\x02\x03\x1F\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07#\x03\x02\x02\x02" +
    "\t%\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r)\x03\x02\x02\x02\x0F+\x03\x02" +
    "\x02\x02\x11-\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x151\x03\x02\x02\x02" +
    "\x175\x03\x02\x02\x02\x197\x03\x02\x02\x02\x1BC\x03\x02\x02\x02\x1DE\x03" +
    "\x02\x02\x02\x1F \x07,\x02\x02 \x04\x03\x02\x02\x02!\"\x07-\x02\x02\"" +
    "\x06\x03\x02\x02\x02#$\x07A\x02\x02$\b\x03\x02\x02\x02%&\x07~\x02\x02" +
    "&\n\x03\x02\x02\x02\'(\x07/\x02\x02(\f\x03\x02\x02\x02)*\x07*\x02\x02" +
    "*\x0E\x03\x02\x02\x02+,\x07+\x02\x02,\x10\x03\x02\x02\x02-.\x07]\x02\x02" +
    ".\x12\x03\x02\x02\x02/0\x07_\x02\x020\x14\x03\x02\x02\x0212\x07`\x02\x02" +
    "2\x16\x03\x02\x02\x0236\x05\x1B\x0E\x0246\x05\x19\r\x0253\x03\x02\x02" +
    "\x0254\x03\x02\x02\x026\x18\x03\x02\x02\x0278\t\x02\x02\x028\x1A\x03\x02" +
    "\x02\x029:\x07^\x02\x02:D\x07,\x02\x02;<\x07^\x02\x02<D\x07-\x02\x02=" +
    ">\x07^\x02\x02>D\x07*\x02\x02?@\x07^\x02\x02@D\x07+\x02\x02AB\x07^\x02" +
    "\x02BD\x07]\x02\x02C9\x03\x02\x02\x02C;\x03\x02\x02\x02C=\x03\x02\x02" +
    "\x02C?\x03\x02\x02\x02CA\x03\x02\x02\x02D\x1C\x03\x02\x02\x02EF\v\x02" +
    "\x02\x02F\x1E\x03\x02\x02\x02\x05\x025C\x02";
__decorate([
    Decorators_2.Override,
    Decorators_1.NotNull
], RegexLexer.prototype, "vocabulary", null);
__decorate([
    Decorators_2.Override
], RegexLexer.prototype, "grammarFileName", null);
__decorate([
    Decorators_2.Override
], RegexLexer.prototype, "ruleNames", null);
__decorate([
    Decorators_2.Override
], RegexLexer.prototype, "serializedATN", null);
__decorate([
    Decorators_2.Override
], RegexLexer.prototype, "modeNames", null);
exports.RegexLexer = RegexLexer;
