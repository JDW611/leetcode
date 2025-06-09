/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    const left = [];
    const right = [];

    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    for (let value of set1) {
        if (!set2.has(value)) {
            left.push(value);
        }
    }

    for (let value of set2) {
        if (!set1.has(value)) {
            right.push(value);
        }
    }

    return [left, right];
};