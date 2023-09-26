// sorting
// Time Complexity: O(Nlog(N))
// Space Complexity: O(N)

var findTheDifference = function(s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    const n = t.length;

    for (let i=0; i<n; i++) {
        if (s[i] !== t[i]) {
            return t[i]
        }
    }
};