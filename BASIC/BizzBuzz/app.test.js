








const fizzBuzz = require('./app');

describe('fizzBuzz', () => {
  test('should throw an error if no number is provided', () => {
    expect(() => fizzBuzz()).toThrow('El parametro es requerido');
  });

  test('should throw an error if the argument is not a number', () => {
    expect(() => fizzBuzz('a')).toThrow('El parametro debe ser un numero');
  });

  test('should throw an error if the argument is less than 2', () => {
    expect(() => fizzBuzz(1)).toThrow('El parametro debe ser mayor a 1');
  });

  test('should return an array of 2 elements if the argument is 2', () => {
    expect(fizzBuzz(2)).toEqual([1, 2]);
  });

  test('should return an array of 3 elements if the argument is 3', () => {
    expect(fizzBuzz(3)).toEqual([1, 2, 'Fizz']);
  });

  test('should return an array of 5 elements if the argument is 5', () => {
    expect(fizzBuzz(5)).toEqual([1, 2, 'Fizz', 4, 'Buzz']);
  });

  test('should return an array of 15 elements if the argument is 15', () => {
    expect(fizzBuzz(15)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ]);
  });

  test('should return an array of 100 elements if the argument is 100', () => {
    expect(fizzBuzz(100)).toHaveLength(100);
  });
})

