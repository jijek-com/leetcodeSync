/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const n = nums.length;
    let ans = [];
    
    for (let i=0; i<n; i+=2) {
        const el = Array(nums[i]).fill(nums[i+1]);
        ans.push(...el);
    }
    
    return ans
};