

//Create a Quick sort implementation for an array of numbers.




/**
 * Quick sort implementation for an array of numbers.
 *
 * @param {Array} arr - The array of numbers to be sorted.
 * @param {Boolean} [repeated=false] - If true, removes duplicates from the array before sorting.
 * @returns {Array} - The sorted array.
 */

function quickSort(arr, repeated = false) {
  if (repeated) {
    arr = [...new Set(arr)];
  }
  if (arr.length <= 1) {
    return arr;
  }
  var pivot = arr[arr.length - 1];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

module.exports = quickSort;

//Complexity time: O(n log n)
//Complexity space: O(log n)
//Max complexity time: O(n log n)
//Min complexity time: O(n log n)
//Average complexity time: O(n log n)
//Max complexity space: O(n)
//Min complexity space: O(n)
//Average complexity space: O(log n)

console.log(quickSort([3, 6, 8, 10, 1, 2, 1, 65, 34, 12, 67, 89, 45, 23]));
