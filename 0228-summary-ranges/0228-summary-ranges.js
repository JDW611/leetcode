/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let result = []
    let range = []
    let start = nums[0];
    let end = nums[0];
    let check = false;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] + 1 === nums[i + 1] && check === false) {
            start = nums[i];
            end = nums[i + 1];
            check = true;
        }

        if (nums[i] + 1 === nums[i + 1] && check === true) {
            end = nums[i + 1];
        }

        if (nums[i] + 1 !== nums[i + 1]) {
            if (start !== end) {
                result.push(start + "->" + end);
            } else {
                result.push(start.toString());
            }
            check = false;
            start = nums[i + 1];
            end = nums[i + 1];
        }
    }

    return result;
};