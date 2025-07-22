// Insertion Sort

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]; // Extrai o elemento a ser inserido
    let j = i - 1;

    // Move os elementos maiores que key uma posição à frente
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insere key na posição correta
    arr[j + 1] = key;
  }
  return arr
}

const unsortedArray = [5, 2, 46, 1, 3];
const res = insertionSort(unsortedArray);
console.log(res)
