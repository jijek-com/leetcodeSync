/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const n = nums.length;
    
    for (let i=1; i<n; i++) {
        nums[i] = nums[i] + nums[i-1]
    }
    
    return nums
};