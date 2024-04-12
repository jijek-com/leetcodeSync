/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const maxVal = Math.max.apply(null, nums);
    
    const index = nums.indexOf(maxVal);
    
    nums.sort((a,b) => a - b);
    
    let first = nums.pop();
    let second = nums.pop();
    
    while (first === second && nums.length > 0) second = nums.pop();
    
    if (first === second) return -1
    
    if (first / 2 >= second) return index
    
    return -1
};