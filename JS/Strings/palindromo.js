

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



//---------------------------------------------








const isPalindrome = require("./app");

test("isPalindrome should return true for palindromic strings", () => {
  expect(isPalindrome("racecar")).toBe(true);
  expect(isPalindrome("level")).toBe(true);
  expect(isPalindrome("madam")).toBe(true);
});

test("isPalindrome should return false for non-palindromic strings", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("world")).toBe(false);
  expect(isPalindrome("javascript")).toBe(false);
});

test("isPalindrome should throw an error if the string is not provided", () => {
  expect(() => {
    isPalindrome();
  }).toThrow("The string is required");
});

test("isPalindrome should throw an error if the input is not a string", () => {
  expect(() => {
    isPalindrome(123);
  }).toThrow("The string must be a string");
});

test("isPalindrome should return true for empty string", () => {
  expect(isPalindrome("")).toBe(true);
});

test("isPalindrome should return true for single character string", () => {
  expect(isPalindrome("a")).toBe(true);
});


