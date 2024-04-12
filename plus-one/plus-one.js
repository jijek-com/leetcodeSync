/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1;
    let i = 0;
    
    const n = digits.length;
    let index = n - 1;
    
    while (carry > 0 && index >= 0) {
        const el = digits[index];
        
        const sum = el + carry;
        
        carry = Math.floor(sum / 10);
        
        digits[index--] = sum % 10
    }
    
    if (carry > 0) {
        digits.unshift(1)
    }
    
    return digits
};