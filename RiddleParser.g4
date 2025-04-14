parser grammar RiddleParser;

options {
    tokenVocab=RiddleLexer;
}

@Header{

}

@parserFile::members {
}



program
    : statement*
    ;

statement
    : Decimal                                                       #integer
    | Float                                                         #float
    | (True | False)                                                #boolean
    | id                                                            #object
    | Var name=id (Colon type=statement)? (Assign value=statement)? #varDecl
    | Func name=id                                                  #funcDecl
    ;

id: Identifier;