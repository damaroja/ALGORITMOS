


const Node = require('./app').Node;
const Tree = require('./app').Tree;

describe('Node', () => {
  test('should create a new instance of the Node class', () => {
    const node = new Node(1);
    expect(node.value).toBe(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});

describe('Tree', () => {
  let tree;

  beforeEach(() => {
    const root = new Node(1);
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
    tree = new Tree(root);
  });

  test('should perform a depth-first traversal of the tree', () => {
    const expected = [1, 2, 3, 4, 5, 6, 7];
    const result = tree.breathFirstTraversal();
    expect(result).toEqual(expected);
  });

});
