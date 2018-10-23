// Generated from d:\Dev\Workspace\vscode\regex\grammar\RegexOld.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RegexOldParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		CHAR=1, NORMALCHAR=2, ESCAPEDCHAR=3, STAR=4, PLUS=5, OR=6, LPAREN=7, RPAREN=8, 
		LBRACK=9, RBRACK=10, DASH=11, CARET=12, ANY=13;
	public static final int
		RULE_expression = 0, RULE_term = 1, RULE_factor = 2, RULE_atom = 3, RULE_group = 4, 
		RULE_positiveSet = 5, RULE_negativeSet = 6, RULE_star = 7, RULE_plus = 8, 
		RULE_characterClass = 9, RULE_characterRange = 10, RULE_begincharacter = 11, 
		RULE_endcharacter = 12;
	public static final String[] ruleNames = {
		"expression", "term", "factor", "atom", "group", "positiveSet", "negativeSet", 
		"star", "plus", "characterClass", "characterRange", "begincharacter", 
		"endcharacter"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, null, "'*'", "'+'", "'|'", "'('", "')'", "'['", "']'", 
		"'-'", "'^'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "STAR", "PLUS", "OR", "LPAREN", 
		"RPAREN", "LBRACK", "RBRACK", "DASH", "CARET", "ANY"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "RegexOld.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RegexOldParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ExpressionContext extends ParserRuleContext {
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TerminalNode OR() { return getToken(RegexOldParser.OR, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_expression);
		try {
			setState(31);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,0,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(26);
				term();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(27);
				term();
				setState(28);
				match(OR);
				setState(29);
				expression();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TermContext extends ParserRuleContext {
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public TermContext term() {
			return getRuleContext(TermContext.class,0);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_term);
		try {
			setState(37);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(33);
				factor();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(34);
				factor();
				setState(35);
				term();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public PlusContext plus() {
			return getRuleContext(PlusContext.class,0);
		}
		public StarContext star() {
			return getRuleContext(StarContext.class,0);
		}
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	}

	public final FactorContext factor() throws RecognitionException {
		FactorContext _localctx = new FactorContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_factor);
		try {
			setState(42);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(39);
				atom();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				plus();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(41);
				star();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AtomContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(RegexOldParser.CHAR, 0); }
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public PositiveSetContext positiveSet() {
			return getRuleContext(PositiveSetContext.class,0);
		}
		public NegativeSetContext negativeSet() {
			return getRuleContext(NegativeSetContext.class,0);
		}
		public TerminalNode ANY() { return getToken(RegexOldParser.ANY, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_atom);
		try {
			setState(49);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(44);
				match(CHAR);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(45);
				group();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(46);
				positiveSet();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(47);
				negativeSet();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(48);
				match(ANY);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class GroupContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(RegexOldParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(RegexOldParser.RPAREN, 0); }
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(LPAREN);
			setState(52);
			expression();
			setState(53);
			match(RPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PositiveSetContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(RegexOldParser.LBRACK, 0); }
		public CharacterClassContext characterClass() {
			return getRuleContext(CharacterClassContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(RegexOldParser.RBRACK, 0); }
		public PositiveSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_positiveSet; }
	}

	public final PositiveSetContext positiveSet() throws RecognitionException {
		PositiveSetContext _localctx = new PositiveSetContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_positiveSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(LBRACK);
			setState(56);
			characterClass();
			setState(57);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class NegativeSetContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(RegexOldParser.LBRACK, 0); }
		public TerminalNode CARET() { return getToken(RegexOldParser.CARET, 0); }
		public CharacterClassContext characterClass() {
			return getRuleContext(CharacterClassContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(RegexOldParser.RBRACK, 0); }
		public NegativeSetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_negativeSet; }
	}

	public final NegativeSetContext negativeSet() throws RecognitionException {
		NegativeSetContext _localctx = new NegativeSetContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_negativeSet);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			match(LBRACK);
			setState(60);
			match(CARET);
			setState(61);
			characterClass();
			setState(62);
			match(RBRACK);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StarContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode STAR() { return getToken(RegexOldParser.STAR, 0); }
		public StarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_star; }
	}

	public final StarContext star() throws RecognitionException {
		StarContext _localctx = new StarContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_star);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(64);
			atom();
			setState(65);
			match(STAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlusContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(RegexOldParser.PLUS, 0); }
		public PlusContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_plus; }
	}

	public final PlusContext plus() throws RecognitionException {
		PlusContext _localctx = new PlusContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_plus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			atom();
			setState(68);
			match(PLUS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CharacterClassContext extends ParserRuleContext {
		public CharacterRangeContext characterRange() {
			return getRuleContext(CharacterRangeContext.class,0);
		}
		public CharacterClassContext characterClass() {
			return getRuleContext(CharacterClassContext.class,0);
		}
		public CharacterClassContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_characterClass; }
	}

	public final CharacterClassContext characterClass() throws RecognitionException {
		CharacterClassContext _localctx = new CharacterClassContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_characterClass);
		try {
			setState(74);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(70);
				characterRange();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				characterRange();
				setState(72);
				characterClass();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CharacterRangeContext extends ParserRuleContext {
		public BegincharacterContext begincharacter() {
			return getRuleContext(BegincharacterContext.class,0);
		}
		public TerminalNode DASH() { return getToken(RegexOldParser.DASH, 0); }
		public EndcharacterContext endcharacter() {
			return getRuleContext(EndcharacterContext.class,0);
		}
		public CharacterRangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_characterRange; }
	}

	public final CharacterRangeContext characterRange() throws RecognitionException {
		CharacterRangeContext _localctx = new CharacterRangeContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_characterRange);
		try {
			setState(81);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(76);
				begincharacter();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(77);
				begincharacter();
				setState(78);
				match(DASH);
				setState(79);
				endcharacter();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BegincharacterContext extends ParserRuleContext {
		public TerminalNode NORMALCHAR() { return getToken(RegexOldParser.NORMALCHAR, 0); }
		public BegincharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_begincharacter; }
	}

	public final BegincharacterContext begincharacter() throws RecognitionException {
		BegincharacterContext _localctx = new BegincharacterContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_begincharacter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(NORMALCHAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndcharacterContext extends ParserRuleContext {
		public TerminalNode NORMALCHAR() { return getToken(RegexOldParser.NORMALCHAR, 0); }
		public EndcharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endcharacter; }
	}

	public final EndcharacterContext endcharacter() throws RecognitionException {
		EndcharacterContext _localctx = new EndcharacterContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_endcharacter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(NORMALCHAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\17Z\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\3\2\3\2\5\2\"\n\2\3\3\3\3\3\3\3\3"+
		"\5\3(\n\3\3\4\3\4\3\4\5\4-\n\4\3\5\3\5\3\5\3\5\3\5\5\5\64\n\5\3\6\3\6"+
		"\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3\n\3"+
		"\13\3\13\3\13\3\13\5\13M\n\13\3\f\3\f\3\f\3\f\3\f\5\fT\n\f\3\r\3\r\3\16"+
		"\3\16\3\16\2\2\17\2\4\6\b\n\f\16\20\22\24\26\30\32\2\2\2V\2!\3\2\2\2\4"+
		"\'\3\2\2\2\6,\3\2\2\2\b\63\3\2\2\2\n\65\3\2\2\2\f9\3\2\2\2\16=\3\2\2\2"+
		"\20B\3\2\2\2\22E\3\2\2\2\24L\3\2\2\2\26S\3\2\2\2\30U\3\2\2\2\32W\3\2\2"+
		"\2\34\"\5\4\3\2\35\36\5\4\3\2\36\37\7\b\2\2\37 \5\2\2\2 \"\3\2\2\2!\34"+
		"\3\2\2\2!\35\3\2\2\2\"\3\3\2\2\2#(\5\6\4\2$%\5\6\4\2%&\5\4\3\2&(\3\2\2"+
		"\2\'#\3\2\2\2\'$\3\2\2\2(\5\3\2\2\2)-\5\b\5\2*-\5\22\n\2+-\5\20\t\2,)"+
		"\3\2\2\2,*\3\2\2\2,+\3\2\2\2-\7\3\2\2\2.\64\7\3\2\2/\64\5\n\6\2\60\64"+
		"\5\f\7\2\61\64\5\16\b\2\62\64\7\17\2\2\63.\3\2\2\2\63/\3\2\2\2\63\60\3"+
		"\2\2\2\63\61\3\2\2\2\63\62\3\2\2\2\64\t\3\2\2\2\65\66\7\t\2\2\66\67\5"+
		"\2\2\2\678\7\n\2\28\13\3\2\2\29:\7\13\2\2:;\5\24\13\2;<\7\f\2\2<\r\3\2"+
		"\2\2=>\7\13\2\2>?\7\16\2\2?@\5\24\13\2@A\7\f\2\2A\17\3\2\2\2BC\5\b\5\2"+
		"CD\7\6\2\2D\21\3\2\2\2EF\5\b\5\2FG\7\7\2\2G\23\3\2\2\2HM\5\26\f\2IJ\5"+
		"\26\f\2JK\5\24\13\2KM\3\2\2\2LH\3\2\2\2LI\3\2\2\2M\25\3\2\2\2NT\5\30\r"+
		"\2OP\5\30\r\2PQ\7\r\2\2QR\5\32\16\2RT\3\2\2\2SN\3\2\2\2SO\3\2\2\2T\27"+
		"\3\2\2\2UV\7\4\2\2V\31\3\2\2\2WX\7\4\2\2X\33\3\2\2\2\b!\',\63LS";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}