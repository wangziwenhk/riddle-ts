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
    : expression Semi Endl?
    | Endl
    | Semi
    ;

expression
    : left=expression Dot right=expression                                          #memberAccess
    | statement                                                                     #statementExpr
    | Decimal                                                                       #integer
    | Float                                                                         #float
    | (True | False)                                                                #boolean
    | obj=expression LeftBracket (expression (Comma expression)*)? RightBracket     #callExpr
    | id                                                                            #object
    ;

statement
    : varDecl
    | funcDecl
    | classDecl
    | initList
    | block
    | returnStmt
    ;

varDecl
    : Var name=id Colon type=expression
    | Var name=id Assign value=expression
    | Var name=id Colon type=expression Assign value=expression
    ;

block: LeftCurly expressionEnd* RightCurly;

initList: LeftCurly (expression (Comma expression)*)? RightCurly ;

declArgs
    : (id Colon expression Comma)* (id Colon expression)?
    ;

funcDecl
    : Func name=id LeftBracket declArgs RightBracket (Sub Greater return_type=expression)? body=block
    ;

returnStmt
    : Return (result=expression)?
    ;

classDecl
    : Class name=id body=block
    ;

id: Identifier;