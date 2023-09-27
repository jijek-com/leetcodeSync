/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = '';
    
    for (const num of nums) {
        ans ^= num
    }
    
    return ans
};