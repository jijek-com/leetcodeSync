/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const hash = {};
    let count = 0;

    for (const el of stones) {
        hash[el] = (hash[el] || 0) + 1
    }

    for (const el of jewels) {
        count += hash[el] || 0
    }

    return count
};