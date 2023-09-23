/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    nums.sort((a,b) => a - b);
    
    return nums[Math.floor(n/2)]
};