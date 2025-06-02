// My solution
const palindroStrings = (text) => {
    const textToArray = text.split("")
    // console.log(textToArray)
    const textReverse = textToArray.reverse()
    const newTextReverse = textReverse.join("")
    // console.log(newTextReverse)

    if(newTextReverse === text){
        console.log(`${newTextReverse} e um Palíndromo`) 
    }else{
        console.log(` ${newTextReverse} not Palíndromo`)
    }

}
palindroStrings("12321")

// Professor's solution

const palindrome = (str) => str.split("").reverse().join("") === str
console.log(palindrome("cddc"))
console.log(palindrome("pinga"))