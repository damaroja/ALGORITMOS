
const isRepeated = require('./app');

describe('isRepeated', () => {
  it('should return false for a string without repeated characters', () => {
    expect(isRepeated('hola')).toBe(false);
  });

  it('should return true for a string with repeated characters', () => {
    expect(isRepeated('hola mundo')).toBe(true);
  });

  it('should return true for a string with multiple repeated characters', () => {
    expect(isRepeated('hola mundo mundo')).toBe(true);
  });

  it('should throw an error if the input is undefined', () => {
    expect(() => isRepeated()).toThrow('No se puede ingresar un valor vacio');
  });

  it('should throw an error if the input is an empty string', () => {
    expect(() => isRepeated('')).toThrow('No se puede ingresar un valor vacio');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => isRepeated(123)).toThrow('El valor ingresado no es un string');
  });
});
