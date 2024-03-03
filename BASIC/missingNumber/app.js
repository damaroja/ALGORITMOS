
/**
 * Finds the missing number in an array of numbers.
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The missing number in the array.
 */

//Funcion que lee un array de numeros y regresa el numero que falta en el array

const findMissing = (arr) => {
  if (arr === undefined) throw new Error("Array is undefined");
  if (arr.length === 0) throw new Error("Array is empty");
  if (arr.length === 1) return 1;
  let n = arr.length + 1;
  let sum = (n * (n + 1)) / 2;
  let total = arr.reduce((acc, curr) => acc + curr);
  if(n === (sum - total)) return undefined;
  return sum - total;
};

module.exports = findMissing;


