



//Create a function that show me what the cuadratic complexity is

/**
 * Calculates the cuadratic complexity of a given number.
 * @param {number} n - The input number.
 * @returns {number} - The result of the cuadratic complexity calculation.
 */


const cuadraticComplexity = (n) => {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++){
            result += 1;
        }
    }
    return result;
}


