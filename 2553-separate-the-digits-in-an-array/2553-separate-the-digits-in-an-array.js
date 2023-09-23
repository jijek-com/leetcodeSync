/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let ans = [];
    
    for (const num of nums) {
        const el = String(num).split('').map(res => +res)
        
        ans.push(...el)
    }
    
    return ans
};