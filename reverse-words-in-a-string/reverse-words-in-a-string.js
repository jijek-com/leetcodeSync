/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = [];
    let str = s.split(' ');
    const n = str.length;
    
    for (let i=0; i < n; i++) {
        if (str[i] !== '') {
            ans.unshift(str[i])
        }
    }
    
    return ans.join(' ')
};