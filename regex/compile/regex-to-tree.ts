import { ANTLRInputStream } from "antlr4ts/ANTLRInputStream";
import { CommonTokenStream } from "antlr4ts/CommonTokenStream";

import { RegexLexer } from "../../grammar/out/RegexLexer";
import { RegexParser, ExpressionContext } from "../../grammar/out/RegexParser";

export interface RegexTree extends ExpressionContext { }

export function regexToTree(regex: string): RegexTree {
    let inputStream = new ANTLRInputStream(regex)
    let lexer = new RegexLexer(inputStream)
    let tokenStream = new CommonTokenStream(lexer)
    let parser = new RegexParser(tokenStream)
    return parser.expression();
}