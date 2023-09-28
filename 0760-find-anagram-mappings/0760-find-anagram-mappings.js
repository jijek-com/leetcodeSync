/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var anagramMappings = function(nums1, nums2) {
    const hash = {};
    const n = nums1.length;
    
    for (let i=0; i<n; i++) {
        hash[nums2[i]] = i;
    }
    
    for (let i=0; i<n; i++) {
        nums1[i] = hash[nums1[i]]
    }
    
    return nums1
};