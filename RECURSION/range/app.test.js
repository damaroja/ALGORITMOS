

const range = require('./app');

describe('range', () => {
  it('should return an array of numbers within the range (inclusive)', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(range(-5, 5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]);
  });

  it('should return an array with a single number if start and end are the same', () => {
    expect(range(1, 1)).toEqual([1]);
    expect(range(0, 0)).toEqual([0]);
    expect(range(-5, -5)).toEqual([-5]);
  });

  it('should throw an error if start or end is not a valid number', () => {
    expect(() => range('1', 5)).toThrow('Argument must be a number');
    expect(() => range(1, '5')).toThrow('Argument must be a number');
    expect(() => range(null, 5)).toThrow('Argument must be a number');
    expect(() => range(1, undefined)).toThrow('The number is required');
    expect(() => range(1)).toThrow('The number is required');
    expect(() => range({})).toThrow('Argument must be a number');
    expect(() => range([])).toThrow('Argument must be a number');
});  });
