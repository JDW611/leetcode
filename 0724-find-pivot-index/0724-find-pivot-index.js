/**
 * @param {number[]} nums
 * @return {number}
 */


var pivotIndex = function (nums) {
    let totalSum = 0;
    let left = 0;

    for (i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    for (i = 0; i < nums.length; i++) {
        let right = totalSum - left - nums[i]

        if (right === left) {
            return i;
        }

        left += nums[i];
    }

    return -1;
};