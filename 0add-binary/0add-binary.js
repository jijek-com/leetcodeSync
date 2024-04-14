/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let str = '';
    let carry = 0;

    let l1 = a.length - 1;
    let l2 = b.length -1;

    while (l1 >= 0 || l2 >= 0) {
        const sum = (Number(a[l1--]) || 0) + (Number(b[l2--]) || 0) + carry;

        carry = sum > 1 ? 1 : 0;

        str = (sum & 1) + str;
    }

    if (carry > 0) {
        str = carry.toString() + str
    }

    return str
};