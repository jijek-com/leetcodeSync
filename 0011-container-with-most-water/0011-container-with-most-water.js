/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length-1;
    let maxVal = 0;
    
    while (start < end) {
        let dif = end - start;
        
        maxVal = Math.max(maxVal, dif * Math.min(height[start], height[end]));
        
        if (height[start] > height[end]) {
            end--
        } else {
            start++
        }
    }
    
    return maxVal
};