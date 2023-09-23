/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let s = strs[0];
    let n = strs.length;
    
    if (strs.length === 1) return s;
    
    while (s.length > 0) {

        if (strs.filter(res => res.startsWith(s)).length === n) {
            return s
        }
        
        s = s.slice(0, -1);
    }
    
    return ''
};