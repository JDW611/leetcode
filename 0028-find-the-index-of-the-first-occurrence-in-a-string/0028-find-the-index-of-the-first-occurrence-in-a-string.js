/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let occurrence = haystack.indexOf(needle);

    if(occurrence < 0) {
        return  -1;
    }

    return occurrence;
};