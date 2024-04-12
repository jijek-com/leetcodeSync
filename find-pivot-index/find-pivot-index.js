/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const n = nums.length;
    
    let sum = 0;
    let leftSum = 0;
    
    for (const num of nums) sum += num;
    
    for (let i=0; i<n; i++) {
        if (sum - leftSum - nums[i] === leftSum) {
            return i
        }
        
        leftSum += nums[i]
    }
    
    return -1
};