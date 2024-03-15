






//create a function in js thar reverse a string. Use a stack to do it.


/**
 * Reverses a given string.
 *
 * @param {string} str - The string to be reversed.
 * @returns {string} The reversed string.
 */


const reverseString = (str) => {
    let stack = []
    let reversed = ''
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }
    while (stack.length > 0) {
        reversed += stack.pop()
    }
    return reversed
}

module.exports = reverseString

//Case uses
/* console.log(reverseString('hello')) // olleh
console.log(reverseString('world')) // dlrow
console.log(reverseString('javascript')) // tpircsavaj
console.log(reverseString('stack')) // kcats
console.log(reverseString('queue')) // euuq
console.log(reverseString('r')) //'' */

//**************************
test
//**************************

const reverseString = require('./app');

test('Reverse string "hello"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reverse string "world"', () => {
  expect(reverseString('world')).toBe('dlrow');
});

test('Reverse string "javascript"', () => {
  expect(reverseString('javascript')).toBe('tpircsavaj');
});

test('Reverse string "stack"', () => {
  expect(reverseString('stack')).toBe('kcats');
});

test('Reverse string "queue"', () => {
  expect(reverseString('queue')).toBe('eueuq');
});

test('Reverse string "r"', () => {
  expect(reverseString('r')).toBe('r');
});

test('Reverse string ""', () => {
  expect(reverseString('')).toBe('');
});



