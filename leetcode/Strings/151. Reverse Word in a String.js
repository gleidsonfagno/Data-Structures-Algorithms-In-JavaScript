var reverseWords = function(s) {
    let newText  = s.trim().replace(/\s+/g, " ").split(" ")
    console.log(newText.reverse().join(" "))

};

let s = "the sky is blue"
reverseWords(s)

// Código com dois ponteiros
var reverseWords = function(s) {
    // 1. Limpar espaços e dividir
    let words = s.trim().replace(/\s+/g, " ").split(" ");

    // 2. Ponteiros
    let left = 0;
    let right = words.length - 1;

    // 3. Loop de troca
    while (left < right) {
        let temp = words[left];
        words[left] = words[right];
        words[right] = temp;

        left++;
        right--;
    }

    // 4. Juntar de volta
    return words.join(" ");
};
console.log(reverseWords("the sky is blue")); // "blue is sky the"
