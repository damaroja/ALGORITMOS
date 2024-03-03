

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

//***********************************************


const firstNonRepeatingLetter = require('./app');

test('Finds the first non-repeating character in a string', () => {
  expect(firstNonRepeatingLetter('a')).toBe('a');
  expect(firstNonRepeatingLetter('stress')).toBe('t');
  expect(firstNonRepeatingLetter('moonmen')).toBe('e');
  expect(firstNonRepeatingLetter('abba')).toBe('');
});

test('Throws an error for undefined string', () => {
  expect(() => {
    firstNonRepeatingLetter();
  }).toThrow('Undefined string');
});

test('Throws an error for empty string', () => {
  expect(() => {
    firstNonRepeatingLetter('');
  }).toThrow('Empty string');
});

test('Throws an error for non-string input', () => {
  expect(() => {
    firstNonRepeatingLetter(123);
  }).toThrow('Not a string');
});


