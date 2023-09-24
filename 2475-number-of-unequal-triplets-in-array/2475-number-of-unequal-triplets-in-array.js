/**
 * @param {number[]} nums
 * @return {number}
 */
var unequalTriplets = function(nums) {
    const n = nums.length;
    let count = 0;

    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            for (let k=j+1; k<n; k++) {
                if (nums[i] !== nums[j] && nums[j] !== nums[k] && nums[i] !== nums[k]) {
                    count++
                }
            }
        }
    }

    return count
};