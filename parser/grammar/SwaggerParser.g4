parser grammar SwaggerParser;

options { tokenVocab=SwaggerLexer; }

swaggerDocument
    : swaggerElements*
    ;


swaggerElements
    : SEA_WS* swaggerElement SEA_WS*
    ;

swaggerElement
    : TAG_OPEN TAG_NAME swaggerAttribute*
      (TAG_CLOSE (swaggerContent TAG_OPEN TAG_SLASH TAG_NAME TAG_CLOSE)? | TAG_SLASH_CLOSE)
    ;

swaggerContent
    : swaggerChardata? (swaggerElement swaggerChardata?)*
    ;

swaggerAttribute
    : TAG_NAME (TAG_EQUALS ATTVALUE_VALUE)?
    ;

swaggerChardata
    : SWAGGER_TEXT
    | SEA_WS
    ;
