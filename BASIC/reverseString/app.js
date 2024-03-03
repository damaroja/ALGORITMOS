




/**
 * Reverses a given string.
 *
 * @param {string} string - The input string to be reversed.
 * @returns {string} - The reversed string.
 * @throws {Error} - If the input is not a string or if it is empty.
 */



const reverseString = (string) => {
    if (typeof string !== "string") {
        throw new Error("Input must be a string");
    }
    if(string.length === 0) {
        throw new Error("Input must not be empty");
    }
  return string.split("").reverse().join("");
};

module.exports = reverseString;
