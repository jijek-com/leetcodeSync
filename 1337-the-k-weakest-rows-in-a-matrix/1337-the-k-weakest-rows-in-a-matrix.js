/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const n = mat.length;
    let ans = {};
    
    for (let i=0; i<n; i++) {
        let soldiers = 0;
        
        for (let j=0; j<mat[i].length; j++) {
           if (mat[i][j] === 1) {
               soldiers++
           }
        }
        
        ans[i] = soldiers;;
    }
    
    return Object.entries(ans).sort(([,a],[,b]) => a - b).map(res => res[0]).splice(0, k)
};