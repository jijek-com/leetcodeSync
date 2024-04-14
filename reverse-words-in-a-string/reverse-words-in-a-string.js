/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const regexp = /\s+/g;
    let ans = s.trim().replace(regexp, ' ').split(' ').reverse();

    return ans.join(' ')
};