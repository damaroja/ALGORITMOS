







/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string to be converted.
 * @returns {string} - The converted string in title case.
 * @throws {Error} - If the input is not a string or if the string is empty.
 */



const titleCaseCounter = str => {
    if (typeof str !== 'string') {
        throw new Error('The input is not a string');
    }
    if (str === '') {
        throw new Error('The string is empty');
    }  
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

module.exports = titleCaseCounter;
