/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let result = true;

    for(let i = 0; i<s.length; i++) {
        if(s[i] === ')') {
            if(stack.pop() !== '(') {
                result = false;
                break;
            }
        }

        if(s[i] === '}') {
            if(stack.pop() !== '{') {
                result = false;
                break;
            }
        }

        if(s[i] === ']') {
            if(stack.pop() !== '[') {
                result = false;
                break;
            }
        }

        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        }
    }

    if(stack.length > 0) {
        result = false;
    }

    return result;
};