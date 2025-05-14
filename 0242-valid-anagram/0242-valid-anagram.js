/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map = new Map();

    if(s.length !== t.length) {
        return false;
    }

    for(let c of s) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    for(let c of t) {
        if(!map.get(c)) {
            return false;
        }

        map.set(c, map.get(c)-1)
    }

    return true;
};

// for(i=0; i<s.length; i++) {
//         t = t.replace(s[i],'');
//     }

//     return t === '';