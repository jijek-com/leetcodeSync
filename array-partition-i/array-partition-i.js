/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    const n = nums.length;
    nums.sort((a,b) => a - b);
    
    let count = 0;
    
    for (let i=0; i<n; i+=2) {
        count += Math.min(nums[i], nums[i+1])
    }
    
    return count
};