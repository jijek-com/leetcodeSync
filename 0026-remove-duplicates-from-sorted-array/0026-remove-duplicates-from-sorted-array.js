/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    let cur = 0;
    
    for (let i=0; i<n; i++) {
        if (nums[i-1] !== nums[i]) {
            nums[cur++] = nums[i]
        }
    }
    
    return cur
};