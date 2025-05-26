class Node {
    constructor(value) {
        this.value = value
        this.nex = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode =  new Node(value)

        this.head = newNode()
        this.tail = this.head
        this.lenght = 1
    }
}