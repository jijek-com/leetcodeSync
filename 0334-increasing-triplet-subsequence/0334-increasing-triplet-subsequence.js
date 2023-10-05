/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    const n = nums.length;

    for (let i=0; i<n; i++) {
        if (nums[i] > second && first < second) {
            return true
        }

        if (nums[i] > first) {
            second = nums[i]
        } else {
            first = nums[i]
        }
    }

    return false
};