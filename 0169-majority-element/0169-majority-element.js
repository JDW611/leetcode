/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counts = new Map();

    nums.forEach((num) => {
        counts.set(num, (counts.get(num) || 0)+1);
    });

    let maxCount = 0;
    let mostKey

    for(const [key, count] of counts.entries()) {
        if(count > maxCount) {
            maxCount = count;
            mostKey = key;
        }
    }

    return mostKey;

};