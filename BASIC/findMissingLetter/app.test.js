const letraFaltante = require('./app');

test('letraFaltante should return the missing letters in the array', () => {
  expect(letraFaltante(['a', 'b', 'c', 'e'])).toBe('dfghijklmnopqrstuvwxyz');
  expect(letraFaltante(['A', 'B', 'C', 'E'])).toBe('DFGHIJKLMNOPQRSTUVWXYZ');
  expect(letraFaltante(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'])).toBe('');
  expect(letraFaltante(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'])).toBe('');
});

test('letraFaltante should throw an error if the array is empty', () => {
  expect(() => letraFaltante([])).toThrow('Error: No se puede ingresar un arreglo vacio');
});

test('letraFaltante should throw an error if the array is undefined', () => {
  expect(() => letraFaltante()).toThrow('Error: No hay argumentos');
});

test('letraFaltante should throw an error if the array has only one element', () => {
  expect(() => letraFaltante(['a'])).toThrow('Error: No se puede ingresar un arreglo con un solo elemento');
});

test('letraFaltante should throw an error if the array has more than 26 elements', () => {
  expect(() => letraFaltante(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a'])).toThrow('Error: No se puede ingresar un arreglo con mas de 26 elementos');
});

test('letraFaltante should throw an error if the array has less than 3 elements', () => {
  expect(() => letraFaltante(['a', 'b'])).toThrow('Error: No se puede ingresar un arreglo con menos de 3 elementos');
});

test('letraFaltante should throw an error if the array contains non-letter elements', () => {
  expect(() => letraFaltante(['a', 'b', 'c', 1])).toThrow('Error: No se puede ingresar un arreglo con elementos que no sean letras');
});
