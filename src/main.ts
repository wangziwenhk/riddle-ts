import {BuildGraph, BuildGraphNode} from "./config/graph";

const graph = new BuildGraph();
const firstArg = process.argv[2];
graph.addNode(new BuildGraphNode(firstArg))
graph.generateBuildOrder();
graph.executeBuild().then(() => {});