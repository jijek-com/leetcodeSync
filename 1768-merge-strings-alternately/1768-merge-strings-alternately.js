/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = '';
    let l1 = 0;
    let l2 = 0;
    
    while(l1 < word1.length || l2 < word2.length) {
        if (l1 < word1.length) {
            word += word1[l1++]
        }
        
        if (l2 < word2.length) {
            word += word2[l2++]
        }
    }
    
    return word
};