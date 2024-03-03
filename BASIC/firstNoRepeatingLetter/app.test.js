

const firstNonRepeatingLetter = require('./app');

test('Finds the first non-repeating character in a string', () => {
  expect(firstNonRepeatingLetter('a')).toBe('a');
  expect(firstNonRepeatingLetter('stress')).toBe('t');
  expect(firstNonRepeatingLetter('moonmen')).toBe('e');
  expect(firstNonRepeatingLetter('abba')).toBe('');
});

test('Throws an error for undefined string', () => {
  expect(() => {
    firstNonRepeatingLetter();
  }).toThrow('Undefined string');
});

test('Throws an error for empty string', () => {
  expect(() => {
    firstNonRepeatingLetter('');
  }).toThrow('Empty string');
});

test('Throws an error for non-string input', () => {
  expect(() => {
    firstNonRepeatingLetter(123);
  }).toThrow('Not a string');
});
