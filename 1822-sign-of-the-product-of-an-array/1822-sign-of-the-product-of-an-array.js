/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let numb = nums.reduce((a,b) => a*b);
    
    if (numb < 0) return -1;
    if (numb > 0) return 1;
    
    return 0
};