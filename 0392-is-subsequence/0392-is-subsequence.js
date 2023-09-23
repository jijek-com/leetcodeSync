/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const n = s.length;
    
    for (let i=0; i<n; i++) {
        const index = t.indexOf(s[i]);
        
        if (~index) {
            t = t.slice(index+1)
        } else {
            return false
        }
    }
    
    return true
};