grammar instrucciones;

// Reglas de análisis sintáctico
instrucciones
    : instruccion                         #singleInstruction
    | instrucciones instruccion           #multipleInstructions
    ;

instruccion
    : decision                            #decisionInstruction
    ;

decision
    : IF LPAR condicion RPAR LKEY sentencia RKEY (ELSE LKEY sentencia RKEY)?    #ifElseDecision
    ;

sentencia
    : salida                              #singleOutput
    | salida sentencia                    #multipleOutputs
    | terminar                            #returnStatement
    ;

salida
    : SALIDA LPAR CADENA RPAR SEMICOLON   #printString
    ;

terminar
    : RETURN SEMICOLON                    #endExecution
    ;

condicion
    : VERDADERO                           #trueCondition
    | FALSO                               #falseCondition
    ;

// Reglas léxicas
VERDADERO  : '1';
FALSO      : '0';
CADENA     : '"' ( ~["\\\r\n] | '\\' . )* '"' ; // Cadenas con escapado
IF         : 'if';
ELSE       : 'else';
SALIDA     : 'printf';
RETURN     : 'return';

SEMICOLON  : ';';
LPAR       : '(';
RPAR       : ')';
LKEY       : '{';
RKEY       : '}';

WS         : [ \t\r\n]+ -> skip;
