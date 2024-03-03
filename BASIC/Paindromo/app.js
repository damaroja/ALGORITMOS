





/**
 * Checks if a string is a palindrome.
 *
 * @param {string} str - The string to check.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 * @throws {Error} - Throws an error if the string is not provided or is not a string.
 */



const isPalindrome = (str) => {
    if (str === undefined) {
        throw new Error("The string is required");
    }
    if (typeof str !== "string") {
        throw new Error("The string must be a string");
    }
    if (str.length < 2) {
        return true;
    }
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

module.exports = isPalindrome;

