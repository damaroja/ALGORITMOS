






const removeDuplicates = require('./app');

test('removeDuplicates should remove duplicate elements from an array', () => {
  // Test case 1
  const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(removeDuplicates(arr1)).toEqual(expected1);

  // Test case 2
  const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(removeDuplicates(arr2)).toEqual(expected2);

  // Test case 3
  const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const expected3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(removeDuplicates(arr3)).toEqual(expected3);
});

test('removeDuplicates should throw an error if the argument is not an array', () => {
  // Test case 1
  const arr1 = 'not an array';
  expect(() => removeDuplicates(arr1)).toThrow('The argument must be an array');

  // Test case 2
  const arr2 = 123;
  expect(() => removeDuplicates(arr2)).toThrow('The argument must be an array');
});

test('removeDuplicates should throw an error if the array is empty', () => {
  const arr = [];
  expect(() => removeDuplicates(arr)).toThrow('The array is empty');
});

test('removeDuplicates should return the same array if it contains only one element', () => {
  const arr = [1];
  expect(removeDuplicates(arr)).toEqual(arr);
});

test('removeDuplicates should throw an error if the argument is undefined', () => {
    expect(() => removeDuplicates()).toThrow('The argument must not be undefined');
});
