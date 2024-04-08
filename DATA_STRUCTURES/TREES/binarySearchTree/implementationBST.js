

/**
 * Represents a node in a binary search tree.
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
 * Checks if a binary tree is a valid binary search tree.
 * @param {Node} root - The root node of the binary tree.
 * @param {*} min - The minimum value allowed in the tree (optional).
 * @param {*} max - The maximum value allowed in the tree (optional).
 * @returns {boolean} - True if the binary tree is a valid binary search tree, false otherwise.
 */
const isValidBST = (root, min = null, max = null) => {
  if (!root) return true;
  if (min !== null && root.value <= min) return false;
  if (max !== null && root.value >= max) return false;

  return isValidBST(root.left, min, root.value) && isValidBST(root.right, root.value, max);
}

/**
 * Prints the hierarchy of a binary tree.
 * @param {Node} nodo - The root node of the binary tree.
 * @param {string} prefix - The prefix to be added to each line (optional).
 * @param {boolean} isLeft - Indicates if the node is a left child (optional).
 */
const dibujarJeraquiaArbol = (nodo, prefix = '', isLeft = false) => {
  if (nodo) {
      console.log(prefix + (isLeft ? '├── ' : '└── ') + nodo.value);
      dibujarJeraquiaArbol(nodo.left, prefix + (isLeft ? '│   ' : '    '), true);
      dibujarJeraquiaArbol(nodo.right, prefix + (isLeft ? '│   ' : '    '), false);
  }
}

module.exports = { Node, isValidBST, dibujarJeraquiaArbol };


