/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    const n = accounts.length;
    let ans = [];
    
    for (let i=0; i<n; i++) {
        const el = accounts[i].reduce((a,b) => a+b, 0)
        
        ans.push(el)
    }
    
    return Math.max.apply(null, ans)
};