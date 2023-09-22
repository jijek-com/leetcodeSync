/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let hash = {'++X': 1, 'X++': 1, '--X': -1, 'X--': -1};
    const n = operations.length;
    let ans = 0;
    
    for (let i=0; i<n; i++) {
        ans += hash[operations[i]]
    }
    
    return ans
};