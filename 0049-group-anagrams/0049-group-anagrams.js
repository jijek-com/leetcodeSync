/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hash = {};
    
    for (const str of strs) {
        const el = str.split('').sort().join('');
        
        if (el in hash) {
            hash[el] = [...hash[el], str]
        } else {
            hash[el] = [str]
        }
    }
    
    return Object.values(hash)
};