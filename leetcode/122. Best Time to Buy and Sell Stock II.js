var maxProfit = function(prices) {
    let profit = 0

    for(let i = 1; i < prices.length; i++){
        // console.log(prices[i - 1])
        if(prices[i] > prices[i - 1]){
            // console.log(prices[i])
            profit += prices[i] - prices[i - 1]
            // console.log(prices[i] - prices[i - 1])
        }
    }
    return profit
};

Input: prices = [7,1,5,3,6,4]
Output: 7

console.log(maxProfit(prices))

Input: prices = [1,2,3,4,5]
Output: 4
console.log(maxProfit(prices))

Input: prices = [7,6,4,3,1]
Output: 0
console.log(maxProfit(prices))