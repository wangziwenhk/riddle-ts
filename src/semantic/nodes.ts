import {ClassTypeInfo, TypeInfo} from "./typeInfo";
import llvm from "@wangziwenhk/llvm-bindings";
import {SemClass, SemFunction, SemObject, SemValue, SemVariable} from "./objects";


export abstract class SemBaseVisitor {
    visit(node: SemNode) {
        return node.accept(this)
    }

    visitProgram(node: ProgramNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
        return;
    }

    visitConstant(_node: ConstantNode) {
    }

    visitBlock(node: BlockNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
    }

    visitFuncDecl(node: FuncDeclNode) {
        this.visit(node.return_type);
        this.visit(node.body);
    }

    visitVarDecl(node: VarDeclNode) {
        if (node.type) {
            this.visit(node.type);
        }
        if (node.value) {
            this.visit(node.value);
        }
    }

    visitDeclArg(node: DeclArgNode) {
        this.visit(node.type)
    }

    visitObject(_node: ObjectNode) {
    }

    visitReturn(node: ReturnNode) {
        if (node.value) {
            this.visit(node.value);
        }
    }

    visitCall(node: CallNode) {
        this.visit(node.value);
        node.params.forEach(param => {
            this.visit(param);
        })
    }

    visitInitList(node: InitListNode) {
        node.children.forEach(child => {
            this.visit(child);
        })
    }

    visitClassDecl(node: ClassDeclNode) {
        node.body.forEach(child => {
            this.visit(child);
        });
    }

    visitMemberAccess(node: MemberAccessNode) {
        this.visit(node.left);
    }

    visitBinaryOp(node: BinaryOpNode) {
        this.visit(node.left);
        this.visit(node.right);
    }

    visitUnaryOp(node: UnaryOpNode) {
        this.visit(node.operand);
    }

    visitComparisonOp(node: CompoundOpNode) {
        this.visit(node.left);
        this.visit(node.right);
    }

    visitScopeAccess(node: ScopeAccessNode) {
        this.visit(node.left);
    }

    visitPointerTo(node: PointerToNode) {
        return this.visit(node.value);
    }

    visitLoad(node: LoadExprNode) {
        this.visit(node.value);
    }
}

/**
 * SemNode 是语义分析过程中使用的抽象节点类，表示语法树中的一个语义节点。
 * 每个语义节点可以包含与其关联的语义对象以及在源代码中的行号信息。
 */
export abstract class SemNode {
    obj?: SemObject;
    line!: number;

    abstract accept(visitor: SemBaseVisitor): any;
}

/**
 * 表示程序的根节点，继承自语义节点 SemNode。
 * 该类用于构建抽象语法树 (AST) 的顶层结构，包含子节点列表。
 * ProgramNode 的主要职责是作为语义分析和遍历的入口点。
 *
 * 子节点列表存储了当前程序节点下的所有语义节点，按顺序表示程序的结构。
 */
export class ProgramNode extends SemNode {
    children: SemNode[] = [];

    constructor() {
        super();
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitProgram(this);
    }
}

/**
 * 表达式节点类，是语义节点的抽象子类，用于表示表达式结构中的一个节点。
 * 此类为所有表达式节点提供基础实现，并通过继承扩展具体功能。
 */
export abstract class ExprNode extends SemNode {
    protected constructor() {
        super();
    }
}

/**
 * 表示一个空节点的类，继承自表达式节点类 ExprNode。
 * 此类用于表示在语法树中不存在或无效的节点。
 *
 * NoneNode 类的主要目的是在语义分析或其他处理过程中充当占位符，
 * 用于处理那些无法被解析或不应被接受的场景。
 *
 * 调用 accept 方法时会抛出错误，因为此类不支持访问者模式的处理逻辑。
 */
export class NoneNode extends ExprNode {
    constructor() {super();}

    accept(_visitor: SemBaseVisitor): any {
        throw new Error("This class cannot be accepted")
    }
}

export abstract class OperatorNode extends ExprNode {
    abstract operator: string;
}

export class BinaryOpNode extends OperatorNode {
    operator: string;
    left: ExprNode;
    right: ExprNode;
    obj?: SemValue;
    func?: ((left: llvm.Value, right: llvm.Value, builder: llvm.IRBuilder) => llvm.Value);

    constructor(operator: string, left: ExprNode, right: ExprNode) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitBinaryOp(this);
    }
}

export class UnaryOpNode extends OperatorNode {
    operator: string;
    operand: ExprNode;

    constructor(operator: string, operand: ExprNode) {
        super();
        this.operator = operator;
        this.operand = operand;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitUnaryOp(this);
    }
}

export class CompoundOpNode extends OperatorNode {
    operator: string;
    left: ExprNode;
    right: ExprNode;

    constructor(operator: string, left: ExprNode, right: ExprNode) {
        super();
        this.operator = operator;
        this.left = left;
        this.right = right;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitComparisonOp(this);
    }
}

/**
 * 表示常量节点的类
 * 该类用于表示在抽象语法树中作为常量值的节点。
 * 每个 ConstantNode 对象包含一个具体的值和其对应的数据类型信息。
 */
export class ConstantNode extends ExprNode {
    value: any;
    type: TypeInfo;

    constructor(value: any, type: TypeInfo) {
        super();
        this.value = value;
        this.type = type;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitConstant(this);
    }
}

/**
 * 表示一个块节点，用于包含一组表达式节点。
 * 块节点作为表达式节点的容器，能够将多个子表达式组织在一起。
 */
export class BlockNode extends ExprNode {
    children: ExprNode[];

    constructor(children: ExprNode[]) {
        super();
        this.children = children;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitBlock(this);
    }
}

/**
 * 表示声明参数的节点，继承自语义节点。
 * 该类用于定义函数或方法参数的声明结构，包含参数名称、类型以及可选的关联对象。
 */
export class DeclArgNode extends SemNode {
    name: string;
    type: ExprNode;
    obj?: SemVariable;

    constructor(name: string, type: ExprNode) {
        super();
        this.name = name;
        this.type = type;
    }

    accept(visitor: SemBaseVisitor): any {
        return visitor.visitDeclArg(this);
    }
}

/**
 * DeclNode 是一个抽象类，继承自 ExprNode，用于表示声明节点的基类。
 * 该类的主要目的是为各种声明类型的节点提供通用的结构和行为。
 * 每个 DeclNode 实例都包含一个名为 name 的属性，用于标识声明的名称。
 * 子类需要实现具体的行为以完成特定类型的声明逻辑。
 */
export abstract class DeclNode extends ExprNode {
    name!: string;
}

/**
 * 表示函数声明的节点，继承自 DeclNode。
 * 函数声明节点包含函数名称、返回类型、参数列表、函数体以及分配列表等信息。
 */
export class FuncDeclNode extends DeclNode {
    name: string;
    body: BlockNode;
    return_type: ExprNode;
    alloc_list: Array<AllocNode> = []
    params: DeclArgNode[];
    hasClass: boolean = false;

    obj?: SemFunction;

    constructor(name: string, return_type: ExprNode, params: DeclArgNode[], body: BlockNode) {
        super();
        this.name = name;
        this.body = body;
        this.return_type = return_type;
        this.params = params;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitFuncDecl(this);
    }
}

/**
 * 表示分配节点的类，用于跟踪类型信息和相关的 LLVM 值。
 * AllocNode 用于在编译过程中管理内存分配相关的信息。
 * 每个 AllocNode 实例包含一个类型信息对象以及一个可选的 LLVM 值。
 * 类型信息描述了分配节点的数据类型，而 LLVM 值表示底层的分配指令或值。
 */
export class AllocNode {
    type: TypeInfo;
    alloc?: llvm.Value;

    constructor(type: TypeInfo) {
        this.type = type;
    }
}

/**
 * 表示变量声明节点的类，继承自 DeclNode。
 * 该类用于描述在语义分析或抽象语法树中变量声明的相关信息。
 *
 * 变量声明节点包含变量的名称、类型表达式（可选）、初始值表达式（可选）以及是否为全局变量的标志。
 * 它还提供了一个方法以支持访问者模式，允许外部访问者对象处理变量声明节点。
 */
export class VarDeclNode extends DeclNode {
    name: string;
    type?: ExprNode;
    value?: ExprNode;
    obj?: SemVariable;
    isGlobal: boolean = true;

    constructor(name: string, type: ExprNode | undefined, value: ExprNode | undefined) {
        super();
        this.name = name;
        this.type = type;
        this.value = value;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitVarDecl(this)
    }
}

/**
 * 表示类声明的节点，继承自 DeclNode。
 * 此类用于描述在语义分析阶段中类声明的结构和行为。
 * 它包含类的名称、类体中的声明节点列表以及可选的语义类对象。
 */
export class ClassDeclNode extends DeclNode {
    name: string;
    body: Array<DeclNode>;
    obj?: SemClass;

    constructor(name: string, body: DeclNode[] = []) {
        super();
        this.name = name;
        this.body = body;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitClassDecl(this);
    }
}

/**
 * 表示一个对象节点的类，继承自表达式节点 ExprNode。
 * 此类用于表示在语义分析或语法树中的对象引用节点。
 * 对象节点通过名称标识特定的对象，并提供接受访问者模式的方法。
 */
export class ObjectNode extends ExprNode {
    name: string;

    constructor(name: string) {
        super();
        this.name = name;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitObject(this)
    }
}

/**
 * 表示一个返回语句的节点，用于在抽象语法树中定义返回操作。
 * 返回节点可以选择性地包含一个表达式节点作为返回值。
 * 如果没有提供返回值，则表示该返回语句不返回任何内容。
 * 该类主要用于语言解析和语义分析过程中对返回语句的处理。
 */
export class ReturnNode extends ExprNode {
    value?: ExprNode;
    obj: undefined;

    constructor(value?: ExprNode) {
        super();
        this.value = value;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitReturn(this);
    }
}

/**
 * 表示一个函数调用的节点，继承自表达式节点 ExprNode。
 * 该类用于描述在语义分析或抽象语法树中函数调用的结构。
 *
 * CallNode 包含一个表示被调用对象的表达式节点、一组参数表达式节点，
 * 以及一个可选的语义函数对象，用于关联具体的语义信息。
 */
export class CallNode extends ExprNode {
    value: ExprNode;
    params: ExprNode[];
    obj?: SemFunction;

    constructor(value: ExprNode, params: ExprNode[]) {
        super();
        this.value = value;
        this.params = params;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitCall(this);
    }
}

/**
 * 表示一个初始化列表节点的类，继承自表达式节点。
 * 该类用于在语法树中表示初始化列表，通常用于数组或结构体的初始化操作。
 * 初始化列表由一组子表达式组成，这些子表达式作为列表中的元素。
 */
export class InitListNode extends ExprNode {
    children: ExprNode[];

    constructor(children: ExprNode[] = []) {
        super();
        this.children = children;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitInitList(this);
    }
}

/**
 * 表示成员访问表达式的节点。
 * 该类用于描述一个表达式中通过成员访问操作符（如点运算符）访问对象属性或方法的语法结构。
 * 成员访问节点由左侧表达式和右侧成员名称组成，用于在语义分析和代码生成阶段处理相关逻辑。
 *
 * 左侧表达式可以是任意合法的表达式节点，右侧成员名称是一个字符串，表示被访问的属性或方法名。
 */
export class MemberAccessNode extends ExprNode {
    left: ExprNode;
    right: string;
    obj: undefined;
    left_type?: ClassTypeInfo;
    right_type?: TypeInfo;

    constructor(left: ExprNode, right: string) {
        super();
        this.left = left;
        this.right = right;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitMemberAccess(this);
    }
}

/**
 * 表示作用域访问节点的类，用于描述在表达式中对某个作用域成员的访问操作。
 * 该节点包含左侧表达式和右侧标识符，分别表示作用域对象和被访问的成员名称。
 * 在语义分析过程中，可以通过访问者模式处理此节点以解析其类型或执行其他操作。
 * 左侧表达式的类型信息和右侧成员的类型信息可以进一步用于静态检查和代码生成。
 */
export class ScopeAccessNode extends ExprNode {
    left: ExprNode;
    right: string;
    left_type?: ClassTypeInfo;
    right_type?: TypeInfo;

    constructor(left: ExprNode, right: string) {
        super();
        this.left = left;
        this.right = right;
    }

    accept(visitor: SemBaseVisitor): any {
        return visitor.visitScopeAccess(this);
    }
}

export class PointerToNode extends ExprNode {
    value: ExprNode;

    constructor(value: ExprNode) {
        super();
        this.value = value;
    }

    accept(visitor: SemBaseVisitor): any {
        return visitor.visitPointerTo(this);
    }
}

export class LoadExprNode extends ExprNode {
    value: ExprNode;
    obj?: SemValue;

    constructor(value: ExprNode) {
        super();
        this.value = value;
    }

    accept(visitor: SemBaseVisitor) {
        return visitor.visitLoad(this);
    }
}