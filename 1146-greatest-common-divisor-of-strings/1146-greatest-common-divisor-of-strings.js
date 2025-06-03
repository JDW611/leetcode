/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';

    let getGCD = (x, y) => {
        if (!y) return x;
        return getGCD(y, x % y);
    }

    let divPoint = getGCD(str1.length, str2.length);

    return str1.slice(0, divPoint);
};