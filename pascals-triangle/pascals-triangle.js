/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const ans = [[1]];
    
    if (numRows === 1) return ans;
    
    for (let i=1; i<numRows; i++) {
        const last = ans.at(-1);
        
        const arr = [1];
        
        for (let i=1; i<last.length; i++) {
            arr.push(last[i-1] + last[i])
        }
        
        arr.push(1)
        
        ans.push(arr)
    }
    
    return ans
};