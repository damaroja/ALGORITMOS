



const { sumaCuadradosPares, isArrayOfIntegers } = require('./app');

describe('isArrayOfIntegers', () => {
  test('should return true if the array contains only integers', () => {
    expect(isArrayOfIntegers([1, 2, 3])).toBe(true);
  });

  test('should throw an error if the array is undefined', () => {
    expect(() => {
      isArrayOfIntegers();
    }).toThrow('Array is required');
  });

  test('should throw an error if the input is not an array', () => {
    expect(() => {
      isArrayOfIntegers('not an array');
    }).toThrow('Array is required');
  });

  test('should throw an error if the array is empty', () => {
    expect(() => {
      isArrayOfIntegers([]);
    }).toThrow('Array is empty');
  });

  test('should throw an error if the array contains non-integer elements', () => {
    expect(() => {
      isArrayOfIntegers([1, 2, '3']);
    }).toThrow('Array must contain only numbers');
  });
});

describe('sumaCuadradosPares', () => {
  test('should calculate the sum of squares of even numbers in the array', () => {
    expect(sumaCuadradosPares([1, 2, 3, 4, 5, 6])).toBe(56);
  });

  test('should return undefined if the input array is not valid', () => {
    expect(() => sumaCuadradosPares()).toThrow('Array is required');
  });
});
