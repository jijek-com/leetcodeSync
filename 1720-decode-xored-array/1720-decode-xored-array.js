/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const n = encoded.length;
    let ans = [first];
    
    for (let i=1; i<=n; i++) {
        ans[i] = ans[i-1] ^ encoded[i-1]; 
    }
    
    return ans
};