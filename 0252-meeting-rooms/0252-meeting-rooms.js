/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    const n = intervals.length;
    intervals.sort((a,b) => a[0] - b[0]);
    
    for (let i=0; i<n-1; i++) {
        if (intervals[i][1] > intervals[i+1][0]) {
            return false
        }
    }
    
    return true
};