/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let cur = 0;
    const n = nums.length;
    
    for (let i=0; i<n; i++) {
        if (nums[i] !== 0) {
            nums[cur++] = nums[i]
        }
    }
    
    for (let i=cur; i<n; i++) {
        nums[i] = 0
    }
    
    return nums
};