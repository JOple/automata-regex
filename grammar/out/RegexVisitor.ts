// Generated from grammar/Regex.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RegexParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RegexVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RegexParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.set`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet?: (ctx: SetContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.characterRange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharacterRange?: (ctx: CharacterRangeContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.qmark`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQmark?: (ctx: QmarkContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.star`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStar?: (ctx: StarContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.plus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlus?: (ctx: PlusContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.beginCharacter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeginCharacter?: (ctx: BeginCharacterContext) => Result;

	/**
	 * Visit a parse tree produced by `RegexParser.endCharacter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndCharacter?: (ctx: EndCharacterContext) => Result;
}

