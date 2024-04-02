//Esta funcion resuelve la profundidad de un arbol 

const maxDepth = node => {
    if (!node) return 0;
    const leftDepth = this.maxDepth(node.left);
    const rightDepth = this.maxDepth(node.right);
    return Math.max(leftDepth, rightDepth) + 1;
  }


└── 1
    ├── 2
    │   ├── 4
    │   └── 5
    └── 3
        ├── 6

//deep = 3
