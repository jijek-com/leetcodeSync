/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const n = nums.length;

    const left = Array(n).fill(0);
    const right = Array(n).fill(0);

    for (let i=1; i<n; i++) {
        left[i] = left[i-1] + nums[i-1]
    }

    for (let i=n-2; i>=0; i--) {
        right[i] = right[i+1] + nums[i+1]
    }

    for (let i=0; i<n; i++) {
        nums[i] = Math.abs(left[i] - right[i])
    }

    return nums
};