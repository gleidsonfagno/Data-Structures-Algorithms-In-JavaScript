class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vtx) {
    if (!this.adjacencyList[vtx]) {
      this.adjacencyList[vtx] = [];
      return true;
    }

    return false;
  }

  // connection
  addEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1].push(vtx2);
      this.adjacencyList[vtx2].push(vtx1);
      return true;
    }
    return false;
  }

  removeEdge(vtx1, vtx2) {
    if (this.adjacencyList[vtx1] && this.adjacencyList[vtx2]) {
      this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter(
        (v) => v !== vtx2
      );
      this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter(
        (v) => v !== vtx1
      );
      return true;
    }

    return false;
  }

  removeVertex(vtx) {
    if (!this.adjacencyList[vtx]) return false;

    // Para cada vértice conectado ao que será removido..
    for (let neighbor of this.adjacencyList[vtx]) {
      // Remove a conexão desse vizinho com o vértice que será apagado.
      this.adjacencyList[neighbor] = this.adjacencyList[neighbor].filter(
        (v) => v !== vtx
      );
    }

    // Finalmente, remove o próprio vértice do grafo.
    delete this.adjacencyList[vtx];
    return this;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "D");
g.addEdge("C", "D");

// console.log(g);
g.removeEdge("A", "B");
g.removeVertex("D");
console.log(g);
