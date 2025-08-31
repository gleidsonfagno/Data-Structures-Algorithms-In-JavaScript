var maxProfit = function(prices) {
    let l = 0 // left Buy
    let r = 1 // right Sell
    let maxP = 0
    while( r < prices.length){
    
        if(prices[l] < prices[r]){
            let prift = prices[r] - prices[l]
            maxP =  Math.max(maxP, prift)
        }
        else{
            l = r // vamos deslocar para o ponteiro poruque emccontramos um preco mais baixo
        }
        r++
    }
    return maxP
};

// prices = [7,1,5,3,6,4]
prices = [1,2,4,2,5,7,2,4,9,0,9]

console.log(maxProfit(prices))