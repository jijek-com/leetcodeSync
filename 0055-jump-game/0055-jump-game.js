/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length - 1;
    
    let last = n;
    
    for (let i=n; i >= 0; i--) {
        if (nums[i] + i >= last) {
            last = i
        }
    }
    
    return last === 0
};