




/**
 * Verifies if a given number is valid.
 *
 * @param {number} n - The number to be verified.
 * @returns {boolean} - Returns true if the number is valid.
 * @throws {Error} - Throws an error if the number is undefined, not a number, or less than 1.
 */


const verifyNumber = (n) => {
    if(n === undefined) throw new Error('The number is required')   
    if(typeof n !== 'number') throw new Error('Argument must be a number')
    return true
}

/**
 * Returns an array of numbers within a given range.
 *
 * @param {number} start - The starting number of the range.
 * @param {number} end - The ending number of the range.
 * @returns {number[]} - An array of numbers within the range (inclusive).
 */


const range = (start, end) => {
    if(!verifyNumber(start) || !verifyNumber(end)) return
    start = parseInt(start)
    end = parseInt(end)
    if(start === end) return [start]
    return [start, ...range(start + 1, end)]
}

module.exports = range

