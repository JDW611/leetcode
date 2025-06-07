/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let time = nums.length

    for (i = 0; i < time; i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            nums.push(0)
            i--;
            time--;
        }
    }
};