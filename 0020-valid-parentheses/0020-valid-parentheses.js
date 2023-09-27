/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    const hash = {'(': ')', '{': '}', '[': ']'};
    
    for (const el of s) {
        if (el in hash) {
            arr.push(hash[el])
        } else {
            if (arr.at(-1) === el) {
                arr.pop()
            } else {
                return false
            }
        }
    }
    
    return arr.length === 0
};