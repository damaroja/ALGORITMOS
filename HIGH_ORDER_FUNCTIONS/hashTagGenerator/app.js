





/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} The capitalized string.
 * @throws {Error} If the input string is undefined or not a string.
 */


const capitalize = (str) => {
    verifyString(str);
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Verifies if a string is valid.
 * @param {string} str - The input string.
 * @returns {boolean} True if the string is valid, false otherwise.
 * @throws {Error} If the input string is undefined or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(str === '') return false
    if(typeof str !== 'string') throw new Error('Not a string');
}

/**
 * Generates a hashtag from a string.
 * @param {string} str - The input string.
 * @returns {string|boolean} The generated hashtag if it is within 140 characters, false otherwise.
 * @throws {Error} If the input string is undefined or not a string.
 */


const hashTag = (str) => {
    verifyString(str);
    const arrayWords = str.split(' ');
    const arrayWordsCap = arrayWords.map(word => capitalize(word));
    const hashTag = `#${arrayWordsCap.join('')}`;
    if(hashTag.length > 140) return false;
    return hashTag;
}


module.exports = { verifyString, hashTag}
