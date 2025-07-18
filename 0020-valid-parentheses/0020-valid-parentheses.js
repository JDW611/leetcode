/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    for (let i = 0; i < s.length; i++) {
        if (brackets[s[i]]) {
            stack.push(brackets[s[i]]);
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};