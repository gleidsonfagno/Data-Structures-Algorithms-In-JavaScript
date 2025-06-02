class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value) {
        const newNode = new Node(value)
        this.fist = newNode
        this.length = 1 
    }
}

let theStack = new Stack(0)

console.log(theStack)