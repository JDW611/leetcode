/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let sumArray = [];
    let sum = 0;
    
    for(i=0; i<=gain.length; i++) {
        sumArray.push(sum);

        sum += gain[i]
    }

    return Math.max(...sumArray);
};