/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hash = {};
    
    for (const el of nums) {
        hash[el] = (hash[el] || 0) + 1;
    }
    
    return Object.entries(hash).sort((a,b) => b[1] - a[1]).map(res => +res[0]).splice(0, k)
};