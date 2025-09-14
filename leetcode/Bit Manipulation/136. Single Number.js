var singleNumber = function (nums) {
  let counts = {};

  for (let i = 0; i < nums.length; i++){
    let num = nums[i]
    // console.log(num)
    if(counts[num] === undefined){
        counts[num] = 1
    }else {
        delete counts[num]
    }
  }

  return Object.keys(counts).map(Number)[0];

//   newBit[l] = l; // adiciona um par chave-valor: "1": 1
};

// Dada uma matriz não vazia de inteiros , cada elemento aparece duas vezes, exceto um. Encontre aquele único.nums

// Você deve implementar uma solução com uma complexidade de tempo de execução linear e usar apenas espaço extra constante.

// Exemplo 1:
// delete newBit[L]; // remove a chave "1"


// Entrada: nums =
console.log(singleNumber([2, 2, 1]))

// Saída: 1

// Exemplo 2:

// Entrada: nums = [4,1,2,1,2]
console.log(singleNumber([4, 1, 2, 1, 2]))
// Saída: 4

// Exemplo 3:

// Entrada: nums = [1]
console.log(singleNumber([1]))
// Saída: 1
