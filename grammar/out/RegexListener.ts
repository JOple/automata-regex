// Generated from grammar/Regex.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ExpressionContext } from './RegexParser';
import { TermContext } from './RegexParser';
import { FactorContext } from './RegexParser';
import { AtomContext } from './RegexParser';
import { SetContext } from './RegexParser';
import { GroupContext } from './RegexParser';
import { CharacterRangeContext } from './RegexParser';
import { QmarkContext } from './RegexParser';
import { StarContext } from './RegexParser';
import { PlusContext } from './RegexParser';
import { BeginCharacterContext } from './RegexParser';
import { EndCharacterContext } from './RegexParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RegexParser`.
 */
export interface RegexListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RegexParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.characterRange`.
	 * @param ctx the parse tree
	 */
	enterCharacterRange?: (ctx: CharacterRangeContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.characterRange`.
	 * @param ctx the parse tree
	 */
	exitCharacterRange?: (ctx: CharacterRangeContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.qmark`.
	 * @param ctx the parse tree
	 */
	enterQmark?: (ctx: QmarkContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.qmark`.
	 * @param ctx the parse tree
	 */
	exitQmark?: (ctx: QmarkContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.star`.
	 * @param ctx the parse tree
	 */
	enterStar?: (ctx: StarContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.star`.
	 * @param ctx the parse tree
	 */
	exitStar?: (ctx: StarContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.plus`.
	 * @param ctx the parse tree
	 */
	enterPlus?: (ctx: PlusContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.plus`.
	 * @param ctx the parse tree
	 */
	exitPlus?: (ctx: PlusContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.beginCharacter`.
	 * @param ctx the parse tree
	 */
	enterBeginCharacter?: (ctx: BeginCharacterContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.beginCharacter`.
	 * @param ctx the parse tree
	 */
	exitBeginCharacter?: (ctx: BeginCharacterContext) => void;

	/**
	 * Enter a parse tree produced by `RegexParser.endCharacter`.
	 * @param ctx the parse tree
	 */
	enterEndCharacter?: (ctx: EndCharacterContext) => void;
	/**
	 * Exit a parse tree produced by `RegexParser.endCharacter`.
	 * @param ctx the parse tree
	 */
	exitEndCharacter?: (ctx: EndCharacterContext) => void;
}

