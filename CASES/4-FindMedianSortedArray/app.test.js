
/*
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |                   
 app.js   |     100 |      100 |     100 |     100 |                   
----------|---------|----------|---------|---------|-------------------
*/

  

const findMedianSortedArray = require('./app.js'); // Replace with the actual path to your file

describe('findMedianSortedArray', () => {
  test('should return the correct median for two sorted arrays with odd total length', () => {
    expect(findMedianSortedArray([1, 3], [2, 4])).toBe(2.5);
  });

  test('should return the correct median for two sorted arrays with even total length', () => {
    expect(findMedianSortedArray([1, 3, 5], [2, 4])).toBe(3);
  });

  test('should return the correct median for two sorted arrays with one empty array', () => {
    expect(findMedianSortedArray([], [2, 4])).toBe(3);
  });

  test('should return the correct median for two sorted arrays with one empty array and one array with one element', () => {
    expect(findMedianSortedArray([1], [2, 4])).toBe(2);
  });

  test('should return the correct median for two sorted arrays with one array containing only one element and the other array empty', () => {
    expect(findMedianSortedArray([1], [])).toBe(1);
  });

  test('should return the correct median for two sorted arrays with one array containing only one element and the other array containing two elements', () => {
    expect(findMedianSortedArray([1], [2, 3])).toBe(2);
  });
});
