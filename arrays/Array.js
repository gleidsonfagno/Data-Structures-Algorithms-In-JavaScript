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

    get(index){
        return this.data[index]
    }

    pop(){
        const lastItem = this.data[this.lenght -1]
        console.log("----------->", lastItem)
        this.lenght--
        return lastItem
    }


}

const myNewArray = new MyArray()

myNewArray.push("apple")
myNewArray.push("orange")
myNewArray.push("mango")
myNewArray.push("banana")

console.log(myNewArray)

console.log(myNewArray.get(0))

myNewArray.pop()
console.log(myNewArray)