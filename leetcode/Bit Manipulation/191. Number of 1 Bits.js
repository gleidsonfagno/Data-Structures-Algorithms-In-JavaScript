var hammingWeight = function(n) {
    let output = 0
    let binario = n.toString(2)
    for(let i=0; i < binario.length; i++){
        // console.log(binario.split("")[i])
        if(binario.split("")[i] > 0){
            output++
        }
    }
    return output
};


console.log(hammingWeight(11))
console.log(hammingWeight(128))
console.log(hammingWeight(2147483645))

