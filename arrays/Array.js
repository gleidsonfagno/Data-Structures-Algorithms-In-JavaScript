class MyArray {
    constructor() {
        this.lenght = 0
        this.data = {}
    }

    push(iten){
        this.data[this.lenght] = iten
        // console.log("-------", this.data[this.lenght])
        this.lenght++
        return this.lenght
    }
}

const myNewArray = new MyArray()

myNewArray.push("apple")
myNewArray.push("orange")
myNewArray.push("mango")
myNewArray.push("banana")

console.log(myNewArray)
