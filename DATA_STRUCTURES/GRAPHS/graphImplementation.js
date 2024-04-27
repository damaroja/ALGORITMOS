//Create a basic implementation of a graph in the form of a class. The graph should be represented as an adjacency list. The class should have the following methods:

// addNode - Adds a node to the graph. Takes the node's value as an argument.

// addEdge - Adds an edge between two nodes in the graph. Takes the values of the two nodes as arguments.

// removeNode - Removes a node from the graph.

// removeEdge - Removes an edge between two nodes in the graph.

// hasNode - Returns true if a node exists in the graph.

// hasEdge - Returns true if an edge exists between two nodes.

// findShortestPath - Returns the shortest path between two nodes in the graph. Diksra's algorithm can be used to find the shortest path. If there is no path between the two nodes, return null.

// findAllPaths - Returns all paths between two nodes in the graph.

// findLongestPath - Returns the longest path between two nodes in the graph.

// The graph should be able to handle directed and undirected graphs.

//Graph implementation:

class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight = 1) {
    if (!this.nodes.has(node1) || !this.nodes.has(node2)) {
      throw new Error("One or more nodes do not exist in the graph.");
    }
    this.edges[node1].push({ node: node2, weight });
    this.edges[node2].push({ node: node1, weight });
  }

  removeEdge(node1, node2) {
    if (!this.edges[node1] || !this.edges[node2]) {
      throw new Error("One or more nodes do not exist in the graph.");
    }
    this.edges[node1] = this.edges[node1].filter((edge) => edge.node !== node2);
    this.edges[node2] = this.edges[node2].filter((edge) => edge.node !== node1);
  }

  removeNode(node) {
    if (!this.nodes.has(node)) {
      throw new Error("Node does not exist in the graph.");
    }
    delete this.edges[node];
    for (let adjacentNode in this.edges) {
      this.edges[adjacentNode] = this.edges[adjacentNode].filter(
        (edge) => edge.node !== node
      );
    }
    this.nodes.delete(node);
  }

  hasNode(node) {
    return this.nodes.has(node);
  }

  hasEdge(node1, node2) {
    return this.edges[node1].some((edge) => edge.node === node2);
  }

  findShortestPath(start, end) {
    const distances = {};
    const previous = {};
    const queue = new Set();

    for (let node of this.nodes) {
      distances[node] = node === start ? 0 : Infinity;
      queue.add(node);
    }

    while (queue.size) {
      let minDistanceNode = null;
      for (let node of queue) {
        if (!minDistanceNode || distances[node] < distances[minDistanceNode]) {
          minDistanceNode = node;
        }
      }

      if (minDistanceNode === end) {
        const path = [];
        while (previous[minDistanceNode]) {
          path.unshift(minDistanceNode);
          minDistanceNode = previous[minDistanceNode];
        }
        path.unshift(start);
        return path;
      }

      queue.delete(minDistanceNode);

      for (let neighbor of this.edges[minDistanceNode]) {
        const totalDistance = distances[minDistanceNode] + neighbor.weight;
        if (totalDistance < distances[neighbor.node]) {
          distances[neighbor.node] = totalDistance;
          previous[neighbor.node] = minDistanceNode;
        }
      }
    }

    return null;
  }

  findAllPaths(start, end, visited = new Set(), path = [], paths = []) {
    visited.add(start);
    path.push(start);

    if (start === end) {
      paths.push([...path]);
    } else {
      for (let edge of this.edges[start]) {
        if (!visited.has(edge.node)) {
          this.findAllPaths(edge.node, end, visited, path, paths);
        }
      }
    }

    visited.delete(start);
    path.pop();

    return paths;
  }

  findLongestPath(start, end) {
    const visited = new Set();
    let longestPath = [];

    const dfs = (currentNode, path) => {
      visited.add(currentNode);
      path.push(currentNode);

      if (currentNode === end) {
        if (path.length > longestPath.length) {
          longestPath = [...path];
        }
      } else {
        for (let edge of this.edges[currentNode]) {
          if (!visited.has(edge.node)) {
            dfs(edge.node, path);
          }
        }
      }

      visited.delete(currentNode);
      path.pop();
    };

    dfs(start, []);

    return longestPath;
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);


graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 5);
graph.addEdge(4, 5);
graph.addEdge(5, 6);
graph.addEdge(6, 9);
graph.addEdge(7, 2);
graph.addEdge(8, 4);
graph.addEdge(9, 5);
graph.addEdge(9, 8);

/* const p = graph.findShortestPath(1, 8); // [1, 3, 5] pero devuelve [1, 2, 4, 5]
console.log(p);
const p2 = graph.findShortestPath(3, 7); // [1, 2, 4] y devuelve [1, 2, 4]
console.log(p2); */

const paths = graph.findAllPaths(1, 5);
console.log(paths);

const longestPath = graph.findLongestPath(1, 5);
console.log(longestPath);


