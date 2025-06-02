// My solution 
const reverseInt = (number) => {
    const newText = number.toString()
    const newTextArray = newText.split("")
    // console.log(newTextArray)
    const arrayReverse = newTextArray.reverse()
    const textReverse = arrayReverse.join("")
    // console.log(textReverse)
    const newNumberReverse = parseInt(textReverse)
    // console.log(newNumberReverse)
    return newNumberReverse

}

console.log(reverseInt(5678))
// Professor's solution 

const reverseIntProf = (n) => {
    const reverse = n.toString().split("").reverse().join("")
    return parseInt(reverse) * Math.sign(n)
}

console.log(reverseIntProf(456))