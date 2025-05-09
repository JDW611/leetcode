/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const counts = new Map();

    for (i = 0; i < nums.length; i++) {
        const count = counts.get(nums[i]) || 0;
        counts.set(nums[i], count + 1);

        if (counts.get(nums[i]) > 2) {
            nums.splice(i, 1);

            i--;
        }

    }

    return nums.length;
};