/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let result = 0;
    let value = [];

    for(i=0; i<s.length; i++) {
        value.push(SymbolToValue(s[i]));
    }

    console.log(value);

    for(i=0; i<s.length; i++) {
        if(value[i] < value[i+1]) {
            result += value[i+1] - value[i];
            i += 1;
        } else {
            result += value[i];
        }
    }

    return result;
};

function SymbolToValue(symbol) {
    if(symbol === 'I') return 1;
    if(symbol === 'V') return 5;
    if(symbol === 'X') return 10;
    if(symbol === 'L') return 50;
    if(symbol === 'C') return 100;
    if(symbol === 'D') return 500;
    if(symbol === 'M') return 1000;
}