/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let hash = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let arr = new Set();
    
    for (const word of words) {
        let el = '';
        
        for (const e of word) {
            el += hash[e.charCodeAt() - 97];  
        }
        
        arr.add(el)
    }
    
    return arr.size
};