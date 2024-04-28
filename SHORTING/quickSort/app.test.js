


const quickSort = require('./app'); // Import the quickSort function

test('Sorts an array of numbers in ascending order', () => {
  expect(quickSort([3, 6, 8, 10, 1, 2, 1, 65, 34, 12, 67, 89, 45, 23])).toEqual([
    1, 1, 2, 3, 6, 8, 10, 12, 23, 34, 45, 65, 67, 89
  ]);
});

test('Sorts an empty array', () => {
  expect(quickSort([])).toEqual([]);
});

test('Sorts an array with one element', () => {
  expect(quickSort([5])).toEqual([5]);
});

test('Sorts an array with duplicates', () => {
  expect(quickSort([3, 3, 6, 8, 10, 1, 2, 1, 65, 34, 12, 67, 89, 45, 23])).toEqual([
    1, 1, 2, 3, 3, 6, 8, 10, 12, 23, 34, 45, 65, 67, 89
  ]);
});

test('Sorts an array with negative numbers', () => {
  expect(quickSort([-5, -3, -1, 0, 1, 2, 3, 4, 5])).toEqual([
    -5, -3, -1, 0, 1, 2, 3, 4, 5
  ]);
});
