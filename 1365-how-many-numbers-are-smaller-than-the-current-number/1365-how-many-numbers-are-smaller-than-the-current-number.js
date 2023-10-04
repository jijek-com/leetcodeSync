/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const n = nums.length;
    const ans = Array(n).fill(0);
    
    for (let i=0; i<n; i++) {
        let count = 0;
        
        for (let j=0; j<n; j++) {
            if (i !== j && nums[i] > nums[j]) {
                count++
            }
        }
        
        ans[i] = count
    }
    
    return ans
};