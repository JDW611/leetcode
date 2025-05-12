/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /[^a-z0-9]/g;
    const words = s.toLowerCase().replace(regex, '');

    return words === [...words].reverse().join("")

};