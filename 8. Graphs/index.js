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
  
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");


console.log(g);
