







//Create a function that true is parentesis are balanced and false if not. Use stack data structure


/**
 * Checks if a string has balanced parentheses.
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if the string has balanced parentheses, false otherwise.
 */


const balancedParenthesis = (str) => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        } else {
            let last = stack.pop();
            if (str[i] !== map[last]) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}

module.exports = balancedParenthesis;


//Use cases
/* console.log(balancedParenthesis('(){}[]')); //true
console.log(balancedParenthesis('({[]})')); //true
console.log(balancedParenthesis('({[})')); //false
console.log(balancedParenthesis('({[}])')); //false
console.log(balancedParenthesis('({[})')); //false
 */



//**************************
test
//**************************
const balancedParenthesis = require('./app');

test('Check if parentheses are balanced', () => {
  expect(balancedParenthesis('(){}[]')).toBe(true);
  expect(balancedParenthesis('({[]})')).toBe(true);
  expect(balancedParenthesis('({[})')).toBe(false);
  expect(balancedParenthesis('({[}])')).toBe(false);
  expect(balancedParenthesis('({[})')).toBe(false);
  expect(balancedParenthesis(')')).toBe(false);
  expect(balancedParenthesis('()')).toBe(true);
  expect(balancedParenthesis(')(')).toBe(false);
  expect(balancedParenthesis('({)}')).toBe(false);
  expect(balancedParenthesis('({})')).toBe(true);
  expect(balancedParenthesis('({})')).toBe(true);
  expect(balancedParenthesis('')).toBe(true);
});
