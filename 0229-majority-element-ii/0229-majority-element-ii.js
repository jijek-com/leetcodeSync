/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const hash = {};
    const div = Math.trunc(nums.length / 3);
    let ans = [];

    for (const el of nums) {
        hash[el] = (hash[el] || 0) + 1
    }

    for (const [key, val] of Object.entries(hash)) {
        if (val > div) {
            ans.push(key)
        }
    }

    return ans
};