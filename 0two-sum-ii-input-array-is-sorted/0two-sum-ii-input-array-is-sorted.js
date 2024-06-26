/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;

    while (start < end) {
        if (numbers[start] + numbers[end] === target) return [start+1, end+1];
        if (numbers[start] + numbers[end] > target) {
            end--
        } else {
            start++
        }
    }

    return [-1, -1]
};