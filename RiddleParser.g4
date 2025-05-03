parser grammar RiddleParser;

options {
    tokenVocab=RiddleLexer;
}

@Header{}

@parserFile::members {}


program
    : expressionEnd* EOF
    ;

expressionEnd
    : expression Semi Endl?
    | Endl
    | Semi
    ;

expression
    : statement                                                                         #statementExpr
    | left=expression Colon Colon right=expression                                      #scopeOp
    | left=expression Dot right=expression                                              #memberAccess
    | obj=expression LeftBracket (expression (Comma expression)*)? RightBracket         #callExpr
    | obj=expression Star                                                               #pointerTo
    | Star obj=expression                                                               #loadExpr
    | op=(Not | Add | Sub | Tilde) value=expression                                     #unaryOp
    | left=expression op=(Star | Div | Mod) right=expression                            #mulOp
    | left=expression op=(Add | Sub) right=expression                                   #addOp
    | left=expression op=(LeftShift | RightShift) right=expression                      #shiftOp
    | left=expression op=(Less | LessEqual | Greater | GreaterEqual) right=expression   #relOp
    | left=expression op=(Equal | NotEqual) right=expression                            #eqOp
    | left=expression And right=expression                                              #bitAnd
    | left=expression Xor right=expression                                              #bitXor
    | left=expression Or right=expression                                               #bitOr
    | left=expression And And right=expression                                          #logicAnd
    | left=expression Or Or right=expression                                            #logicOr
    | left=expression op=(Assign | AddAssign | SubAssign | MulAssign 
        | DivAssign | ModAssign | LeftShiftAssign | RightShiftAssign 
        | AndAssign | XorAssign | OrAssign) right=expression                            #compoundAssignOp
    | Decimal                                                                           #integer
    | Float                                                                             #float
    | (True | False)                                                                    #boolean
    | id                                                                                #object
    | LeftBracket value=expression RightBracket                                         #bracketExpr
    ;

statement
    : varDecl
    | funcDecl
    | classDecl
    | initList
    | block
    | returnStmt
    | packStmt
    ;

packStmt
    : Package id (Dot id)*
    ;

varDecl
    : Var name=id Colon type=expression Assign value=expression
    | Var name=id Assign value=expression
    | Var name=id Colon type=expression
    ;

block
    : LeftCurly expressionEnd* RightCurly
    ;

initList
    : LeftCurly (expression (Comma expression)*)? RightCurly
    ;

declArgs
    : (id Colon expression Comma)* (id Colon expression)?
    ;

funcDecl
    : Func name=id LeftBracket declArgs RightBracket 
      (Sub Greater return_type=expression)? body=block
    ;

returnStmt
    : Return (result=expression)?
    ;

classDecl
    : Class name=id body=block
    ;

id
    : Identifier
    ;