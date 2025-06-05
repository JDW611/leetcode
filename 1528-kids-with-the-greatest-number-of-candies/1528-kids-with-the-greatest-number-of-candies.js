/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let result = [];
    let max = Math.max(...candies);
    for (i = 0; i < candies.length; i++) {
        let check = candies[i] + extraCandies;

        result.push(check >= max);
    }

    return result;
};