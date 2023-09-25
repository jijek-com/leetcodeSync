/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let arr = s.split('').sort();
    let ans = t.split('').sort();
    const n = t.length;

    for (let i=0; i<n; i++) {
        if (arr[i] !== ans[i]) {
            return ans[i]
        }
    }
};