// Generated from c:/Users/Facu/VISUAL STUDIO/ssl-antlr-condicional/ssl-51916/instrucciones.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import instruccionesListener from './instruccionesListener.js';
import instruccionesVisitor from './instruccionesVisitor.js';

const serializedATN = [4,1,13,61,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,1,0,5,0,20,8,0,10,0,12,0,23,9,0,1,1,1,1,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,39,8,2,1,3,1,3,1,3,1,
3,1,3,3,3,46,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,3,6,59,8,6,
1,6,0,1,0,7,0,2,4,6,8,10,12,0,0,58,0,14,1,0,0,0,2,24,1,0,0,0,4,26,1,0,0,
0,6,45,1,0,0,0,8,47,1,0,0,0,10,53,1,0,0,0,12,58,1,0,0,0,14,15,6,0,-1,0,15,
16,3,2,1,0,16,21,1,0,0,0,17,18,10,1,0,0,18,20,3,2,1,0,19,17,1,0,0,0,20,23,
1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,1,1,0,0,0,23,21,1,0,0,0,24,25,3,4,
2,0,25,3,1,0,0,0,26,27,5,4,0,0,27,28,5,9,0,0,28,29,3,12,6,0,29,30,5,10,0,
0,30,31,5,11,0,0,31,32,3,6,3,0,32,38,5,12,0,0,33,34,5,5,0,0,34,35,5,11,0,
0,35,36,3,6,3,0,36,37,5,12,0,0,37,39,1,0,0,0,38,33,1,0,0,0,38,39,1,0,0,0,
39,5,1,0,0,0,40,46,3,8,4,0,41,42,3,8,4,0,42,43,3,6,3,0,43,46,1,0,0,0,44,
46,3,10,5,0,45,40,1,0,0,0,45,41,1,0,0,0,45,44,1,0,0,0,46,7,1,0,0,0,47,48,
5,6,0,0,48,49,5,9,0,0,49,50,5,3,0,0,50,51,5,10,0,0,51,52,5,8,0,0,52,9,1,
0,0,0,53,54,5,7,0,0,54,55,5,8,0,0,55,11,1,0,0,0,56,59,5,1,0,0,57,59,5,2,
0,0,58,56,1,0,0,0,58,57,1,0,0,0,59,13,1,0,0,0,4,21,38,45,58];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class instruccionesParser extends antlr4.Parser {

    static grammarFileName = "instrucciones.g4";
    static literalNames = [ null, "'1'", "'0'", null, "'if'", "'else'", 
                            "'printf'", "'return'", "';'", "'('", "')'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "VERDADERO", "FALSO", "CADENA", "IF", 
                             "ELSE", "SALIDA", "RETURN", "SEMICOLON", "LPAR", 
                             "RPAR", "LKEY", "RKEY", "WS" ];
    static ruleNames = [ "instrucciones", "instruccion", "decision", "sentencia", 
                         "salida", "terminar", "condicion" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = instruccionesParser.ruleNames;
        this.literalNames = instruccionesParser.literalNames;
        this.symbolicNames = instruccionesParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 0:
    	    		return this.instrucciones_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    instrucciones_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };



	instrucciones(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new InstruccionesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 0;
	    this.enterRecursionRule(localctx, 0, instruccionesParser.RULE_instrucciones, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new SingleInstructionContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 15;
	        this.instruccion();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new MultipleInstructionsContext(this, new InstruccionesContext(this, _parentctx, _parentState));
	                this.pushNewRecursionContext(localctx, _startState, instruccionesParser.RULE_instrucciones);
	                this.state = 17;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 18;
	                this.instruccion(); 
	            }
	            this.state = 23;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, instruccionesParser.RULE_instruccion);
	    try {
	        localctx = new DecisionInstructionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.decision();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	decision() {
	    let localctx = new DecisionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, instruccionesParser.RULE_decision);
	    try {
	        localctx = new IfElseDecisionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.match(instruccionesParser.IF);
	        this.state = 27;
	        this.match(instruccionesParser.LPAR);
	        this.state = 28;
	        this.condicion();
	        this.state = 29;
	        this.match(instruccionesParser.RPAR);
	        this.state = 30;
	        this.match(instruccionesParser.LKEY);
	        this.state = 31;
	        this.sentencia();
	        this.state = 32;
	        this.match(instruccionesParser.RKEY);
	        this.state = 38;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        if(la_===1) {
	            this.state = 33;
	            this.match(instruccionesParser.ELSE);
	            this.state = 34;
	            this.match(instruccionesParser.LKEY);
	            this.state = 35;
	            this.sentencia();
	            this.state = 36;
	            this.match(instruccionesParser.RKEY);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, instruccionesParser.RULE_sentencia);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new SingleOutputContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 40;
	            this.salida();
	            break;

	        case 2:
	            localctx = new MultipleOutputsContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.salida();
	            this.state = 42;
	            this.sentencia();
	            break;

	        case 3:
	            localctx = new ReturnStatementContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 44;
	            this.terminar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, instruccionesParser.RULE_salida);
	    try {
	        localctx = new PrintStringContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this.match(instruccionesParser.SALIDA);
	        this.state = 48;
	        this.match(instruccionesParser.LPAR);
	        this.state = 49;
	        this.match(instruccionesParser.CADENA);
	        this.state = 50;
	        this.match(instruccionesParser.RPAR);
	        this.state = 51;
	        this.match(instruccionesParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, instruccionesParser.RULE_terminar);
	    try {
	        localctx = new EndExecutionContext(this, localctx);
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.match(instruccionesParser.RETURN);
	        this.state = 54;
	        this.match(instruccionesParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, instruccionesParser.RULE_condicion);
	    try {
	        this.state = 58;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            localctx = new TrueConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 56;
	            this.match(instruccionesParser.VERDADERO);
	            break;
	        case 2:
	            localctx = new FalseConditionContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 57;
	            this.match(instruccionesParser.FALSO);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

instruccionesParser.EOF = antlr4.Token.EOF;
instruccionesParser.VERDADERO = 1;
instruccionesParser.FALSO = 2;
instruccionesParser.CADENA = 3;
instruccionesParser.IF = 4;
instruccionesParser.ELSE = 5;
instruccionesParser.SALIDA = 6;
instruccionesParser.RETURN = 7;
instruccionesParser.SEMICOLON = 8;
instruccionesParser.LPAR = 9;
instruccionesParser.RPAR = 10;
instruccionesParser.LKEY = 11;
instruccionesParser.RKEY = 12;
instruccionesParser.WS = 13;

instruccionesParser.RULE_instrucciones = 0;
instruccionesParser.RULE_instruccion = 1;
instruccionesParser.RULE_decision = 2;
instruccionesParser.RULE_sentencia = 3;
instruccionesParser.RULE_salida = 4;
instruccionesParser.RULE_terminar = 5;
instruccionesParser.RULE_condicion = 6;

class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_instrucciones;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SingleInstructionContext extends InstruccionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterSingleInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitSingleInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitSingleInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.SingleInstructionContext = SingleInstructionContext;

class MultipleInstructionsContext extends InstruccionesContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	instruccion() {
	    return this.getTypedRuleContext(InstruccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterMultipleInstructions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitMultipleInstructions(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitMultipleInstructions(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.MultipleInstructionsContext = MultipleInstructionsContext;

class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_instruccion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DecisionInstructionContext extends InstruccionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	decision() {
	    return this.getTypedRuleContext(DecisionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterDecisionInstruction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitDecisionInstruction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitDecisionInstruction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.DecisionInstructionContext = DecisionInstructionContext;

class DecisionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_decision;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class IfElseDecisionContext extends DecisionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IF() {
	    return this.getToken(instruccionesParser.IF, 0);
	};

	LPAR() {
	    return this.getToken(instruccionesParser.LPAR, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	RPAR() {
	    return this.getToken(instruccionesParser.RPAR, 0);
	};

	LKEY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(instruccionesParser.LKEY);
	    } else {
	        return this.getToken(instruccionesParser.LKEY, i);
	    }
	};


	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	RKEY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(instruccionesParser.RKEY);
	    } else {
	        return this.getToken(instruccionesParser.RKEY, i);
	    }
	};


	ELSE() {
	    return this.getToken(instruccionesParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterIfElseDecision(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitIfElseDecision(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitIfElseDecision(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.IfElseDecisionContext = IfElseDecisionContext;

class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_sentencia;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SingleOutputContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterSingleOutput(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitSingleOutput(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitSingleOutput(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.SingleOutputContext = SingleOutputContext;

class ReturnStatementContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.ReturnStatementContext = ReturnStatementContext;

class MultipleOutputsContext extends SentenciaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	sentencia() {
	    return this.getTypedRuleContext(SentenciaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterMultipleOutputs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitMultipleOutputs(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitMultipleOutputs(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.MultipleOutputsContext = MultipleOutputsContext;

class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_salida;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PrintStringContext extends SalidaContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	SALIDA() {
	    return this.getToken(instruccionesParser.SALIDA, 0);
	};

	LPAR() {
	    return this.getToken(instruccionesParser.LPAR, 0);
	};

	CADENA() {
	    return this.getToken(instruccionesParser.CADENA, 0);
	};

	RPAR() {
	    return this.getToken(instruccionesParser.RPAR, 0);
	};

	SEMICOLON() {
	    return this.getToken(instruccionesParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterPrintString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitPrintString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitPrintString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.PrintStringContext = PrintStringContext;

class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_terminar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EndExecutionContext extends TerminarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	RETURN() {
	    return this.getToken(instruccionesParser.RETURN, 0);
	};

	SEMICOLON() {
	    return this.getToken(instruccionesParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterEndExecution(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitEndExecution(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitEndExecution(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.EndExecutionContext = EndExecutionContext;

class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = instruccionesParser.RULE_condicion;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TrueConditionContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	VERDADERO() {
	    return this.getToken(instruccionesParser.VERDADERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterTrueCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitTrueCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitTrueCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.TrueConditionContext = TrueConditionContext;

class FalseConditionContext extends CondicionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	FALSO() {
	    return this.getToken(instruccionesParser.FALSO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.enterFalseCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof instruccionesListener ) {
	        listener.exitFalseCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof instruccionesVisitor ) {
	        return visitor.visitFalseCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

instruccionesParser.FalseConditionContext = FalseConditionContext;


instruccionesParser.InstruccionesContext = InstruccionesContext; 
instruccionesParser.InstruccionContext = InstruccionContext; 
instruccionesParser.DecisionContext = DecisionContext; 
instruccionesParser.SentenciaContext = SentenciaContext; 
instruccionesParser.SalidaContext = SalidaContext; 
instruccionesParser.TerminarContext = TerminarContext; 
instruccionesParser.CondicionContext = CondicionContext; 
