import * as fs from 'fs';
import antlr4 from 'antlr4';
import RiddleLexer from "./parser/RiddleLexer";
import RiddleParser from "./parser/RiddleParser";
import {GrammarVisitor} from "./grammar/visitor";
import {SemanticAnalysis} from "./semantic/analysis";
import {Generate} from "./generate/generate";

const firstArg = process.argv[2];
const text = fs.readFileSync(firstArg, 'utf8');

const chars = new antlr4.CharStream(text);
const lexer = new RiddleLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
export const parser = new RiddleParser(tokens);

const tree = parser.program();

const gram_visitor = new GrammarVisitor();
const program = gram_visitor.visit(tree);
if (gram_visitor.errors.length > 0) {
    console.log(gram_visitor.errors);
    // gram_visitor.errors.forEach((error) => {
    //     throw error;
    // })
}
const sem_visitor = new SemanticAnalysis()
sem_visitor.visit(program)
const gen = new Generate()
gen.visit(program)
console.log(gen.module.print())