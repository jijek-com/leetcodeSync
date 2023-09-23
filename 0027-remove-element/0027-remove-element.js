/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let cur = 0;
    const n = nums.length;
    
    for (let i=0; i<n; i++) {
        if (nums[i] !== val) {
            nums[cur++] = nums[i];
        }
    }
    
    nums.splice(cur)

};