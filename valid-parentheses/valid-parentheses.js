/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const n = s.length;
    let hash = {'[':']','{':'}','(':')'};
    let ans = [];
    
    for (const el of s) {
        if (el in hash) {
            ans.push(hash[el])
        } else {
            const elem = ans.pop();
            
            if (el !== elem) {
                return false
            }
        }
    }
    
    return ans.length === 0
};