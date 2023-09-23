/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let negative = 0;

    for (const el of nums) {
        if (el === 0) {
            return 0
        }
        if (el < 0) {
            negative++
        }
    }

    return negative % 2 === 0 ? 1 : -1
};