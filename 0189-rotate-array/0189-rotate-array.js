/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length

    const spliceArr = nums.splice(0, nums.length - k);

    spliceArr.forEach((num) => nums.push(num));
};