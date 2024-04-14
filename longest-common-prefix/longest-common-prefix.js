/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const n = strs.length;

    let prefix = strs[0];

    for (let i=0; i<n; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }

    return prefix
};