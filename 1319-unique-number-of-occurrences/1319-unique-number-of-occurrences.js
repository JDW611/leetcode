/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const check = new Map();
    let result = true;

    for (i = 0; i < arr.length; i++) {
        if (check.has(arr[i])) {
            let count = check.get(arr[i]);

            check.set(arr[i], count + 1)
        } else {
            check.set(arr[i], 1)
        }
    }

    for (let [key, value] of check) {
        if ([...check.values()].filter(v => v === value).length > 1) {
            result = false;
        }
    }

    return result;
};