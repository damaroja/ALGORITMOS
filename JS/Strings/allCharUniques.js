




//Función que reciba un string y verifique si algun caracter esta repetido, en caso de estarlo true en caso contrario false

/**
 * Checks if a string contains repeated characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} - Returns true if the string contains repeated characters, otherwise returns false.
 * @throws {Error} - Throws an error if the input is undefined, an empty string, or not a string.
 */


const isRepeated = (str) => {
    if(str === undefined) throw new Error('No se puede ingresar un valor vacio');
    if (str === '') throw new Error('No se puede ingresar un valor vacio');
    if (typeof str !== 'string') throw new Error('El valor ingresado no es un string');
    let repeated = false;
    let strArr = str.split('');
    strArr.forEach((char, index) => {
        if (strArr.indexOf(char) !== index) {
            repeated = true;
        }
    });
    return repeated;
}

module.exports = isRepeated;

/* console.log(isRepeated('hola'));
console.log(isRepeated('hola mundo'));
console.log(isRepeated('hola mundo mundo'));
 */


//-----------------------------------------------------


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
