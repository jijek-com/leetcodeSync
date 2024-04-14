/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let cur = 1;
    const n = nums.length;
    
    for (let i=1; i<n; i++) {
        if (nums[i] !== nums[i-1]) {
            nums[cur++] = nums[i]
        }
    }
    
    return cur
};