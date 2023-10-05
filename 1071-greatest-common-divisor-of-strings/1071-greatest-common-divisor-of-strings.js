/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = (l1, l2) => {
    if (l2 > l1) return gcd(l2, l1);
    
    if (l2 === 0) return l1;
    
    return gcd(l1 % l2, l2)
}

var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    
    return str1.slice(0, gcd(str1.length, str2.length))
};