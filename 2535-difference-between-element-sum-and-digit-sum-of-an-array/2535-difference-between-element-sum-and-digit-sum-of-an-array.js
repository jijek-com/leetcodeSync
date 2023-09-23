/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0;
    let dig = 0;
    const n = nums.length;
    
    for (const el of nums) {
        const digit = String(el).split('').map(res => +res).reduce((a,b) => a+b, 0);

        sum += el;
        dig += digit;
    }
    
    return Math.abs(sum - dig)
};