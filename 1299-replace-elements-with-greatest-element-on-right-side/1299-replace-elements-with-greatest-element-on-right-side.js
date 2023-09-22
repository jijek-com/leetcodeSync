/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    const n = arr.length;
    
    for (let i=0; i<n; i++) {
        let mx = 0;
        
        for (let j=i+1; j<n; j++) {
            mx = Math.max(mx, arr[j]);
        }
        
        if (i === n-1) {
            mx = -1
        }
        
        arr[i] = mx;
    }
    
    return arr
};