function findPairs(arr)  {
    // O(n^2)
    for  (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++) {
            console.log(`Pair: ${arr[i]}, ${arr[j]}`)
        }
    }

    // O(n)
    for (let q = 0; q < arr.length; q++) {
        console.log("------", q)
    }

    // If we  cmnine all  the "O" operations it becoomes 0(n^2 + n)
    // 0(n^2) is a dominat term
    // "n" is a Non-Dominat term
    // So we remve the "non-dominant" term  and we're only left with  O(n^2)
    // This way, we simplefy our BigO
}

const numbers = [1,2,3,4,5]
findPairs(numbers)