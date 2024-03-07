

const { flatten, isArrayOfIntegers } = require('./app');

describe('isArrayOfIntegers', () => {
  test('should return true for an array of integers', () => {
    expect(isArrayOfIntegers([1, 2, 3])).toBe(true);
  });

  test('should return true for an array of nested arrays of integers', () => {
    expect(isArrayOfIntegers([[1], [2, 3], [4, [5, 6]]])).toBe(true);
  });

  test('should throw an error for an undefined array', () => {
    expect(() => {
      isArrayOfIntegers();
    }).toThrow('Array is required');
  });

  test('should throw an error for a non-array value', () => {
    expect(() => {
      isArrayOfIntegers('not an array');
    }).toThrow('Array is required');
  });

  test('should throw an error for an empty array', () => {
    expect(() => {
      isArrayOfIntegers([]);
    }).toThrow('Array is empty');
  });

  test('should throw an error for an array containing non-integer values', () => {
    expect(() => {
      isArrayOfIntegers([1, '2', [3]]);
    }).toThrow('Array must contain only numbers');
  });
});

describe('flatten', () => {
  test('should return a flattened array for a nested array of integers', () => {
    expect(flatten([[1], [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should throw an error for an undefined array', () => {
    expect(() => {
      flatten();
    }).toThrow('Array is required');
  });

  test('should throw an error for a non-array value', () => {
    expect(() => {
      flatten('not an array');
    }).toThrow('Array is required');
  });

  test('should throw an error for an empty array', () => {
    expect(() => {
      flatten([]);
    }).toThrow('Array is empty');
  });

  test('should throw an error for an array containing non-integer values', () => {
    expect(() => {
      flatten([1, '2', [3]]);
    }).toThrow('Array must contain only numbers');
  });
});
