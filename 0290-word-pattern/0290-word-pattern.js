/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const patternMap = new Map();
    const stringMap = new Map();

    const arr = s.split(' ');

    if (pattern.length !== arr.length) {
        return false;
    }

    for (i = 0; i < pattern.length; i++) {
        if (!patternMap.has(pattern[i]) && !stringMap.has(arr[i])) {
            patternMap.set(pattern[i], arr[i]);
            stringMap.set(arr[i], pattern[i]);

            arr[i] = stringMap.get(arr[i]);
        } else {
            if (patternMap.get(pattern[i]) === arr[i]) {
                arr[i] = stringMap.get(arr[i]);
            }
        }
    }

    console.log("AfterArr: ", arr.join(''));

    return pattern === arr.join('');
};