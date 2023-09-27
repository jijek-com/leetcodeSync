/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    const hash = {};
    
    for (const num of nums) {
        hash[num] = (hash[num] + 1) || 0
    }
    
    return Object.entries(hash).filter(res => res[1] === 0).map(res => +res[0])
};