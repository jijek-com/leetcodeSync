/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const n = intervals.length;
    intervals.sort((a,b) => a[0] - b[0]);
    
    for (let i=0; i<n; i++) {
        const el = intervals[i][1];
        
        for (let j=i+1; j<n; j++) {{
            if (el > intervals[j][0]) {
                return false
            }
        }}
    }
    
    return true
};