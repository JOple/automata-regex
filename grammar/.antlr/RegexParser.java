// Generated from d:\Dev\Workspace\projects\AutomataProject\grammar\Regex.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class RegexParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		STAR=1, PLUS=2, QMARK=3, OR=4, HYPHEN=5, LPAREN=6, RPAREN=7, LBRACK=8, 
		RBRACK=9, CARET=10, CHAR=11, NORMALCHAR=12, ESCAPEDCHAR=13, ANY=14;
	public static final int
		RULE_expression = 0, RULE_term = 1, RULE_factor = 2, RULE_atom = 3, RULE_set = 4, 
		RULE_group = 5, RULE_characterRange = 6, RULE_qmark = 7, RULE_star = 8, 
		RULE_plus = 9, RULE_beginCharacter = 10, RULE_endCharacter = 11;
	public static final String[] ruleNames = {
		"expression", "term", "factor", "atom", "set", "group", "characterRange", 
		"qmark", "star", "plus", "beginCharacter", "endCharacter"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'*'", "'+'", "'?'", "'|'", "'-'", "'('", "')'", "'['", "']'", "'^'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "STAR", "PLUS", "QMARK", "OR", "HYPHEN", "LPAREN", "RPAREN", "LBRACK", 
		"RBRACK", "CARET", "CHAR", "NORMALCHAR", "ESCAPEDCHAR", "ANY"
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
	public String getGrammarFileName() { return "Regex.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public RegexParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ExpressionContext extends ParserRuleContext {
		public List<TermContext> term() {
			return getRuleContexts(TermContext.class);
		}
		public TermContext term(int i) {
			return getRuleContext(TermContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(RegexParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(RegexParser.OR, i);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		ExpressionContext _localctx = new ExpressionContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(24);
			term();
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==OR) {
				{
				{
				setState(25);
				match(OR);
				setState(26);
				term();
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
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
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TermContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_term; }
	}

	public final TermContext term() throws RecognitionException {
		TermContext _localctx = new TermContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_term);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(32);
				factor();
				}
				}
				setState(35); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LPAREN) | (1L << LBRACK) | (1L << CHAR))) != 0) );
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
		public QmarkContext qmark() {
			return getRuleContext(QmarkContext.class,0);
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
			setState(41);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(37);
				atom();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(38);
				qmark();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(39);
				plus();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(40);
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
		public SetContext set() {
			return getRuleContext(SetContext.class,0);
		}
		public GroupContext group() {
			return getRuleContext(GroupContext.class,0);
		}
		public TerminalNode CHAR() { return getToken(RegexParser.CHAR, 0); }
		public AtomContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_atom; }
	}

	public final AtomContext atom() throws RecognitionException {
		AtomContext _localctx = new AtomContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_atom);
		try {
			setState(46);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case LBRACK:
				enterOuterAlt(_localctx, 1);
				{
				setState(43);
				set();
				}
				break;
			case LPAREN:
				enterOuterAlt(_localctx, 2);
				{
				setState(44);
				group();
				}
				break;
			case CHAR:
				enterOuterAlt(_localctx, 3);
				{
				setState(45);
				match(CHAR);
				}
				break;
			default:
				throw new NoViableAltException(this);
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

	public static class SetContext extends ParserRuleContext {
		public TerminalNode LBRACK() { return getToken(RegexParser.LBRACK, 0); }
		public CharacterRangeContext characterRange() {
			return getRuleContext(CharacterRangeContext.class,0);
		}
		public TerminalNode RBRACK() { return getToken(RegexParser.RBRACK, 0); }
		public TerminalNode CARET() { return getToken(RegexParser.CARET, 0); }
		public SetContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set; }
	}

	public final SetContext set() throws RecognitionException {
		SetContext _localctx = new SetContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_set);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			match(LBRACK);
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==CARET) {
				{
				setState(49);
				match(CARET);
				}
			}

			setState(52);
			characterRange();
			setState(53);
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

	public static class GroupContext extends ParserRuleContext {
		public TerminalNode LPAREN() { return getToken(RegexParser.LPAREN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RPAREN() { return getToken(RegexParser.RPAREN, 0); }
		public GroupContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group; }
	}

	public final GroupContext group() throws RecognitionException {
		GroupContext _localctx = new GroupContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_group);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(LPAREN);
			setState(56);
			expression();
			setState(57);
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

	public static class CharacterRangeContext extends ParserRuleContext {
		public BeginCharacterContext beginCharacter() {
			return getRuleContext(BeginCharacterContext.class,0);
		}
		public TerminalNode HYPHEN() { return getToken(RegexParser.HYPHEN, 0); }
		public EndCharacterContext endCharacter() {
			return getRuleContext(EndCharacterContext.class,0);
		}
		public CharacterRangeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_characterRange; }
	}

	public final CharacterRangeContext characterRange() throws RecognitionException {
		CharacterRangeContext _localctx = new CharacterRangeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_characterRange);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			beginCharacter();
			setState(60);
			match(HYPHEN);
			setState(61);
			endCharacter();
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

	public static class QmarkContext extends ParserRuleContext {
		public AtomContext atom() {
			return getRuleContext(AtomContext.class,0);
		}
		public TerminalNode QMARK() { return getToken(RegexParser.QMARK, 0); }
		public QmarkContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_qmark; }
	}

	public final QmarkContext qmark() throws RecognitionException {
		QmarkContext _localctx = new QmarkContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_qmark);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			atom();
			setState(64);
			match(QMARK);
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
		public TerminalNode STAR() { return getToken(RegexParser.STAR, 0); }
		public StarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_star; }
	}

	public final StarContext star() throws RecognitionException {
		StarContext _localctx = new StarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_star);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			atom();
			setState(67);
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
		public TerminalNode PLUS() { return getToken(RegexParser.PLUS, 0); }
		public PlusContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_plus; }
	}

	public final PlusContext plus() throws RecognitionException {
		PlusContext _localctx = new PlusContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_plus);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			atom();
			setState(70);
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

	public static class BeginCharacterContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(RegexParser.CHAR, 0); }
		public BeginCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beginCharacter; }
	}

	public final BeginCharacterContext beginCharacter() throws RecognitionException {
		BeginCharacterContext _localctx = new BeginCharacterContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_beginCharacter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(CHAR);
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

	public static class EndCharacterContext extends ParserRuleContext {
		public TerminalNode CHAR() { return getToken(RegexParser.CHAR, 0); }
		public EndCharacterContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endCharacter; }
	}

	public final EndCharacterContext endCharacter() throws RecognitionException {
		EndCharacterContext _localctx = new EndCharacterContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_endCharacter);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(74);
			match(CHAR);
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
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\20O\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\3\2\3\2\3\2\7\2\36\n\2\f\2\16\2!\13\2\3\3\6\3$\n\3\r\3"+
		"\16\3%\3\4\3\4\3\4\3\4\5\4,\n\4\3\5\3\5\3\5\5\5\61\n\5\3\6\3\6\5\6\65"+
		"\n\6\3\6\3\6\3\6\3\7\3\7\3\7\3\7\3\b\3\b\3\b\3\b\3\t\3\t\3\t\3\n\3\n\3"+
		"\n\3\13\3\13\3\13\3\f\3\f\3\r\3\r\3\r\2\2\16\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\2\2\2J\2\32\3\2\2\2\4#\3\2\2\2\6+\3\2\2\2\b\60\3\2\2\2\n\62\3\2\2"+
		"\2\f9\3\2\2\2\16=\3\2\2\2\20A\3\2\2\2\22D\3\2\2\2\24G\3\2\2\2\26J\3\2"+
		"\2\2\30L\3\2\2\2\32\37\5\4\3\2\33\34\7\6\2\2\34\36\5\4\3\2\35\33\3\2\2"+
		"\2\36!\3\2\2\2\37\35\3\2\2\2\37 \3\2\2\2 \3\3\2\2\2!\37\3\2\2\2\"$\5\6"+
		"\4\2#\"\3\2\2\2$%\3\2\2\2%#\3\2\2\2%&\3\2\2\2&\5\3\2\2\2\',\5\b\5\2(,"+
		"\5\20\t\2),\5\24\13\2*,\5\22\n\2+\'\3\2\2\2+(\3\2\2\2+)\3\2\2\2+*\3\2"+
		"\2\2,\7\3\2\2\2-\61\5\n\6\2.\61\5\f\7\2/\61\7\r\2\2\60-\3\2\2\2\60.\3"+
		"\2\2\2\60/\3\2\2\2\61\t\3\2\2\2\62\64\7\n\2\2\63\65\7\f\2\2\64\63\3\2"+
		"\2\2\64\65\3\2\2\2\65\66\3\2\2\2\66\67\5\16\b\2\678\7\13\2\28\13\3\2\2"+
		"\29:\7\b\2\2:;\5\2\2\2;<\7\t\2\2<\r\3\2\2\2=>\5\26\f\2>?\7\7\2\2?@\5\30"+
		"\r\2@\17\3\2\2\2AB\5\b\5\2BC\7\5\2\2C\21\3\2\2\2DE\5\b\5\2EF\7\3\2\2F"+
		"\23\3\2\2\2GH\5\b\5\2HI\7\4\2\2I\25\3\2\2\2JK\7\r\2\2K\27\3\2\2\2LM\7"+
		"\r\2\2M\31\3\2\2\2\7\37%+\60\64";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}