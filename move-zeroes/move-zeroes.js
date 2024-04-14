/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const n = nums.length;
    let cur = 0;

    for (let i=0; i<n; i++) {
        if (nums[i] !== 0) nums[cur++] = nums[i]
    }

    while (cur < n) {
        nums[cur++] = 0
    }
};