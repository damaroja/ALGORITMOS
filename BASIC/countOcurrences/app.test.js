const countOcurrences = require('./app');



test('Counts the number of occurrences of a character in a string', () => {
  expect(countOcurrences('hello world', 'o')).toBe(2);
  expect(countOcurrences('github copilot', 'p')).toBe(1);
  expect(countOcurrences('programming', 'm')).toBe(2);
});

//test if the function is case sensitive
test('Counts the number of occurrences of a character in a string', () => {
  expect(countOcurrences('hello world', 'O')).toBe(0);
  expect(countOcurrences('github copilot', 'P')).toBe(0);
  expect(countOcurrences('programming', 'M')).toBe(0);
});

//test if the first argument is a string type
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences(123, 'o')).toThrow('Invalid input str');
  expect(() => countOcurrences([], 'p')).toThrow('Invalid input str');
  expect(() => countOcurrences({}, 'm')).toThrow('Invalid input str');
});

//test if the first argument is not an empty string
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences('', 'o')).toThrow('Empty string input');
  expect(() => countOcurrences(' ', 'p')).toThrow('Empty string input');
  expect(() => countOcurrences(' ', 'm')).toThrow('Empty string input');
}); 

//test if the second argument is a string type
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences('hello world', 0)).toThrow('Invalid input char');
  expect(() => countOcurrences('github copilot', [])).toThrow('Invalid input char');
  expect(() => countOcurrences('programming', {})).toThrow('Invalid input char');
}); 

//test if the second argument is not an empty string
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences('hello world', '')).toThrow('Invalid input char');
  expect(() => countOcurrences('github copilot', ' ')).toThrow('Invalid input char');
  expect(() => countOcurrences('programming', ' ')).toThrow('Invalid input char');
});

//test if the second argument is not more than one character
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences('hello world', 'oo')).toThrow('Invalid input char');
  expect(() => countOcurrences('github copilot', 'pp')).toThrow('Invalid input char');
  expect(() => countOcurrences('programming', 'mm')).toThrow('Invalid input char');
});

//test if the second argument is a empty string
test('Counts the number of occurrences of a character in a string', () => {
  expect(() => countOcurrences('hello world', ' ')).toThrow('Invalid input char');
  expect(() => countOcurrences('github copilot', ' ')).toThrow('Invalid input char');
  expect(() => countOcurrences('programming', ' ')).toThrow('Invalid input char');
});

//test if the number of occurrences of the character in the string is zero
test('Counts the number of occurrences of a character in a string', () => {
  expect(countOcurrences('hello world', 'z')).toBe(0);
  expect(countOcurrences('github copilot', 'z')).toBe(0);
  expect(countOcurrences('programming', 'z')).toBe(0);
});

//test if the number of occurrences of the character in the string is one
test('Counts the number of occurrences of a character in a string', () => {
  expect(countOcurrences('hello world', 'h')).toBe(1);
  expect(countOcurrences('github copilot', 'g')).toBe(1);
  expect(countOcurrences('programming', 'p')).toBe(1);
});

//test if the number of occurrences of the character in the string is more than zero

test('Counts the number of occurrences of a character in a string', () => {
    expect(countOcurrences('hello world', 'l')).toBeGreaterThan(0);
    expect(countOcurrences('github copilot', 'o')).toBeGreaterThan(0)
    expect(countOcurrences('programming', 'r')).toBeGreaterThan(0);
})






