/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function(nums, divisors) {
    let ans = [];
    const n = nums.length;
    const l = divisors.length;
    divisors.sort((a,b) => a - b);
    
    for (let i=0; i<l; i++) {
        let cur = 0;
        
        for (let j=0; j<n; j++) {
            if (nums[j] % divisors[i] === 0) {
                cur++
            }
        }
        
        ans.push(cur)
    }
    
    const maxVal = Math.max.apply(null, ans);
    
    return divisors[ans.indexOf(maxVal)]
};