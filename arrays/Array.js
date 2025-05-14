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

    shift(){
        const firstItem = this.data[0]
        
        for (let i = 0; i < this.lenght; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.lenght - 1];
        this.lenght--
        return firstItem
    }

    delete(index) {
        const item = this.data[index]

        for (let i = index; i < this.lenght - 1; i++){
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.lenght - 1]
        this.lenght--
        return item
    }

}

const myNewArray = new MyArray()

myNewArray.push("apple")
myNewArray.push("orange")
myNewArray.push("mango")
myNewArray.push("banana")

console.log(myNewArray)
console.log(myNewArray.get(0))

// myNewArray.pop()
// console.log(myNewArray)
// console.log(myNewArray.shift())
console.log(myNewArray.delete(1))
console.log(myNewArray)