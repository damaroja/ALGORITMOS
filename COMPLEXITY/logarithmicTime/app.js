




//Create a function that show how logarythmic complexity is
// O(log n)


/**
 * Calculates the power of a base raised to an exponent.
 *
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent number.
 * @returns {number} The result of the base raised to the exponent.
 */


function findPower(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    if (exponent % 2 === 0) {
      const halfPower = findPower(base, exponent / 2);
      return halfPower * halfPower;
    } else {
      const halfPower = findPower(base, (exponent - 1) / 2);
      return base * halfPower * halfPower;
    }
  }

module.exports = {findPower}
