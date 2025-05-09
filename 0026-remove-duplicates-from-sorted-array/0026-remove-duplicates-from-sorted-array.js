/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== i) {
            nums.splice(i, 1);
            i--;
        }
    }

    return nums.length
};