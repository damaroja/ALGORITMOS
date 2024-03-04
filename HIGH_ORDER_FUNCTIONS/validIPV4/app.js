




/**
 * Verifies if a given string is valid.
 * @param {string} str - The string to be verified.
 * @throws {Error} If the string is undefined, empty, or not a string.
 */


const verifyString = (str) => {
    if(str === undefined) throw new Error('Undefined string');
    if(typeof str !== 'string') throw new Error('Not a string');
    if(str === '') throw new Error('Empty string');
}



/**
 * Checks if the given input string is a valid IPv4 address.
 *
 * @param {string} inputString - The input string to be checked.
 * @returns {boolean} - Returns true if the input string is a valid IPv4 address, otherwise returns false.
 * @throws {Error} - Throws an error if the input string is empty, null, or undefined.
 */

//funcion que comprueba si la direccion es ipv4

function isIPv4Address(inputString) {
  verifyString(inputString);
  let arr = inputString.split(".");
  if (arr.length !== 4) return false;
  return arr.every((element) => {
    const el = parseInt(element);
    return (
      typeof el === "number" &&
      el >= 0 &&
      el <= 255 &&
      el.toString() === element
    );
  });
}

module.exports = { isIPv4Address };


