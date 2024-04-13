/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const n = mat.length;
    const m = mat[0].length;
    const ans = [];
    
    for (let i=0; i<n+m-1; i++) {
        let x = i < m ? 0 : i - m + 1;
        let y = i < m ? i : m - 1;
        
        const arr = [];
        
        while (x < n && y >= 0) {
            arr.push(mat[x][y]);
            x++;
            y--
        }
        
        if (i % 2 === 0) arr.reverse();
        
        ans.push(...arr)
    }
    
    return ans
};