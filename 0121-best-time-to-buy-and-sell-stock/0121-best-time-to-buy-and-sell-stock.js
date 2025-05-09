/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let profit = 0;

    prices.forEach((price) => {
        minPrice = Math.min(minPrice, price);
        profit = Math.max(profit, price-minPrice)
    })

    return profit;
};