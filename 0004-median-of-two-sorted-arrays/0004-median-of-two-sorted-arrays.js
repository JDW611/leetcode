/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArr = [...nums1, ...nums2].sort((a,b) => a-b)
    const quo = mergedArr.length/2
    if(mergedArr.length%2) {
      return mergedArr[parseInt(quo)]
    } else {
      return (mergedArr[quo-1] + mergedArr[quo]) / 2
    }
};