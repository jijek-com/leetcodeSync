/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    const arr = String(n).split('').map(res => Number(res));
    const length = arr.length;
    let multi = 1;
    let sum = 0;

    for (let i=0; i<length; i++) {
        multi *= arr[i];
        sum += arr[i]
    }

    return multi - sum
};