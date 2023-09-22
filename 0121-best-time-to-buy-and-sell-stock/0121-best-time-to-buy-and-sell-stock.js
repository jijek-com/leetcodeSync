/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxVal = 0;
    let minVal = prices[0];
    
    const n = prices.length;
    
    for (let i=0; i<n; i++) {
        maxVal = Math.max(maxVal, prices[i] - minVal);
        minVal = Math.min(minVal, prices[i])
    }
    
    return maxVal
};