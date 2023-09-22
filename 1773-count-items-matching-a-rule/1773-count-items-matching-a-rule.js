/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    const n = items.length;
    const hash = {'type': 0, 'color': 1, 'name': 2};
    let count = 0;

    for (let i=0; i<n; i++) {
        if (items[i][hash[ruleKey]] === ruleValue) {
            count++
        }
    }

    return count
};