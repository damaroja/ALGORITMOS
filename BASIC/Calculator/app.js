



/**
 * Performs arithmetic operations on two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {string} operator - The arithmetic operator (+, -, *, /).
 * @returns {number|string} - The result of the arithmetic operation or an error message.
 * @throws {Error} - If the operands are not numbers or the operator is invalid.
 */


const calculator = (a, b, operator) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Invalid operands');
    }
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                if (b === 0) {
                    throw new Error('Error. Division by zero is not allowed.');
                }
                return a / b;
            default:
                throw new Error('Invalid operator');
        }
    } 

module.exports = calculator;
