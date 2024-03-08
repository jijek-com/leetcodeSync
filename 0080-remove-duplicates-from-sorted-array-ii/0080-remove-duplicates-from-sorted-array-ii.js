/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const n = nums.length;
    
    let cur = 1;
    let count = 1;
    
    for (let i=1; i<n; i++) {
        if (nums[i] === nums[i-1]) {
            count++
        } else {
            count = 1
        }
        
        if (count < 3) {
            nums[cur++] = nums[i]
        }
    }
    
    return cur
};