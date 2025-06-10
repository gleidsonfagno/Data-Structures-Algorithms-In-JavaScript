class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.length = 1;
  }

  //Stack Push Method
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
    }

    // o proximo adicionodo agora e o primeiro
    newNode.next = this.first;
    this.first = newNode;
    this.length++;
    return this;
  }

  // Stack Push Method
  pop() {
    if (this.length === 0) {
      return undefined;
    }

    // guardamos o prrimeiro elemento em uma variavel temp e apontamos para o proximo
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    this.length--;
    return temp;
  }

}

let theStack = new Stack(0);
theStack.push(1);
theStack.push(2);
theStack.pop();
console.log(theStack);
