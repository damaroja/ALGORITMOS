

/**
 * Represents a node in a binary tree.
 * @class
 */

class Node {

    /**
     * Creates a new instance of the Node class.
     * @constructor
     * @param {*} value - The value of the node.
     */

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * Represents a binary tree.
 * @class
 */


class Tree {

    /**
     * Creates a new instance of the Tree class.
     * @constructor
     * @param {Node} root - The root node of the tree.
     */

    constructor(root) {
        this.root = root;
        this.tree = [];
    }

    /**
     * Performs a depth-first traversal of the tree.
     * @param {Node} [currentNode=this.root] - The current node being visited.
     * @returns {Array} - An array containing the values of the nodes in the tree.
     */

    dephFirstTraversal(currentNode = this.root) {
        this.tree.push(currentNode.value);
        if (currentNode.left) {
            this.dephFirstTraversal(currentNode.left);
        }
        if (currentNode.right) {
            this.dephFirstTraversal(currentNode.right);
        }
        return this.tree;
    }

    /**
     * Prints the hierarchy of the tree.
     * @param {Node} nodo - The current node being visited.
     * @param {string} [prefix=''] - The prefix string used for indentation.
     * @param {boolean} [isLeft=false] - Indicates if the current node is a left child.
     */

    dibujarJeraquiaArbol(nodo, prefix = '', isLeft = false) {
        if (nodo) {
            console.log(prefix + (isLeft ? '├── ' : '└── ') + nodo.value);
            this.dibujarJeraquiaArbol(nodo.left, prefix + (isLeft ? '│   ' : '    '), true);
            this.dibujarJeraquiaArbol(nodo.right, prefix + (isLeft ? '│   ' : '    '), false);
        }
    }
}

module.exports = { Node, Tree };


 
/* const root = new Node(1);
const left = new Node(2);
const right = new Node(3);
root.left = left;
root.right = right;
const left1 = new Node(4);
const right1 = new Node(5);
left.left = left1;
left.right = right1;
const left2 = new Node(6);
const right2 = new Node(7);
right.left = left2;
right.right = right2;
const tree = new Tree(root);

tree.dibujarJeraquiaArbol(root);  */


