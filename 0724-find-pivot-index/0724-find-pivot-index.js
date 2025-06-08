/**
 * @param {number[]} nums
 * @return {number}
 */


var pivotIndex = function (nums) {
    let left = 0;
    let right = 0;

    const sum = (nums) => {
        let sumResult = 0;
        for (let i = 0; i < nums.length; i++) {
            sumResult += nums[i];
        }

        return sumResult;
    }

    for (let i = 0; i < nums.length; i++) {
        left = sum(nums.slice(0, i));
        right = sum(nums.slice(i + 1));

        if (left === right) {
            return i;
        }
    }

    return -1;
};