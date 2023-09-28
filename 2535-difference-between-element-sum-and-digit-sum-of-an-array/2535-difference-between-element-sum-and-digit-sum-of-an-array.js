/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let count = 0;
    
    for (const num of nums) {
        const el = String(num).split('')
        .map(res => Number(res))
        .reduce((a,b) => a+b, 0);
        
        sum += num;
        count += el
    }
    
    return Math.abs(sum - count)
};