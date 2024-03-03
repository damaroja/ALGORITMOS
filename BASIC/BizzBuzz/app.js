




// ESta es una funcion que recorre desde el 1 hasta el numero que le pasemos como parametro e imprime Fizz si el numero es multiplo de 3, Buzz si es multiplo de 5 y FizzBuzz si es multiplo de 3 y 5, si no imprime el numero.



/**
 * Generates an array of numbers and strings based on the FizzBuzz game rules.
 *
 * @param {number} num - The number up to which the FizzBuzz sequence should be generated.
 * @returns {Array} - An array containing the FizzBuzz sequence.
 * @throws {Error} - If the parameter is undefined, not a number, or less than 2.
 */



const fizzBuzz = (num) => {
    if(num === undefined) throw new Error('El parametro es requerido');
    if(typeof num !== 'number') throw new Error('El parametro debe ser un numero');
    if(num < 2) throw new Error('El parametro debe ser mayor a 1');
    const result = new Array();
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    return result;
}


module.exports = fizzBuzz;
