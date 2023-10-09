/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    const range = [...Array(n+1).keys()];
    let div = range.filter(res => res % m === 0).reduce((a,b) => a+b, 0);
    let notDiv = range.filter(res => res % m !== 0).reduce((a,b) => a+b, 0);

    return notDiv - div
};