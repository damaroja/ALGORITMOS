

const {Node, dibujarJeraquiaArbol, isValidBST} = require("./app");

describe("Node", () => {
  let root, node4, node10, node2, node6;
  beforeEach(() => {
    root = new Node(8);
    node4 = new Node(4);
    node10 = new Node(10);
    node2 = new Node(2);
    node6 = new Node(6);
    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node6;
  });
  test("should create a new node with the given value", () => {
    const node = new Node(5);
    expect(node.value).toBe(5);
  });

  test("should have correct left and right child nodes", () => {
    const { left, right } = root;
    expect(left.value).toBe(4);
    expect(right.value).toBe(10);
  });

  test("should have correct left and right grandchild nodes", () => {
    const { left, right } = root;
    const { left: leftGrandchild, right: rightGrandchild } = left;
    expect(leftGrandchild.value).toBe(2);
    expect(rightGrandchild.value).toBe(6);
  });

  test("should check if a binary tree is a valid binary search tree", () => {
    const isValid = isValidBST(root);
    expect(isValid).toBe(true);
  });
});

describe('isValidBST', () => {
  it('should return true for a valid binary search tree', () => {
    const root = new Node(8);
    const node4 = new Node(4);
    const node10 = new Node(10);
    const node2 = new Node(2);
    const node6 = new Node(6);

    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node6;

    const result = isValidBST(root);
    expect(result).toBe(true);
  });

  it('should return false for an invalid binary search tree', () => {
    const root = new Node(8);
    const node4 = new Node(4);
    const node10 = new Node(10);
    const node2 = new Node(2);
    const node12 = new Node(12);
    root.left = node4;
    root.right = node10;
    node4.left = node2;
    node4.right = node12;
    const result = isValidBST(root);
    expect(result).toBe(false);
  });
});
