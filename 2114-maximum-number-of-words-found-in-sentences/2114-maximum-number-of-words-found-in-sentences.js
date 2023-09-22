/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    const n = sentences.length;
    let maxVal = 0;
    
    for (let i=0; i<n; i++) {
        const el = sentences[i].split(' ').length;
        
        maxVal = Math.max(maxVal, el)
    }
    
    return maxVal
};