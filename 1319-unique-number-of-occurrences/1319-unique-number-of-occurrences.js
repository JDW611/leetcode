/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const check = new Map();

    for (i = 0; i < arr.length; i++) {
        if (check.has(arr[i])) {
            let count = check.get(arr[i]);

            check.set(arr[i], count + 1)
        } else {
            check.set(arr[i], 1)
        }
    }

    const occurrences = [...check.values()];
    const uniqueOccurrences = new Set(occurrences);

    return occurrences.length === uniqueOccurrences.size;
};