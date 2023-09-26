// Array
// Time complexity: O(n)
// Space complexity: O(n)

var kidsWithCandies = function(candies, extraCandies) {
    const maxVal = Math.max.apply(null, candies);
    const n = candies.length;
    
    for (let i=0; i<n; i++) {
        candies[i] = (candies[i] + extraCandies) >= maxVal
    }
    
    return candies
};