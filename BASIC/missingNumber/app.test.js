



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
