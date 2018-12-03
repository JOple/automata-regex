// Generated from grammar/Regex.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class RegexLexer extends Lexer {
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
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'*'", "'+'", "'?'", "'|'", "'-'", "'('", "')'", "'['", "']'", 
		"'^'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN", 
		"LBRACK", "RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegexLexer._LITERAL_NAMES, RegexLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return RegexLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(RegexLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Regex.g4"; }

	@Override
	public get ruleNames(): string[] { return RegexLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return RegexLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return RegexLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x10I\b\x01\x04"+
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04"+
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r"+
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03"+
		"\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t"+
		"\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x05\f6\n\f\x03\r\x03\r\x03"+
		"\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03"+
		"\x0E\x03\x0E\x03\x0E\x05\x0EF\n\x0E\x03\x0F\x03\x0F\x02\x02\x02\x10\x03"+
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t"+
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02"+
		"\x10\x03\x02\x03\b\x02\v\f\x0E\x0F\"\"0;C\\c|N\x02\x03\x03\x02\x02\x02"+
		"\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02"+
		"\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02"+
		"\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02"+
		"\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02"+
		"\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02\x05!\x03\x02\x02\x02\x07"+
		"#\x03\x02\x02\x02\t%\x03\x02\x02\x02\v\'\x03\x02\x02\x02\r)\x03\x02\x02"+
		"\x02\x0F+\x03\x02\x02\x02\x11-\x03\x02\x02\x02\x13/\x03\x02\x02\x02\x15"+
		"1\x03\x02\x02\x02\x175\x03\x02\x02\x02\x197\x03\x02\x02\x02\x1BE\x03\x02"+
		"\x02\x02\x1DG\x03\x02\x02\x02\x1F \x07,\x02\x02 \x04\x03\x02\x02\x02!"+
		"\"\x07-\x02\x02\"\x06\x03\x02\x02\x02#$\x07A\x02\x02$\b\x03\x02\x02\x02"+
		"%&\x07~\x02\x02&\n\x03\x02\x02\x02\'(\x07/\x02\x02(\f\x03\x02\x02\x02"+
		")*\x07*\x02\x02*\x0E\x03\x02\x02\x02+,\x07+\x02\x02,\x10\x03\x02\x02\x02"+
		"-.\x07]\x02\x02.\x12\x03\x02\x02\x02/0\x07_\x02\x020\x14\x03\x02\x02\x02"+
		"12\x07`\x02\x022\x16\x03\x02\x02\x0236\x05\x1B\x0E\x0246\x05\x19\r\x02"+
		"53\x03\x02\x02\x0254\x03\x02\x02\x026\x18\x03\x02\x02\x0278\t\x02\x02"+
		"\x028\x1A\x03\x02\x02\x029:\x07^\x02\x02:F\x07,\x02\x02;<\x07^\x02\x02"+
		"<F\x07-\x02\x02=>\x07^\x02\x02>F\x07*\x02\x02?@\x07^\x02\x02@F\x07+\x02"+
		"\x02AB\x07^\x02\x02BF\x07]\x02\x02CD\x07^\x02\x02DF\x07/\x02\x02E9\x03"+
		"\x02\x02\x02E;\x03\x02\x02\x02E=\x03\x02\x02\x02E?\x03\x02\x02\x02EA\x03"+
		"\x02\x02\x02EC\x03\x02\x02\x02F\x1C\x03\x02\x02\x02GH\v\x02\x02\x02H\x1E"+
		"\x03\x02\x02\x02\x05\x025E\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegexLexer.__ATN) {
			RegexLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegexLexer._serializedATN));
		}

		return RegexLexer.__ATN;
	}

}

