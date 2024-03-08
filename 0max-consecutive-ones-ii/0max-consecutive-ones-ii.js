/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    let maxSum = 0;
    
    for (let i=0; i<n; i++) {
        let zero = 0;
        let count = 0;
        
        for (let j=i; j<n; j++) {
            if (nums[j] === 0) {
                zero++
            }
            
            if (zero > 1) break;
            
            count++
        }
        
        maxSum = Math.max(maxSum, count)
    }
    
    return maxSum
};