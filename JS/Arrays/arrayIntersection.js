







 // funcion que genera la interseccion de dos arreglos y que devuelve un nuevo arreglo con los elementos que se repiten en ambos arreglos.

/**
 * Finds the intersection of two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The intersection of the two arrays.
 * @throws {Error} - If either arr1 or arr2 is undefined.
 * @throws {Error} - If either arr1 or arr2 is an empty array.
 * @throws {Error} - If either arr1 or arr2 is not an array.
 */


const interseccionArr = (arr1, arr2) => {
    if (arr1 === undefined || arr2 === undefined) {
        throw new Error('Ambos argumentos son requeridos');
    }
    if (arr1.length === 0 || arr2.length === 0) {
        throw new Error('Ambos arreglos deben tener al menos un elemento');
    }
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('Ambos argumentos deben ser arreglos');
    }
    const arr3 = arr1.filter((value) => arr2.includes(value));
    return arr3;
}

module.exports = interseccionArr;


//--------------------------------------------------------




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



