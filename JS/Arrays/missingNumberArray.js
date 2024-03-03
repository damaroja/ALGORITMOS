

/**
 * Finds the missing number in an array of numbers.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The missing number in the array.
 */

//Funcion que lee un array de numeros y regresa el numero que falta en el array

const findMissing = (arr) => {
  if (arr === undefined) throw new Error("Array is undefined");
  if (arr.length === 0) throw new Error("Array is empty");
  if (arr.length === 1) return 1;
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let total = arr.reduce((acc, curr) => acc + curr);
  if(n === (sum - total)) return undefined;
  return sum - total;
};

module.exports = findMissing;



//************************************


const findMissing = require('./app');

describe('findMissing', () => {
  it('should return the missing number in the array', () => {
    expect(findMissing([1, 2, 4, 5])).toBe(3);
    expect(findMissing([10, 5, 3, 1, 6, 8, 2, 9, 7])).toBe(4);
    expect(findMissing([2, 3, 1, 5])).toBe(4);
  });

  it('should return undefined if no number is missing', () => {
    expect(findMissing([1, 2, 3, 4, 5])).toBe(undefined)
    expect(findMissing([10, 5, 3, 1, 6, 8, 2, 9, 7, 4])).toBe(undefined)
    expect(findMissing([2, 3, 1, 4, 5])).toBe(undefined)
  });

  it('should throw an error if the array is empty', () => {
    expect(() => findMissing([])).toThrow("Array is empty");
  });

  it('should throw an error if the array is undefined', () => {
    expect(() => findMissing(undefined)).toThrow("Array is undefined");
  });

  it('should return 1 if the array has only one element', () => {
    expect(findMissing([1])).toBe(1);
  });
});
