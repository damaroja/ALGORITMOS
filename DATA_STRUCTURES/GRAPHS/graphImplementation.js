



//basic Graph implementation

/**
 * Represents a graph data structure.
 */
class Graph {
  constructor() {
    this.adjecencyList = []
  }

  /**
   * Adds a vertex to the adjacency list.
   * @param {string} vertex - The vertex to be added.
   */
  addVertex(vertex) {
    if (!this.adjecencyList[vertex]) {
      this.adjecencyList[vertex] = []
    }
  }

  /**
   * Adds an edge between two vertices in the graph.
   * @param {string} vertex1 - The first vertex.
   * @param {string} vertex2 - The second vertex.
   */
  addEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1].push(vertex2)
    this.adjecencyList[vertex2].push(vertex1)
  }

  getAdjecencyList() {
    return this.adjecencyList
  }

  printAdjecencyList() {
    for (let key in this.adjecencyList) {
      console.log(`${key}: ${this.adjecencyList[key]}`)
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjecencyList[vertex1] = this.adjecencyList[vertex1].filter(v => v !== vertex2)
    this.adjecencyList[vertex2] = this.adjecencyList[vertex2].filter(v => v !== vertex1)
  }

  removeVertex(vertex) {
    while (this.adjecencyList[vertex].length) {
      const adjecentVertex = this.adjecencyList[vertex].pop()
      this.removeEdge(vertex, adjecentVertex)
    }
    delete this.adjecencyList[vertex]
  
  }
}

module.exports = Graph

const myGraph = new Graph()
myGraph.addVertex('0')
myGraph.addVertex('1')
myGraph.addVertex('2')
myGraph.addVertex('3')
myGraph.addVertex('4')
myGraph.addVertex('5')
myGraph.addVertex('6')
myGraph.addEdge('3', '1')
myGraph.addEdge('3', '4')
myGraph.addEdge('4', '2')
myGraph.addEdge('4', '5')
myGraph.addEdge('1', '2')
myGraph.addEdge('1', '0')

myGraph.addEdge('0', '2')
myGraph.addEdge('6', '5')
myGraph.printAdjecencyList()


const myGraph2 = new Graph()
myGraph2.addVertex('Madrid')
myGraph2.addVertex('Barcelona')
myGraph2.addVertex('Valencia')
myGraph2.addVertex('Malaga')
myGraph2.addVertex('Sevilla')
myGraph2.addVertex('Bilbao')
myGraph2.addVertex('Alicante')
myGraph2.addVertex('Murcia')
myGraph2.addVertex('Cadiz')
myGraph2.addVertex('Santander')
myGraph2.addVertex('Zaragoza')
myGraph2.addVertex('Salamanca')
myGraph2.addVertex('Soria')

myGraph2.addEdge('Madrid', 'Barcelona')
myGraph2.addEdge('Madrid', 'Valencia')
myGraph2.addEdge('Madrid', 'Malaga')
myGraph2.addEdge('Madrid', 'Sevilla')
myGraph2.addEdge('Madrid', 'Bilbao')
myGraph2.addEdge('Barcelona', 'Valencia')
myGraph2.addEdge('Valencia', 'Malaga')
myGraph2.addEdge('Malaga', 'Sevilla')
myGraph2.addEdge('Sevilla', 'Cadiz')
myGraph2.addEdge('Barcelona', 'Bilbao')
myGraph2.addEdge('Bilbao', 'Santander')
myGraph2.addEdge('Valencia', 'Alicante')
myGraph2.addEdge('Alicante', 'Murcia')
myGraph2.addEdge('Zaragoza', 'Soria')
myGraph2.addEdge('Salamanca', 'Soria')
myGraph2.printAdjecencyList() 

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Dallas');
g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Dallas', 'Aspen');
g.addEdge('Tokyo', 'Aspen');

g.removeEdge('Dallas', 'Aspen');
g.removeVertex('Aspen');

g.printAdjecencyList(); 

