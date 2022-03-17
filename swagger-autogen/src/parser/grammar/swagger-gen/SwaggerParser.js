// Generated from /home/alex/Project/NodeJs/swagger-autogen-doc/swagger-autogen/src/parser/grammar/SwaggerParser.g4 by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SwaggerParserListener from './SwaggerParserListener.js';
import SwaggerParserVisitor from './SwaggerParserVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\rI\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0003\u0002\u0007\u0002\u0010\n\u0002\f\u0002\u000e\u0002\u0013\u000b",
    "\u0002\u0003\u0003\u0007\u0003\u0016\n\u0003\f\u0003\u000e\u0003\u0019",
    "\u000b\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u001d\n\u0003\f\u0003",
    "\u000e\u0003 \u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004%\n\u0004\f\u0004\u000e\u0004(\u000b\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004",
    "1\n\u0004\u0003\u0004\u0005\u00044\n\u0004\u0003\u0005\u0005\u00057",
    "\n\u0005\u0003\u0005\u0003\u0005\u0005\u0005;\n\u0005\u0007\u0005=\n",
    "\u0005\f\u0005\u000e\u0005@\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006E\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0002",
    "\u0002\b\u0002\u0004\u0006\b\n\f\u0002\u0003\u0004\u0002\u0003\u0003",
    "\u0005\u0005\u0002L\u0002\u0011\u0003\u0002\u0002\u0002\u0004\u0017",
    "\u0003\u0002\u0002\u0002\u0006!\u0003\u0002\u0002\u0002\b6\u0003\u0002",
    "\u0002\u0002\nA\u0003\u0002\u0002\u0002\fF\u0003\u0002\u0002\u0002\u000e",
    "\u0010\u0005\u0004\u0003\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010",
    "\u0013\u0003\u0002\u0002\u0002\u0011\u000f\u0003\u0002\u0002\u0002\u0011",
    "\u0012\u0003\u0002\u0002\u0002\u0012\u0003\u0003\u0002\u0002\u0002\u0013",
    "\u0011\u0003\u0002\u0002\u0002\u0014\u0016\u0007\u0003\u0002\u0002\u0015",
    "\u0014\u0003\u0002\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017",
    "\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018",
    "\u001a\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u001a",
    "\u001e\u0005\u0006\u0004\u0002\u001b\u001d\u0007\u0003\u0002\u0002\u001c",
    "\u001b\u0003\u0002\u0002\u0002\u001d \u0003\u0002\u0002\u0002\u001e",
    "\u001c\u0003\u0002\u0002\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f",
    "\u0005\u0003\u0002\u0002\u0002 \u001e\u0003\u0002\u0002\u0002!\"\u0007",
    "\u0004\u0002\u0002\"&\u0007\n\u0002\u0002#%\u0005\n\u0006\u0002$#\u0003",
    "\u0002\u0002\u0002%(\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002\u0002",
    "&\'\u0003\u0002\u0002\u0002\'3\u0003\u0002\u0002\u0002(&\u0003\u0002",
    "\u0002\u0002)0\u0007\u0006\u0002\u0002*+\u0005\b\u0005\u0002+,\u0007",
    "\u0004\u0002\u0002,-\u0007\b\u0002\u0002-.\u0007\n\u0002\u0002./\u0007",
    "\u0006\u0002\u0002/1\u0003\u0002\u0002\u00020*\u0003\u0002\u0002\u0002",
    "01\u0003\u0002\u0002\u000214\u0003\u0002\u0002\u000224\u0007\u0007\u0002",
    "\u00023)\u0003\u0002\u0002\u000232\u0003\u0002\u0002\u00024\u0007\u0003",
    "\u0002\u0002\u000257\u0005\f\u0007\u000265\u0003\u0002\u0002\u00026",
    "7\u0003\u0002\u0002\u00027>\u0003\u0002\u0002\u00028:\u0005\u0006\u0004",
    "\u00029;\u0005\f\u0007\u0002:9\u0003\u0002\u0002\u0002:;\u0003\u0002",
    "\u0002\u0002;=\u0003\u0002\u0002\u0002<8\u0003\u0002\u0002\u0002=@\u0003",
    "\u0002\u0002\u0002><\u0003\u0002\u0002\u0002>?\u0003\u0002\u0002\u0002",
    "?\t\u0003\u0002\u0002\u0002@>\u0003\u0002\u0002\u0002AD\u0007\n\u0002",
    "\u0002BC\u0007\t\u0002\u0002CE\u0007\f\u0002\u0002DB\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002E\u000b\u0003\u0002\u0002\u0002FG\t",
    "\u0002\u0002\u0002G\r\u0003\u0002\u0002\u0002\f\u0011\u0017\u001e&0",
    "36:>D"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class SwaggerParser extends antlr4.Parser {

    static grammarFileName = "SwaggerParser.g4";
    static literalNames = [ null, null, "'<'", null, "'>'", "'/>'", "'/'", 
                            "'='" ];
    static symbolicNames = [ null, "SEA_WS", "TAG_OPEN", "SWAGGER_TEXT", 
                             "TAG_CLOSE", "TAG_SLASH_CLOSE", "TAG_SLASH", 
                             "TAG_EQUALS", "TAG_NAME", "TAG_WHITESPACE", 
                             "ATTVALUE_VALUE", "ATTRIBUTE" ];
    static ruleNames = [ "swaggerDocument", "swaggerElements", "swaggerElement", 
                         "swaggerContent", "swaggerAttribute", "swaggerChardata" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SwaggerParser.ruleNames;
        this.literalNames = SwaggerParser.literalNames;
        this.symbolicNames = SwaggerParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	swaggerDocument() {
	    let localctx = new SwaggerDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SwaggerParser.RULE_swaggerDocument);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SwaggerParser.SEA_WS || _la===SwaggerParser.TAG_OPEN) {
	            this.state = 12;
	            this.swaggerElements();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
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



	swaggerElements() {
	    let localctx = new SwaggerElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SwaggerParser.RULE_swaggerElements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SwaggerParser.SEA_WS) {
	            this.state = 18;
	            this.match(SwaggerParser.SEA_WS);
	            this.state = 23;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 24;
	        this.swaggerElement();
	        this.state = 28;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 25;
	                this.match(SwaggerParser.SEA_WS); 
	            }
	            this.state = 30;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
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



	swaggerElement() {
	    let localctx = new SwaggerElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SwaggerParser.RULE_swaggerElement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.match(SwaggerParser.TAG_OPEN);
	        this.state = 32;
	        this.match(SwaggerParser.TAG_NAME);
	        this.state = 36;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SwaggerParser.TAG_NAME) {
	            this.state = 33;
	            this.swaggerAttribute();
	            this.state = 38;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 49;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SwaggerParser.TAG_CLOSE:
	            this.state = 39;
	            this.match(SwaggerParser.TAG_CLOSE);
	            this.state = 46;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 40;
	                this.swaggerContent();
	                this.state = 41;
	                this.match(SwaggerParser.TAG_OPEN);
	                this.state = 42;
	                this.match(SwaggerParser.TAG_SLASH);
	                this.state = 43;
	                this.match(SwaggerParser.TAG_NAME);
	                this.state = 44;
	                this.match(SwaggerParser.TAG_CLOSE);

	            }
	            break;
	        case SwaggerParser.TAG_SLASH_CLOSE:
	            this.state = 48;
	            this.match(SwaggerParser.TAG_SLASH_CLOSE);
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



	swaggerContent() {
	    let localctx = new SwaggerContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SwaggerParser.RULE_swaggerContent);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwaggerParser.SEA_WS || _la===SwaggerParser.SWAGGER_TEXT) {
	            this.state = 51;
	            this.swaggerChardata();
	        }

	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 54;
	                this.swaggerElement();
	                this.state = 56;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===SwaggerParser.SEA_WS || _la===SwaggerParser.SWAGGER_TEXT) {
	                    this.state = 55;
	                    this.swaggerChardata();
	                }
	         
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	swaggerAttribute() {
	    let localctx = new SwaggerAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SwaggerParser.RULE_swaggerAttribute);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 63;
	        this.match(SwaggerParser.TAG_NAME);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SwaggerParser.TAG_EQUALS) {
	            this.state = 64;
	            this.match(SwaggerParser.TAG_EQUALS);
	            this.state = 65;
	            this.match(SwaggerParser.ATTVALUE_VALUE);
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



	swaggerChardata() {
	    let localctx = new SwaggerChardataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SwaggerParser.RULE_swaggerChardata);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        _la = this._input.LA(1);
	        if(!(_la===SwaggerParser.SEA_WS || _la===SwaggerParser.SWAGGER_TEXT)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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

SwaggerParser.EOF = antlr4.Token.EOF;
SwaggerParser.SEA_WS = 1;
SwaggerParser.TAG_OPEN = 2;
SwaggerParser.SWAGGER_TEXT = 3;
SwaggerParser.TAG_CLOSE = 4;
SwaggerParser.TAG_SLASH_CLOSE = 5;
SwaggerParser.TAG_SLASH = 6;
SwaggerParser.TAG_EQUALS = 7;
SwaggerParser.TAG_NAME = 8;
SwaggerParser.TAG_WHITESPACE = 9;
SwaggerParser.ATTVALUE_VALUE = 10;
SwaggerParser.ATTRIBUTE = 11;

SwaggerParser.RULE_swaggerDocument = 0;
SwaggerParser.RULE_swaggerElements = 1;
SwaggerParser.RULE_swaggerElement = 2;
SwaggerParser.RULE_swaggerContent = 3;
SwaggerParser.RULE_swaggerAttribute = 4;
SwaggerParser.RULE_swaggerChardata = 5;

class SwaggerDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerDocument;
    }

	swaggerElements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwaggerElementsContext);
	    } else {
	        return this.getTypedRuleContext(SwaggerElementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerDocument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerDocument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwaggerElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerElements;
    }

	swaggerElement() {
	    return this.getTypedRuleContext(SwaggerElementContext,0);
	};

	SEA_WS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwaggerParser.SEA_WS);
	    } else {
	        return this.getToken(SwaggerParser.SEA_WS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerElements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerElements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwaggerElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerElement;
    }

	TAG_OPEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwaggerParser.TAG_OPEN);
	    } else {
	        return this.getToken(SwaggerParser.TAG_OPEN, i);
	    }
	};


	TAG_NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwaggerParser.TAG_NAME);
	    } else {
	        return this.getToken(SwaggerParser.TAG_NAME, i);
	    }
	};


	TAG_CLOSE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SwaggerParser.TAG_CLOSE);
	    } else {
	        return this.getToken(SwaggerParser.TAG_CLOSE, i);
	    }
	};


	TAG_SLASH_CLOSE() {
	    return this.getToken(SwaggerParser.TAG_SLASH_CLOSE, 0);
	};

	swaggerAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwaggerAttributeContext);
	    } else {
	        return this.getTypedRuleContext(SwaggerAttributeContext,i);
	    }
	};

	swaggerContent() {
	    return this.getTypedRuleContext(SwaggerContentContext,0);
	};

	TAG_SLASH() {
	    return this.getToken(SwaggerParser.TAG_SLASH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwaggerContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerContent;
    }

	swaggerChardata = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwaggerChardataContext);
	    } else {
	        return this.getTypedRuleContext(SwaggerChardataContext,i);
	    }
	};

	swaggerElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SwaggerElementContext);
	    } else {
	        return this.getTypedRuleContext(SwaggerElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerContent(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerContent(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwaggerAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerAttribute;
    }

	TAG_NAME() {
	    return this.getToken(SwaggerParser.TAG_NAME, 0);
	};

	TAG_EQUALS() {
	    return this.getToken(SwaggerParser.TAG_EQUALS, 0);
	};

	ATTVALUE_VALUE() {
	    return this.getToken(SwaggerParser.ATTVALUE_VALUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerAttribute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerAttribute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SwaggerChardataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SwaggerParser.RULE_swaggerChardata;
    }

	SWAGGER_TEXT() {
	    return this.getToken(SwaggerParser.SWAGGER_TEXT, 0);
	};

	SEA_WS() {
	    return this.getToken(SwaggerParser.SEA_WS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.enterSwaggerChardata(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SwaggerParserListener ) {
	        listener.exitSwaggerChardata(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SwaggerParserVisitor ) {
	        return visitor.visitSwaggerChardata(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SwaggerParser.SwaggerDocumentContext = SwaggerDocumentContext; 
SwaggerParser.SwaggerElementsContext = SwaggerElementsContext; 
SwaggerParser.SwaggerElementContext = SwaggerElementContext; 
SwaggerParser.SwaggerContentContext = SwaggerContentContext; 
SwaggerParser.SwaggerAttributeContext = SwaggerAttributeContext; 
SwaggerParser.SwaggerChardataContext = SwaggerChardataContext; 
