// Generated from c:/Users/Facu/VISUAL STUDIO/ssl-51916/instrucciones.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class instruccionesLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VERDADERO=1, FALSO=2, CADENA=3, IF=4, ELSE=5, SALIDA=6, RETURN=7, SEMICOLON=8, 
		LPAR=9, RPAR=10, LKEY=11, RKEY=12, WS=13;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"VERDADERO", "FALSO", "CADENA", "IF", "ELSE", "SALIDA", "RETURN", "SEMICOLON", 
			"LPAR", "RPAR", "LKEY", "RKEY", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'1'", "'0'", null, "'if'", "'else'", "'printf'", "'return'", "';'", 
			"'('", "')'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "VERDADERO", "FALSO", "CADENA", "IF", "ELSE", "SALIDA", "RETURN", 
			"SEMICOLON", "LPAR", "RPAR", "LKEY", "RKEY", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
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


	public instruccionesLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "instrucciones.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\rQ\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b"+
		"\u0007\u000b\u0002\f\u0007\f\u0001\u0000\u0001\u0000\u0001\u0001\u0001"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0005\u0002$\b"+
		"\u0002\n\u0002\f\u0002\'\t\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b"+
		"\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\f\u0004"+
		"\fL\b\f\u000b\f\f\fM\u0001\f\u0001\f\u0000\u0000\r\u0001\u0001\u0003\u0002"+
		"\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013"+
		"\n\u0015\u000b\u0017\f\u0019\r\u0001\u0000\u0002\u0004\u0000\n\n\r\r\""+
		"\"\\\\\u0003\u0000\t\n\r\r  S\u0000\u0001\u0001\u0000\u0000\u0000\u0000"+
		"\u0003\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000"+
		"\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b"+
		"\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001"+
		"\u0000\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001"+
		"\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001"+
		"\u0000\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0001\u001b\u0001"+
		"\u0000\u0000\u0000\u0003\u001d\u0001\u0000\u0000\u0000\u0005\u001f\u0001"+
		"\u0000\u0000\u0000\u0007*\u0001\u0000\u0000\u0000\t-\u0001\u0000\u0000"+
		"\u0000\u000b2\u0001\u0000\u0000\u0000\r9\u0001\u0000\u0000\u0000\u000f"+
		"@\u0001\u0000\u0000\u0000\u0011B\u0001\u0000\u0000\u0000\u0013D\u0001"+
		"\u0000\u0000\u0000\u0015F\u0001\u0000\u0000\u0000\u0017H\u0001\u0000\u0000"+
		"\u0000\u0019K\u0001\u0000\u0000\u0000\u001b\u001c\u00051\u0000\u0000\u001c"+
		"\u0002\u0001\u0000\u0000\u0000\u001d\u001e\u00050\u0000\u0000\u001e\u0004"+
		"\u0001\u0000\u0000\u0000\u001f%\u0005\"\u0000\u0000 $\b\u0000\u0000\u0000"+
		"!\"\u0005\\\u0000\u0000\"$\t\u0000\u0000\u0000# \u0001\u0000\u0000\u0000"+
		"#!\u0001\u0000\u0000\u0000$\'\u0001\u0000\u0000\u0000%#\u0001\u0000\u0000"+
		"\u0000%&\u0001\u0000\u0000\u0000&(\u0001\u0000\u0000\u0000\'%\u0001\u0000"+
		"\u0000\u0000()\u0005\"\u0000\u0000)\u0006\u0001\u0000\u0000\u0000*+\u0005"+
		"i\u0000\u0000+,\u0005f\u0000\u0000,\b\u0001\u0000\u0000\u0000-.\u0005"+
		"e\u0000\u0000./\u0005l\u0000\u0000/0\u0005s\u0000\u000001\u0005e\u0000"+
		"\u00001\n\u0001\u0000\u0000\u000023\u0005p\u0000\u000034\u0005r\u0000"+
		"\u000045\u0005i\u0000\u000056\u0005n\u0000\u000067\u0005t\u0000\u0000"+
		"78\u0005f\u0000\u00008\f\u0001\u0000\u0000\u00009:\u0005r\u0000\u0000"+
		":;\u0005e\u0000\u0000;<\u0005t\u0000\u0000<=\u0005u\u0000\u0000=>\u0005"+
		"r\u0000\u0000>?\u0005n\u0000\u0000?\u000e\u0001\u0000\u0000\u0000@A\u0005"+
		";\u0000\u0000A\u0010\u0001\u0000\u0000\u0000BC\u0005(\u0000\u0000C\u0012"+
		"\u0001\u0000\u0000\u0000DE\u0005)\u0000\u0000E\u0014\u0001\u0000\u0000"+
		"\u0000FG\u0005{\u0000\u0000G\u0016\u0001\u0000\u0000\u0000HI\u0005}\u0000"+
		"\u0000I\u0018\u0001\u0000\u0000\u0000JL\u0007\u0001\u0000\u0000KJ\u0001"+
		"\u0000\u0000\u0000LM\u0001\u0000\u0000\u0000MK\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0006\f\u0000\u0000"+
		"P\u001a\u0001\u0000\u0000\u0000\u0004\u0000#%M\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}