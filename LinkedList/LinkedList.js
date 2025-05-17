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

    if(!this.head) {
      return undefined
    }

    let temp = this.head
    let prev = this.head

    while(temp.next) {
      prev = temp
      temp = prev.next
    }

    this.tail = prev
    this.tail.next = null
    this.lenght--

    if(this.lenght === 0) {
      this.head = null
      this.tail = null
    }
    return temp
  }

  // Linked List Unshift Method
  unshift(value) {
    const newNode = new Node(value)

    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    }

    newNode.next = this.head
    this.head = newNode

    this.lenght++
    return this
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(10);
myLinkedList.unshift(0)
console.log(myLinkedList);
// myLinkedList.pop()
// console.log(myLinkedList);