/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for (let i=1; i<n; i++) {
        const a = i;
        const b = n-a;
        
        if (!String(a).includes('0') && !String(b).includes('0')) {
            return [a, b]
        }
    }
    
    return [-1, -1]
};