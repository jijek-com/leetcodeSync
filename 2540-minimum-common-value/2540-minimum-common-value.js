/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    const hash = new Map();
    
    for (const el of nums1) hash.set(el, (hash.get(el) || 0) + 1);
    
    for (const el of nums2) {
        if (hash.has(el)) {
            return el
        }
    }
    
    return -1
};