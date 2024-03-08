/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    
    let maxVal = 0;
    
    for (let i=1; i<n; i++) {
        if (prices[i-1] < prices[i]) {
            maxVal += prices[i] - prices[i-1];
        }
    }
    
    return maxVal
};