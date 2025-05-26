class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.lenght = 1;
  }

  // Linked List Push Method
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.lenght++;
  }

  // Linked List Pop Method
  pop() {
    if (!this.head) {
      return undefined;
    }

    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = prev.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.lenght--;

    if (this.lenght === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  // Linked List Unshift Method
  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;

    this.lenght++;
    return this;
  }

  // Linked List Shift Method
  shift() {
    // 1. Point the fist node/element
    let temp = this.head;
    // 2. Move point head to next node/element
    this.head = this.head.next;
    // 3. Remove first element
    temp.next = null;
    this.lenght--;

    if (this.lenght === 0) {
      this.tail = nulll;
    }

    return temp;
  }

  // Linked List GET FIRST Method
  getFirst() {
    return this.head;
  }

  // Linked List GET LAST Method
  getLast() {
    if (!this.head) {
      return null;
    }

    let temp = this.head;

    while (temp) {
      if (!temp.next) {
        return temp;
      }

      temp = temp.next;
    }
  }

  // Linked List GET Method
  get(index) {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      if (counter === index) {
        return temp;
      }

      counter++;
      temp = temp.next;
    }

    return null;
  }
  // Linked List SET Method
  set(index, value) {
    let temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // Linked List INSERT Method
  insert(index, value) {
    if (index === 0) {
      return this.unshift(value);
    }

    if (index === this.lenght) {
      return this.push(value);
    }

    const newNode = new Node(value);
    // Uses the get method to find the node right before the node right before the desired possition (index - 1).

    const temp = this.get(index - 1);
    newNode.next = temp.next;

    temp.next = newNode;
    this.lenght++;
    return true;
  }

  // Linked List Size Method
  size() {
    let counter = 0;
    let temp = this.head;

    while (temp) {
      counter++;
      temp = temp.next;
    }

    return counter;
  }

  clear() {
    this.head = null
  }
}

const myLinkedList = new LinkedList(0);

// Adiciona elementos ao final da lista
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);

console.log(myLinkedList.getFirst());
// retorna o primeiro elemento da lista (head)

console.log(myLinkedList.getLast());
// retorna o último elemento da lista (tail)

console.log(myLinkedList.get(3));
//retorna o nó na posição indicada (começando do 0)

myLinkedList.pop();
// remove o último elemento da lista

console.log(myLinkedList.set(3, 10));
console.log(myLinkedList.insert(0, 20));
console.log(myLinkedList.size());
console.log(myLinkedList.clear());
