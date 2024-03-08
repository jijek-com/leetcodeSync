/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    const hash = new Map();
    let maxFreq = 0;
    let count = 0;

    for (const el of nums) {
        hash.set(el, (hash.get(el) || 0) + 1);

        if (hash.get(el) > maxFreq) {
            maxFreq = hash.get(el);
        }
    }

    for (const val of hash.values()) {
        if (val === maxFreq) {
            count += val
        }
    }

    return count
};