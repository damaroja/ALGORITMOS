







// Create a function that takes 2 args, an array and a number. The function must to return the index of items of the array that sum to the number. For example, if the array is [1,2,3,4] and the number is 5, the function must to return [0,3]. The funcion must to use sets to solve the problem.

// The function must to return only the first pair of items that sum to the number. If no pair of items sum to the number, the function must to return [-1,-1]

// Example:

// findPair([1,2,3,4], 5) -> [0,3]
// findPair([1,2,3,4], 6) -> [1,3]
// findPair([1,2,3,4], 7) -> [2,3]

/**
 * Finds the index of items in an array that sum to a given number.
 * @param {number[]} arr - The input array.
 * @param {number} num - The target number.
 * @returns {number[]} - The index of the first pair of items that sum to the number. If no pair is found, returns [-1, -1].
 */

const findPair = (arr, num) => {
    let set = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (set.has(num - arr[i])) {
            return [arr.indexOf(num - arr[i]), i];
        }
        set.add(arr[i]);
    }
    return [-1, -1];
}

module.exports = findPair;


console.log(findPair([1,2,3,4], 5)); // [0,3]
console.log(findPair([1,2,3,4], 6)); // [1,3]
console.log(findPair([1,2,3,4], 7)); // [2,3]
console.log(findPair([1,2,3,4], 8)); // [-1,-1]



//*********************************
test
//*********************************

const findPair = require('./app');

test('findPair should return the index of items that sum to the number', () => {
  expect(findPair([1, 2, 3, 4], 5)).toEqual([1, 2]);
  expect(findPair([1, 2, 3, 4], 6)).toEqual([1, 3]);
  expect(findPair([1, 2, 3, 4], 7)).toEqual([2, 3]);
});

test('findPair should return [-1, -1] if no pair of items sum to the number', () => {
  expect(findPair([1, 2, 3, 4], 8)).toEqual([-1, -1]);
});



