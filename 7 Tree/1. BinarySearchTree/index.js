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
        temp = temp.right
      } else if(value === temp.value) {
        return true
      }
    }

    return false
  }
}
const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(7);
tree.insert(9);

console.log(tree.includes(90))

console.log(tree);

