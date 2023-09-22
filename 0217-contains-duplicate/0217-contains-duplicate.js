/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const n = nums.length;
    let hash = {};
    
    for (let i=0; i<n; i++) {
        if (nums[i] in hash) {
            return true
        }
        
        hash[nums[i]] = i
    }
    
    return false
};