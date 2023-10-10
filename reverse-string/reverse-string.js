/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let length = Math.floor(s.length >> 1);
    
    for (let i=0; i<length; i++) {
        [s[i],s[s.length - 1 - i]] = [s[s.length - 1 - i],s[i]]
    }

};