/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArr = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

var rotate = function(nums, k) {
    k = k % nums.length;
    
    nums.reverse();
    
    rotateArr(nums, 0, k - 1);
    rotateArr(nums, k, nums.length - 1);
    
    return nums
};