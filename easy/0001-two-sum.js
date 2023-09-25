// brute force
// Time complexity: O(n^2)
// Space complexity: O(1)

var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++) {
        for (let j=i+1; j<nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i,j]
            }
        }
    }

    return [-1,-1]
};

// Two-pass Hash Table
// Time complexity: O(n)
// Space complexity: O(n)
var twoSum = function(nums, target) {
    let hash = new Map();

    for (let i=0; i<nums.length; i++) {
        hash.set(nums[i], i);
    }

    for (let i=0; i<nums.length; i++) {
        const el = target - nums[i];

        if (hash.has(el) && hash.get(el) !== i) {
            return  [i, hash.get(el)]
        }
    }

    return [-1,-1]
};

// One-pass Hash Table
// Time complexity: O(n)
// Space complexity: O(n)

var twoSum = function(nums, target) {
    const n = nums.length;
    const hash = {};

    for (let i=0; i<n; i++) {
        const el = target - nums[i];

        if (el in hash) {
            return [hash[el], i]
        }

        hash[nums[i]] = i
    }

    return [-1, -1]
};
