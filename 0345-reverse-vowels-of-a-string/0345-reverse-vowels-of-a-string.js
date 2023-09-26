/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let hash = new Set(['a','e','i','o','u']);
    let str = s.split('');

    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        if (hash.has(str[left].toLowerCase()) && hash.has(str[right].toLowerCase())) {
            [str[left], str[right]] = [str[right], str[left]];
            left++;
            right--;
        }
        
        if (!hash.has(str[left].toLowerCase())) {
            left++
        }
        
        if (!hash.has(str[right].toLowerCase())) {
            right--
        }
    }
    
    return str.join('')
    
};