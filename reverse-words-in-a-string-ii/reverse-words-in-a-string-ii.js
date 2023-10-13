/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverse = (s, start, end) => {
    while (start < end) {
        [s[start],s[end]] = [s[end],s[start]];
        start++;
        end--
    }
}
var reverseWords = function(s) {
    const n = s.length;
    
    reverse(s, 0, n-1);
    
    let start = 0;
    let end = 0;
    
    while (start < n) {
        while (s[end] !== ' ' && end < n) {
            end++
        }
        
        reverse(s, start, end-1);
        
        start = end+1;
        end += 1
    }
};