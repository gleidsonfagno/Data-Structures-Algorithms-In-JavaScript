class Node {
    constructor(value){
        this.head = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.value = new Node(value)
        this.tail  = this.head
        this.lenght = 1
    }
}

const myLinkedList = new LinkedList(1)
console.log(myLinkedList)