class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(value) {
        const newNode = new Node(value)
        this.first = newNode
        this.length = 1 
    }

    //Stack Push Method
    push(value) {
        const newNode = new Node(value)

        if(this.length === 0){
            this.first = newNode
        }

        // o proximo adicionodo agora e o primeiro
        newNode.next = this.first
        this.first = newNode
        this.length++
        return this
    }
}

let theStack = new Stack(0)
theStack.push(1)
theStack.push(2)
console.log(theStack)