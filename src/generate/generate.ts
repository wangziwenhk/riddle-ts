import {
    ProgramNode,
    SemBaseVisitor
} from "../semantic/nodes";
import {IRBuilder, Module} from "llvm-bindings";
import {Config} from "./config";

export class Generate extends SemBaseVisitor {
    module = new Module("main", Config.globalContext)
    builder = new IRBuilder(module)

    visitProgram(node: ProgramNode) {
        super.visitProgram(node);
    }
}