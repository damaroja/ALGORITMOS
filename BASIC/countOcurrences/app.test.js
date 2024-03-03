


/**
 * Counts the number of occurrences of a character in a string.
 * 
 * @param {string} str - The input string.
 * @param {string} char - The character to count occurrences of.
 * @returns {number} - The number of occurrences of the character in the string.
 */
const countOcurrences = (str, char) => {
    if (typeof str !== 'string') {
        throw new Error('Invalid input str');
    }
    if(str.trim() === ''){
        throw new Error('Empty string input');
    }
    if (typeof char !== 'string') {
        throw new Error('Invalid input char');
    }
    if(char.length > 1 || char.trim() === ''){
        throw new Error('Invalid input char');
    }
    return str.split(char).length - 1;
}


module.exports = countOcurrences;
