/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const hash = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let ans = 0;
    const n = s.length;
    
    for (let i=0; i<n; i++) {
        if (hash[s[i+1]] > hash[s[i]]) {
            ans += hash[s[i+1]] - hash[s[i]];
            i++
        } else {
            ans += hash[s[i]];
        }
    }
    
    return ans
};