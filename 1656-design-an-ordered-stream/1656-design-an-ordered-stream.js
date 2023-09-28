/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    arr = [];
    cur = 0;
    
    arr.length = n;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    arr[idKey-1] = value;
    let ans = [];
    const n = arr.length;
    
    while (arr[cur]) {
        ans.push(arr[cur]);
        cur++
    }
    
    return ans
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */