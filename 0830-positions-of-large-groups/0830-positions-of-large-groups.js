/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let hash = {};
    const n = s.length;
    let count = 0;
    let ans = [];
    
    for (let i=0; i<n; i++) {
        if (s[i] !== s[i+1]) {
            
            if (i - count + 1 >= 3) {
                ans.push([count, i]);
            }

            count = i+1;
        }
    }
    
    return ans
};