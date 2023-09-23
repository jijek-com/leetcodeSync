/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let ans = [];
    let n1 = new Set(nums1);
    let n2 = new Set(nums2);
    
    for (const el of n1.values()) {
        if (n2.has(el)) {
            n2.delete(el);
            n1.delete(el)
        }
    }
    
    return [Array.from(n1), Array.from(n2)]
};