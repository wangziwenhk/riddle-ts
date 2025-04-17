parser grammar RiddleParser;

options {
    tokenVocab=RiddleLexer;
}

@Header{

}

@parserFile::members {
}



program
    : expressionEnd* EOF
    ;

expressionEnd
    : expression Endl?
    | Endl
    ;

expression
    : Decimal                                                               #integer
    | Float                                                                 #float
    | (True | False)                                                        #boolean
    | id                                                                    #object
    | statement                                                             #statementExpr
    ;

statement
    : varDecl
    | funcDecl
    | block
    ;

varDecl
    : Var name=id Colon type=expression
    | Var name=id Assign value=expression
    | Var name=id Colon type=expression Assign value=expression
    ;

block: LeftCurly expressionEnd* RightCurly;

declArgs
    : (id Colon expression Comma)* (id Colon expression)?
    ;

funcDecl
    : Func name=id LeftBracket declArgs RightBracket body=block
    ;

id: Identifier;