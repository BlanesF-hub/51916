grammar instrucciones;

//gramatica
instrucciones:
            instruccion
            | instrucciones instruccion;
instruccion:
            decision;
decision:
        'if' '(' condicion ')' '{' sentencia '}' ( 'else' '{' sentencia '}' )?
        ;
sentencia:
        salida
        |salida sentencia
        |terminar
        ;
salida:
        'console.log' '(' cadena ')' ';'
        ;
terminar:
        'return' ';'
        ;
condicion:
        '0'
        |'1'
        ;
cadena:
        '/' caracteres '/'
        ;
caracteres: 
        caracter
        |caracteres caracter
        ;
caracter:
        LETRA
        |DIGITO
        |SIMBOLO
        ;

//Lexemas


DIGITO:     [0-9];
LETRA:      [a-zA-Z];
SIMBOLO:    [.,!?:;'];
NEWLINE:    '\r'? '\n';
WS:         [ \t]+ -> skip;