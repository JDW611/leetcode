/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    // 첫번쨰 윈도우 합
    let currentSum = 0;
    for (i = 0; i < k; i++) {
        currentSum += nums[i];
    }

    let maxSum = currentSum;
    // 슬라이딩 윈도우로 나머지 부분 검사
    for (let i = k; i < nums.length; i++) {
        currentSum = currentSum - nums[i - k] + nums[i];
        maxSum = Math.max(maxSum, currentSum);
    }

    // 평균 반환
    return maxSum / k;
};