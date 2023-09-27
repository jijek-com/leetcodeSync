/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.sort((a,b) => a - b);
    
    const n = nums.length;
    const hash = new Set(nums);

    let ans = [];
    
    for (let i=1; i<=n; i++) {
        if (!hash.has(i)) {
            ans.push(i)
        }
    }
    
    return ans
};