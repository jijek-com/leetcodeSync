// One-pass Hash Set
// Time complexity: O(J+S)
// Space complexity: O(S)

var numJewelsInStones = function(jewels, stones) {
    const hash = {};
    let count = 0;

    for (const el of stones) {
        hash[el] = (hash[el] || 0) + 1
    }

    for (const el of jewels) {
        count += hash[el] || 0
    }

    return count
};