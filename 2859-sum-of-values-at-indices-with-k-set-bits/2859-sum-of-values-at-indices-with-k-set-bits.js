/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    const n = nums.length;
    let count = 0;
    
    for (let i=0; i<n; i++) {
        const el = i.toString(2).split('').filter(res => res === '1').length;
        
        if (el === k) {
            count += nums[i]
        }
    }
    
    return count
};