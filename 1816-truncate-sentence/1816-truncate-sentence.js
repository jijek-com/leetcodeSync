/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let ans = s.split(' ');
    return ans.splice(0, k).join(' ');
};