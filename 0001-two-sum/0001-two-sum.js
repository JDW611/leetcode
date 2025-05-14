/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if(map.has(complement)) {
            const index = map.get(complement);

            return [index, i];
        } 
        map.set(nums[i], i)
    }

    return [];
    
};


// 너무 느림
// for (i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         const index = nums.lastIndexOf(complement);

//         if (index !== -1 && index !== i) {
//             return [i, index]
//         }
//     }

//     return index;