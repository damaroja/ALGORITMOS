

const { verifyString, permutations } = require('./app');

describe('verifyString', () => {
  test('should throw an error if the string is undefined', () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow('Undefined string');
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => {
      verifyString(123);
    }).toThrow('Not a string');
  });

  test('should not throw an error if the string is valid', () => {
    expect(() => {
      verifyString('hello');
    }).not.toThrow();
  });
});

describe('permutations', () => {
  test('should return an array of all possible permutations of a string', () => {
    expect(permutations('abc')).toEqual(['abc', 'bac', 'bca', 'acb', 'cab', 'cba']);
  });

  test('should return an array with an empty string if the input string is empty', () => {
    expect(permutations('')).toEqual(['']);
  });

  test('should throw an error if the input is not a string', () => {
    expect(() => {
      permutations(123);
    }).toThrow('Not a string');
  });
});
