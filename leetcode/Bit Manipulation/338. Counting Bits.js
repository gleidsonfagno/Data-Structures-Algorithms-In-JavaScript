var countBits = function(n) {
    // Cria um array dp (dynamic programming) com tamanho n+1
    // Em JS o [0] * (n+1) não funciona (isso é Python). Em JS seria:
    let dp = new Array(n + 1).fill(0)
    // let dp = [0] * (n + 1)  // <-- isso gera NaN em JS
    let offset = 1          // offset é o maior "power of two" <= i

    for (let i = 1; i <= n; i++){
        if (offset * 2 == i) {
            offset = i      // quando chegamos num novo power of two, atualizamos o offset
        }
        dp[i] = 1 + dp[i - offset]
        // Explicação: a contagem de bits em i = 1 (bit do offset) + contagem de (i - offset)
    }

    return dp
}

console.log(countBits(2))
console.log(countBits(5))

// offset guarda o maior power of two até agora (1, 2, 4, 8...).
// Quando i é um power of two, dp[i] = 1.
// Entre dois powers of two, o número i tem a mesma quantidade de bits que (i - offset), só que com um 1 extra (do bit mais significativo)