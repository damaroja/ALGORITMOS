





//create a function that verify if an array contains only integers or array of integers
// Time Complexity: O(n)


/**
 * Checks if an array contains only integers or nested arrays of integers.
 *
 * @param {Array} arr - The array to be checked.
 * @throws {Error} If the array is undefined, not an array, or empty.
 * @throws {Error} If the array contains non-integer values.
 * @returns {boolean} Returns true if the array contains only integers or nested arrays of integers.
 */


const isArrayOfIntegers = (arr) => {
    if (arr === undefined) {
        throw new Error('Array is required');
    }
    if (!Array.isArray(arr)) {
        throw new Error('Array is required');
    }
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    for (const item of arr) {
        if (Array.isArray(item)) {
        if (!isArrayOfIntegers(item)) {
            throw new Error('Array must contain only numbers');
        }
    } else if (!Number.isInteger(item)) {
        throw new Error('Array must contain only numbers');
    }
}
    return true;
}

/**
 * Flattens a nested array of integers into a single-level array.
*
* @param {Array} arr - The array to be flattened.
* @returns {Array} - The flattened array.
*/

//create a recursive function that flatten an array
// Time Complexity: O(n)
// Space Complexity: O(n)


const flatten = (arr) => {
    if (!isArrayOfIntegers(arr)) return;
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
  return result;
};

module.exports = { flatten, isArrayOfIntegers };

