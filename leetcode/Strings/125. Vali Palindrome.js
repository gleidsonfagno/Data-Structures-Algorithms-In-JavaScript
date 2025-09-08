var isPalindrome = function(s) {
    let text = s.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
    let newText = text.split("").reverse().join("")
    console.log(text)
    console.log(newText)
    if(newText === text){
        return true
    }else{
        return false
    }
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "))
