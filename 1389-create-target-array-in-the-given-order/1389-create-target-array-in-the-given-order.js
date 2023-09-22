/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const n = nums.length;
    let ans = [];
    
    for (let i=0; i<n; i++) {
        ans.splice(index[i], 0, nums[i])
    }
    
    return ans
};