






/**
 * Function to find the length of the longest substring without repeating characters.
 *
 * @param {string} str - The input string.
 * @returns {number} The length of the longest substring without repeating characters.
 */

const lengthOfLongestSubstring = str => {
    const l = str.length;
    let strTmp = ''
    max = 0;
    /**
     * Iterates through the input string.
     *
     * @param {number} i - The current index of the input string.
     */
    for (let i = 0; i < l; i++) {
        if (strTmp.includes(str[i])) {
            max = strTmp.length > max? strTmp.length : max;
            strTmp = str[i]
        } else {
            strTmp += str[i]
        }
    }
    return Math.max(max, strTmp.length)
}

//Complexity time: O(n^2)
//Complexity space: O(n)


module.exports = lengthOfLongestSubstring;

console.log(lengthOfLongestSubstring('wkak'))
