/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
    let count = 0;
    const hash = {};
    const n = keyboard.length;
    const l = word.length;

    for (let i=0; i<n; i++) {
        hash[keyboard[i]] = i
    }

    for (let i=0; i<l; i++) {
        let prev = hash[word[i-1]] ?? 0;
        count += Math.abs(prev - hash[word[i]])
    }
    
    return count
};