import { type } from "os";

// Объявление типов для узлов
// Уровень типов
type TreeNode = {value: string};
type LeafNode = TreeNode & {isLeaf: true};
type InnerNode = TreeNode & {children: [TreeNode] | [TreeNode, TreeNode]};

// Уровень значений
let a: TreeNode = {value: 'a'};
let b: LeafNode = {value: 'b', isLeaf: true};
let c: InnerNode = {value: 'c', children: [b]};

