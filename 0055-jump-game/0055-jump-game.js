/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const n = nums.length - 1;
    let lastJump = n;
    
    for (let i=n; i>=0; i--) {
        if (nums[i] + i >= lastJump) {
            lastJump = i
        }
    }
    
    return lastJump === 0
};