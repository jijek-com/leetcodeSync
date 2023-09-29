/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let increasing = true;
    let decreasing = true;
    const n = nums.length;
    
    for (let i=0; i<n; i++) {
        if (nums[i] > nums[i+1]) {
            increasing = false;
        }
        
        if (nums[i] < nums[i+1]) {
            decreasing = false;
        }
    }
 
    return increasing || decreasing
};