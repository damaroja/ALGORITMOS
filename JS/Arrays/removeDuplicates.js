






/**
 * Removes duplicate elements from an array.
*
* @param {Array} arr - The input array.
* @returns {Array} - A new array with duplicate elements removed.
* @throws {Error} - If the argument is not an array or if the array is empty.
*/


// [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9] => [1,2,3,4,5,6,7,8,9]

// [1,2,3,4,5,6,7,8,9] => [1,2,3,4,5,6,7,8,9]

// [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9] => [1,2,3,4,5,6,7,8,9]

const removeDuplicates = (arr) => {
    if(arr === undefined) {
        throw new Error('The argument must not be undefined');
    }
    if (!Array.isArray(arr)) {
        throw new Error('The argument must be an array');
    }
    if (arr.length === 0) {
        throw new Error('The array is empty');
    }
    if (arr.length === 1) {
        return arr;
    }
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

module.exports = removeDuplicates;


