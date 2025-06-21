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
      this.root = newNode;
      return this;
    }

    let temp = this.root;

    while (true) {
      if (newNode.value === temp.value) {
        return undefined;
      }

      //   essa  ferificaçao para adicionar no lard direito
      if (temp.left < temp.value) {
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        } else {
          temp = temp.left;
        }
      }
      //   se  o numero for menor que o do lado direito vai   ficar na esquerdo
      else {
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }
        temp = temp.right;
      }
    }
  }
}
const tree = new BinarySearchTree();
tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)


console.log(tree);

// 4:08:36 - Binary Search Tree Includes Method
