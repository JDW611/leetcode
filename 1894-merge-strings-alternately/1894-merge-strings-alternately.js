/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = [];
    let minLength = Math.min(word1.length, word2.length)

    for (i = 0; i < minLength; i++) {
        result.push(word1[i], word2[i]);
    }

    if (word1.length > word2.length) {
        result = result.concat(word1.slice(minLength));
    } else if(word2.length > word1.length) {
        result = result.concat(word2.slice(minLength));
    }

    return result.join('');
};