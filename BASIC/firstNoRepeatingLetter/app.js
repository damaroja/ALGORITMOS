


/**
 * Finds the first non-repeating character in a string.
 *
 * @param {string} s - The input string.
 * @returns {string} The first non-repeating character, or an empty string if none found.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') throw new Error('Empty string');
    if(typeof str !== 'string') throw new Error('Not a string');
}

const firstNonRepeatingLetter = (s) => {
    verifyString(s);
    let arr = s.split('');
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr.filter(x => x.toLowerCase() === arr[i].toLowerCase()).length === 1) {
            result = arr[i];
            break;
        }
    }
    return result;
}

module.exports = firstNonRepeatingLetter;

/* console.log(firstNonRepeatingLetter('a'))   
console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('abba')) */

;
