"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ANTLRInputStream_1 = require("antlr4ts/ANTLRInputStream");
const CommonTokenStream_1 = require("antlr4ts/CommonTokenStream");
const RegexLexer_1 = require("../../grammar/out/RegexLexer");
const RegexParser_1 = require("../../grammar/out/RegexParser");
function regexToTree(regex) {
    let inputStream = new ANTLRInputStream_1.ANTLRInputStream(regex);
    let lexer = new RegexLexer_1.RegexLexer(inputStream);
    let tokenStream = new CommonTokenStream_1.CommonTokenStream(lexer);
    let parser = new RegexParser_1.RegexParser(tokenStream);
    return parser.expression();
}
exports.regexToTree = regexToTree;
