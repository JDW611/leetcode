/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const index = nums.lastIndexOf(complement);

        if (index !== -1 && index !== i) {
            return [i, index]
        }
    }

    return index;
};