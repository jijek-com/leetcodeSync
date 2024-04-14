/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;

    let sum = 0;
    let count = 1;
    let index = 0;
    let minVal = Infinity;

    for (let i=0; i<n; i++) {
        sum += nums[i];
        count++;

        while (sum >= target) {
            sum -= nums[index++];
            count--;

            minVal = Math.min(minVal, count)
        }

    }

    return minVal === Infinity ? 0 : minVal
};