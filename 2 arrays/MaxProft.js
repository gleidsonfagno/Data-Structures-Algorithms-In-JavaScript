const maxProfit = (prices) => {
  let minPrice = prices[0]; // Assume the first day is the cheapest to buy

  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Update minimun price if the lawe price is found
    minPrice = Math.min(minPrice, currentPrice)
    const pontentialProfit = currentPrice - minPrice
    
    // console.log(pontentialProfit);
    maxProfit = Math.max(maxProfit, pontentialProfit)
    console.log(maxProfit);
  }
  
  return maxProfit
};

const prices = [7, 1, 5, 3, 6, 4];

const profit = maxProfit(prices);
console.log("Maximun Profit: ", profit);
