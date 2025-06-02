/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const index = new Map();

    for (i = 0; i < nums.length; i++) {
        if(i-index.get(nums[i]) <= k) {
            return true;
        }
        index.set(nums[i], i)
    }

    return false;
};