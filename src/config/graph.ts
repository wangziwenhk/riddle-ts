import * as fs from "node:fs";
import antlr4 from "antlr4";
import RiddleLexer from "../parser/RiddleLexer";
import RiddleParser, {ProgramContext} from "../parser/RiddleParser";
import {GrammarVisitor} from "../grammar/visitor";
import {SemanticAnalysis} from "../semantic/analysis";
import {Generate} from "../generate/generate";
import {ProgramNode} from "../semantic/nodes";
import {packageVisitor} from "../grammar/packs";

/**
 * 表示构建图中的一个节点。
 */
export class BuildGraphNode {
    id: string;
    sourcePath?: string;
    program: ProgramNode;
    tree: ProgramContext;

    async execute(): Promise<void> {
        const gram_visitor = new GrammarVisitor();
        this.program = gram_visitor.visit(this.tree);
        if (gram_visitor.errors.length > 0) {
            console.log(gram_visitor.errors);
        }

        const sem_visitor = new SemanticAnalysis();
        sem_visitor.visit(this.program);

        const gen = new Generate(this.id);
        gen.visit(this.program);
        console.log(gen.module.print());
    }

    constructor(sourcePath: string) {
        this.sourcePath = sourcePath;
        this.program = new ProgramNode();

        if (!this.sourcePath) {
            throw new Error(`Source path is not defined for node '${sourcePath}'`);
        }

        const text = fs.readFileSync(this.sourcePath, 'utf8');
        const chars = new antlr4.CharStream(text);
        const lexer = new RiddleLexer(chars);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new RiddleParser(tokens);
        this.tree = parser.program();

        this.id = packageVisitor.visit(this.tree);
    }
}


/**
 * 管理构建图，包括节点及其依赖关系。
 */
export class BuildGraph {
    private nodes: Map<string, BuildGraphNode>;
    private dependencies: Map<string, Set<string>>;

    constructor() {
        this.nodes = new Map();
        this.dependencies = new Map();
    }

    /**
     * 向构建图中添加一个节点。
     * @param node 要添加的节点，可以包含可选的源文件路径 `sourcePath`。
     */
    addNode(node: BuildGraphNode): void {
        this.nodes.set(node.id, node);
        if (!this.dependencies.has(node.id)) {
            this.dependencies.set(node.id, new Set());
        }
    }

    /**
     * 在构建图中添加两个节点之间的依赖关系。
     * @param from 依赖的节点ID。
     * @param to 被依赖的节点ID。
     */
    addDependency(from: string, to: string): void {
        if (!this.nodes.has(from) || !this.nodes.has(to)) {
            throw new Error("Both nodes must exist in the graph");
        }
        this.dependencies.get(to)?.add(from);
    }

    /**
     * 使用拓扑排序生成构建顺序。
     * @returns 按执行顺序排列的节点ID列表。
     */
    generateBuildOrder(): string[] {
        const result: string[] = [];
        const visited: Set<string> = new Set();
        const visiting: Set<string> = new Set();

        const visit = (id: string) => {
            if (visiting.has(id)) {
                throw new Error(`Circular dependency detected involving node '${id}'`);
            }
            if (!visited.has(id)) {
                visiting.add(id);
                this.dependencies.get(id)?.forEach(dependency => visit(dependency));
                visiting.delete(id);
                visited.add(id);
                result.push(id);
            }
        };

        this.nodes.forEach((_, id) => visit(id));
        return result.reverse();
    }

    /**
     * 执行构建流程。
     * 根据生成的构建顺序依次执行每个节点的操作。
     * 如果某个节点执行过程中发生错误，会捕获异常并输出错误信息，但不会中断整个流程。
     *
     * @return {Promise<void>} 返回一个Promise，在所有节点执行完成后解决，不返回任何数据。
     */
    async executeBuild(): Promise<void> {
        const buildOrder = this.generateBuildOrder();
        for (const nodeId of buildOrder) {
            const node = this.nodes.get(nodeId);
            if (node) {
                try {
                    await node.execute();
                } catch (error) {
                    console.error(`Error executing node '${nodeId}':`, error);
                }
            }
        }
    }
}