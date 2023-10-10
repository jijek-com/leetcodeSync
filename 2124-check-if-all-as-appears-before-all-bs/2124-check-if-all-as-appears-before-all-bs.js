/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let str = s;
    s = s.split('').sort().join('')

    return str === s
};