function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i; j++) {
            if(arr[i] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }

    return arr
}


let myArray = [4, 3,2,1,5]

const res = bubbleSort(myArray)

console.log(res)