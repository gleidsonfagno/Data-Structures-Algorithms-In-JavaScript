// My solution 
const reverseStr = (text) => {
    const newTextArray = text.split("")
    // console.log(newTextArray)
    const textReverse = newTextArray.reverse()
    // console.log(textReverse)
    // console.log()
    const newTextReverse = textReverse.join("")
    return newTextReverse
}

console.log(reverseStr("hello, World"))
console.log(reverseStr("ola mundo"))

// Professor's solution 

const reverseString = (str) => str.split("").reverse("").join("")
console.log(reverseString("hello"))
console.log(reverseString("Apple"))