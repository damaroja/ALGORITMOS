





/**
 * Counts the number of vowels in a given string.
 *
 * @param {string} string - The input string.
 * @returns {number} The count of vowels in the string.
 * @throws {Error} If the input string is undefined, not a string, or empty.
 */



const vocalCounter = (string) => {
    if(string === undefined) throw new Error('string must not be undefined');
    if(typeof string !== 'string') throw new Error('Initial string must be a string');
    if(string.length === 0) throw new Error('string must not be empty');
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}

module.exports = vocalCounter;
