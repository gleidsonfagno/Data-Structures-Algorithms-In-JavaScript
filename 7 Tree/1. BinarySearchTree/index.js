class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode; // árvore vazia: novo nó vira raiz
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined; // evita duplicatas
      }

      // 🟢 se for MENOR → vai pra ESQUERDA
      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode; // achou lugar vazio
          return this;
        } else {
          temp = temp.left; // desce pra esquerda
        }
      }
      // 🔴 se for MAIOR → vai pra DIREITA
      else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right; // desce pra direita
      }
    }
  }

  includes(value) {
    if (!this.root) {
      return false;
    }

    let temp = this.root;

    while (temp) {
      // se for menor var para a esquerda
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }

    return false;
  }
  // Breath First Search
  bfs() {
    let current = this.root; // começa pela raiz
    let queue = []; // fila (FIFO): mantém nós a visitar
    let data = []; // aqui vamos guardar os valores visitados

    queue.push(current); // começa colocando a raiz na fila

    while (queue.length) {
      // enquanto houver nós na fila...
      current = queue.shift(); // pega o primeiro da fila
      data.push(current.value); // salva o valor no resultado

      if (current.left) queue.push(current.left); // põe o filho da ESQUERDA na fila
      if (current.right) queue.push(current.right); // põe o filho da DIREITA na fila
    }

    return data; // retorna todos os valores visitados na ordem
  }

  // Depth First Search PreOrder
  dfsPreOrder(node = this.root, data = []) {
    if (node === null) return data;

    data.push(node.value);

    if (node.left) this.dfsPreOrder(node.left, data);
    if (node.right) this.dfsPreOrder(node.right, data);
    return data;
  }

  // Tree Traversal  Depth First Search PostOrder 
  dfsPostOrder(node = this.root, data = []) {
    if (node === null) return data;

    if (node.left) this.dfsPostOrder(node.left, data);
    if (node.right) this.dfsPostOrder(node.right, data);

    data.push(node.value);

    return data;
  }

  // dfsInOrder

}

const tree = new BinarySearchTree();

tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

// console.log(tree.includes(90));

// console.log(tree.bfs());
console.log(tree.dfsPreOrder())
console.log(tree.dfsPostOrder())
// console.log(tree);

