/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const ans = [[1]];

    for (let i=1; i<=rowIndex; i++) {
        let row = [1];
        let cur = ans[i-1];

        for (let j=1; j<cur.length; j++) {
            row.push(cur[j] + cur[j-1])
        }

        row.push(1);
        ans.push(row)
    }

    return ans.at(-1)
};