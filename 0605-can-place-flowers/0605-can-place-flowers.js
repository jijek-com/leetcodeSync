/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    const l = flowerbed.length;
    
    for (let i=0; i<l; i++) {
        if (!flowerbed[i-1] && !flowerbed[i] && !flowerbed[i+1] && n > 0) {
            flowerbed[i] = 1
            n--
        }
    }
    
    return n === 0
};