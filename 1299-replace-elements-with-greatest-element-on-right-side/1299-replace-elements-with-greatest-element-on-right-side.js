/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const n = arr.length;
    let max = arr.at(-1);
    let cur = arr.at(-1);
    
    for (let i=n-1; i>=0; i--) {
        cur = arr[i];
        arr[i] = max;
         
        if (cur > max) {
            max = cur
        }
    }
         
    arr[n-1] = -1;
    
    return arr
};