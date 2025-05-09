/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;

    for(i=0; i<prices.length; i++) {
        if(prices[i] < prices[i+1]) {
            maxProfit += prices[i+1] - prices[i]
        }
    }

    return maxProfit
};