// One-pass Revert half of the number
// Time complexity:O(log 10(n))
// Space complexity: O(1)

var isPalindrome = function(x) {
    let copyX = x;
    let count = 0;
    
    while (copyX > 0) {
        count = copyX % 10 + count * 10;
        copyX = Math.floor(copyX / 10);
    }
    
    return count === x
};