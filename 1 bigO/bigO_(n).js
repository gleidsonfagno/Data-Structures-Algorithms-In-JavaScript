const groceries = ['milk', 'bread', 'fluor',  'choose', 'sugar' ]

// O(n)
const searchForItem = (item) => {
    for (let i = 0; i < groceries.length; i++){
        if(groceries[i] === item){
            console.log(`Found: ${item}`)
        }
    }

    for (let j = 0; j < groceries.length; j++){
        if(groceries[j] === item){
            console.log(`Found: ${item} 2`)
        }
    }

    // n + n = 2n -> 0(2n)
    // Drop the constat so it becomes  0(2n)
}

searchForItem("sugar")