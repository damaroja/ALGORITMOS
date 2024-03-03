





/**
 * Checks if an array contains only integers.
 *
 * @param {Array} arr - The array to be checked.
 * @returns {boolean} - Returns true if the array contains only integers, otherwise false.
 * @throws {Error} - Throws an error if the array is undefined, not an array, empty, or contains non-integer elements.
 */


const isArrayOfIntegers = (arr) => {
    if(arr === undefined) throw new Error('Array is required');
    if(!Array.isArray(arr)) throw new Error('Array is required');
    if(arr.length === 0) throw new Error('Array is empty');
    if(arr.some((element) => {
        return typeof element !== 'number';
    })) throw new Error('Array must contain only numbers');
    return true;
}

/**
 * Calculates the sum of squares of even numbers in an array of integers.
 *
 * @param {Array} arreglo - The array of integers.
 * @returns {number} - The sum of squares of even numbers.
 */


const sumaCuadradosPares = (arreglo) => {
    if(isArrayOfIntegers(arreglo)){
        return arreglo.filter(item => item % 2 === 0)
            .map(item => item * item)
            .reduce((acc, item) => acc + item, 0);
    }
}

module.exports = {
    sumaCuadradosPares,
    isArrayOfIntegers
};
