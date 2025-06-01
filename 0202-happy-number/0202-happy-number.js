/**
 * @param {number} n
 * @return {boolean}
 */

var getSum = function (n) {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
}

var isHappy = function (n) {
    const check = new Set();

    while (n !== 1 && !check.has(n)) {
        check.add(n);
        n = getSum(n);
    }

    return n === 1;
};