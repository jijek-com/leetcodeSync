/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    const hash = {};
    let cur = 0;
    let ans = ""
    
    for (const el of key) {
        if (!hash.hasOwnProperty(el) && el !== ' ') {
            hash[el] = letters[cur++];
        }
    }
    
    for (const el of message) {
        if (el === ' ') {
            ans += ' ';
        } else {
           ans += hash[el]          
        }
    }
    
    return ans
};