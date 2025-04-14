import * as fs from 'fs';
import antlr4 from 'antlr4';
import RiddleLexer from "./parser/RiddleLexer";
import RiddleParser from "./parser/RiddleParser";
import {SemanticVisitor} from "./semantic/visitor";

const firstArg = process.argv[2];
const text = fs.readFileSync(firstArg,'utf8');

const chars = new antlr4.CharStream(text);
const lexer = new RiddleLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new RiddleParser(tokens);

const tree = parser.program();

const visitor = new SemanticVisitor();
visitor.visit(tree);
console.log(visitor.errors);