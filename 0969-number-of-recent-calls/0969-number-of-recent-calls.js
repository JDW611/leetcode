
var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    
    let left = 0, right = this.requests.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.requests[mid] >= t - 3000) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return this.requests.length - left;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */