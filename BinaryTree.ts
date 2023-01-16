import { type } from "os";

// Объявление типов для узлов
type TreeNode = {value: string};
type LeafNode = TreeNode & {isLeaf: true};
type InnerNode = TreeNode & {children: [TreeNode] | [TreeNode, TreeNode]};

