/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    let count = 0;
    let maxVal = 0;
    
    for (let i=0; i<n; i++) {
        if (nums[i] === 1) count++;
        else count = 0;
        
        maxVal = Math.max(maxVal, count)
    }
    return maxVal
};