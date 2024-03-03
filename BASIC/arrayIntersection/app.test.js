

const interseccionArr = require('./app');

// Test case 1: Intersection of two arrays with common elements
test('Intersection of [1, 2, 3] and [2, 3, 4] should be [2, 3]', () => {
  expect(interseccionArr([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
});

// Test case 2: Intersection of two arrays with no common elements
test('Intersection of [1, 2, 3] and [4, 5, 6] should be an empty array', () => {
  expect(interseccionArr([1, 2, 3], [4, 5, 6])).toEqual([]);
});

// Test case 3: Intersection of two arrays with duplicate elements
test('Intersection of [1, 2, 2, 3] and [2, 2, 3, 4] should be [2, 2, 3]', () => {
  expect(interseccionArr([1, 2, 2, 3], [2, 2, 3, 4])).toEqual([2, 2, 3]);
});

// Test case 4: Intersection of two arrays with different data types
test('Intersection of [1, 2, 3] and ["2", "3", 4] should be an empty array', () => {
  expect(interseccionArr([1, 2, 3], ["2", "3", 4])).toEqual([]);
});

// Test case 5: Intersection of two empty arrays
test('Intersection of [] and [] should be an empty array', () => {
  expect(() => interseccionArr([], [])).toThrow('Ambos arreglos deben tener al menos un elemento');
});

// Test case 6: Intersection of undefined arrays
test('Intersection of undefined and [1, 2, 3] should throw an error', () => {
  expect(() => interseccionArr(undefined, [1, 2, 3])).toThrow('Ambos argumentos son requeridos');
});

// Test case 7: Intersection of arrays with no elements
test('Intersection of [] and [1, 2, 3] should throw an error', () => {
  expect(() => interseccionArr([], [1, 2, 3])).toThrow('Ambos arreglos deben tener al menos un elemento');
});

// Test case 7: Intersection of arrays with no elements
test('Intersection [1, 2, 3] y [] should throw an error', () => {
  expect(() => interseccionArr([1, 2, 3], [])).toThrow('Ambos arreglos deben tener al menos un elemento');
});



// Test case 8: Intersection of non-array arguments
test('Intersection of [1, 2, 3] and "2, 3, 4" should throw an error', () => {
  expect(() => interseccionArr([1, 2, 3], "2, 3, 4")).toThrow('Ambos argumentos deben ser arreglos');
});

//test para ver si el resultado es un arreglo
test('Intersection of [1, 2, 3] and [2, 3, 4] should be an array', () => {
  expect(interseccionArr([1, 2, 3], [2, 3, 4])).toBeInstanceOf(Array);
});
