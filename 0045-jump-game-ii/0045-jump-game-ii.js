/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let next = 0;
    let count = 0;
    let curr = -1;

    for (let i = 0; next < nums.length - 1; i++) {
        if (i > curr) {
            count += 1;
            curr = next;
        }
        next = Math.max(next, nums[i] + i);

    }

    return count

};