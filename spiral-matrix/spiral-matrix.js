/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = m - 1;

    const ans = [];

    while (ans.length < m * n) {
        for (let i=left; i<=right; i++) ans.push(matrix[top][i]);

        for (let i=top+1; i<=bottom; i++) ans.push(matrix[i][right]);

        if (top !== bottom) {
            for (let i=right-1; i>=left; i--) ans.push(matrix[bottom][i]);
        }

        if (left !== right) {
            for (let i=bottom-1; i>top; i--) ans.push(matrix[i][left])
        }

        top++;
        right--;
        left++;
        bottom--
    }

    return ans
};