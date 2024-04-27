



//Create a class type Graph for performs a Breadth First Search on a graph

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }

    print() {
        console.log(this.adjacencyList);
    }
}

module.exports = Graph;

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");

console.log(graph.breadthFirstSearch("A")); // ["A", "B", "C", "D", "E"]
graph.print();


const Graph = require('./app');

describe('Graph', () => {
  describe('depthFirstIterative', () => {
    it('should return the correct depth-first traversal order', () => {
      const graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'E');

      const result = graph.depthFirstIterative('A');
      expect(result).toEqual(['A', 'C', 'E', 'B', 'D']);
    });
  });

  describe('breadthFirstSearch', () => {
    it('should return the correct breadth-first traversal order', () => {
      const graph = new Graph();
      graph.addVertex('A');
      graph.addVertex('B');
      graph.addVertex('C');
      graph.addVertex('D');
      graph.addVertex('E');
      graph.addVertex('F');
      graph.addEdge('A', 'B');
      graph.addEdge('A', 'C');
      graph.addEdge('B', 'D');
      graph.addEdge('C', 'E');

      const result = graph.breadthFirstSearch('A');
      expect(result).toEqual(['A', 'B', 'C', 'D', 'E']);
    });
  });
});

module.exports = Graph;
