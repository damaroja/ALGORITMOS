





//Create a function called longestConsecutiveSequence that takes in an array of numbers and returns the length of the longest consecutive sequence of numbers using sets


/**
 * Finds the length of the longest consecutive sequence in an array.
 *
 * @param {number[]} arr - The input array.
 * @returns {number} - The length of the longest consecutive sequence.
 */


const longestConsecutiveSequence = (arr) => {
    let set = new Set(arr);
    let longest = 0;
    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;
            while (set.has(current + 1)) {
                current++;
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
}

module.exports = longestConsecutiveSequence;


console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1])); // 9
console.log(longestConsecutiveSequence([1,2,0,1])); // 3
console.log(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10])); // 10
console.log(longestConsecutiveSequence([1,1,1,1,1,1,1,1,1,1])); // 1
console.log(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])); // 15
console.log(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000])); // 15



//**************************************
test
//**************************************


const longestConsecutiveSequence = require('./app');

test('Finds the length of the longest consecutive sequence in an array', () => {
  expect(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])).toBe(4);
  expect(longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1])).toBe(9);
  expect(longestConsecutiveSequence([1,2,0,1])).toBe(3);
  expect(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10])).toBe(10);
  expect(longestConsecutiveSequence([1,1,1,1,1,1,1,1,1,1])).toBe(1);
  expect(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])).toBe(15);
  expect(longestConsecutiveSequence([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000])).toBe(15);
});



