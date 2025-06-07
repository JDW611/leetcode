/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // 첫번쨰 윈도우 합
    let currentSum = nums.slice(0, k).reduce((a, b) => a + b);
    let maxSum = currentSum;

    // 슬라이딩 윈도우로 나머지 부분 검사
    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currentSum);
    }

    // 평균 반환
    return maxSum / k;
};