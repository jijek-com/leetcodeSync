/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
<h1>One-pass Hash Table</h1>
<h2>Complexity</h2>
<ul>
    <li>Time complexity: O(n)</li>
     <li>Space complexity: O(n)</li>
</ul>

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
