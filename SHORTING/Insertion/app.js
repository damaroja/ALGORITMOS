

/**
 * Sorts the elements of an array using the Insertion Sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @param {boolean} [del=false] - If true, removes duplicate elements from the array.
 * @returns {Array} - The sorted array.
 */
function insertionSort(arr, del = false) {
  if (del) {
    // Removes duplicate elements from the array using Set.
    arr = [...new Set(arr)];
  }
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    // Moves elements that are greater than the key to one position ahead.
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    // Inserts the key at its correct position.
    arr[j + 1] = key;
  }
  if (del) {
    // Converts the Set back to an Array.
    arr = [...arr];
  }
  return arr;
}

module.exports = insertionSort;

console.log(
  insertionSort(
    [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92],
    true
  )
);

// Test 1: Sorting an array of numbers in ascending order
let arr = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];

let sortedArr = insertionSort(arr); // [1,    1,   2,   2,   4,8,   32,  43,  43,  55,63,   92, 123, 123, 234,345, 5643 ]
console.log(sortedArr); //

// Test 2: Sorting a de-duplicated version of an array of numbers in ascending order
let dedupedArr = insertionSort(arr, true); //devuelve [1,   2,   4,  8, 32,  43,  55,  63, 92, 123, 234, 345, 5643]
console.log(dedupedArr);

// Test 3: An empty array should return an empty array
let emptyArr = insertionSort([]);
console.log(emptyArr); // Output: []

// Test 4: A single-element array should return the same array
let singleElemArr = insertionSort([5]);
console.log(singleElemArr); // Output: [5]
