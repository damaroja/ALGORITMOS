

const displayLikes = require('./app');

test('displayLikes should return "No one likes this" when given an empty array', () => {
  const result = displayLikes([]);
  expect(result).toBe('No one likes this');
});

test('displayLikes should return "{name} likes this" when given an array with one element', () => {
  const result = displayLikes(['John']);
  expect(result).toBe('John likes this');
});

test('displayLikes should return "{name1} and {name2} like this" when given an array with two elements', () => {
  const result = displayLikes(['John', 'Jane']);
  expect(result).toBe('John and Jane like this');
});

test('displayLikes should return "{name1}, {name2} and {name3} like this" when given an array with three elements', () => {
  const result = displayLikes(['John', 'Jane', 'Mike']);
  expect(result).toBe('John, Jane and Mike like this');
});

test('displayLikes should return "{name1}, {name2} and {n-2} others like this" when given an array with more than three elements', () => {
  const result = displayLikes(['John', 'Jane', 'Mike', 'Sarah', 'Tom']);
  expect(result).toBe('John, Jane and 3 others like this');
});

test('displayLikes should throw an error when given a non-array argument', () => {
  expect(() => {
    displayLikes('John');
  }).toThrow('No es un array');
});

test('displayLikes should throw an error when given an array with non-string elements', () => {
  expect(() => {
    displayLikes(['John', 123]);
  }).toThrow('No es un array de strings');
});

test('displayLikes should throw an error when no arguments are provided', () => {
  expect(() => {
    displayLikes();
  }).toThrow('No hay argumentos de entrada');
});
