/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let romMap = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }
    let result = 0;

    for(i=0; i<s.length; i++) {
        let current = romMap[s[i]];
        let next = romMap[s[i+1]];

        if(current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};