/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    const n = s.length;
    let str = Array(n);

    for (let i=0; i<n; i++) {
        str[indices[i]] = s[i]
    }
    
    return str.join('')
};