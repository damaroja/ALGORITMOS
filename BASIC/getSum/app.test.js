
const suma = require('./app');

//test for positive numbers
test('adds 1 + 2 to equal 3', () => {
    expect(suma(1, 2)).toBe(3);
});

//test for negative numbers
test('adds -1 + -2 to equal -3', () => {
    expect(suma(-1, -2)).toBe(-3);
});

//test for positive and negative numbers
test('adds -1 + 2 to equal 1', () => {
    expect(suma(-1, 2)).toBe(1);
});

//test if a is not a number
test('if a is not a number', () => {
    expect(() => suma('a', 2)).toThrow('Error: a and b must be numbers');
});

//test if b is not a number
test('if b is not a number', () => {
    expect(() => suma(1, 'b')).toThrow('Error: a and b must be numbers');
});

//test if a and b are not numbers
test('if a and b are not numbers', () => {
    expect(() => suma('a', 'b')).toThrow('Error: a and b must be numbers');
});

//test if a = -a returns 0
test('if a = -a returns 0', () => {
    expect(suma(-1, 1)).toBe(0);
});

//test if a > b returns a positive number
test('if a > b returns a positive number', () => {
    expect(suma(2, 1)).toBeGreaterThan(0);
});

//test if a < b returns a negative number

//test if a = b and a>0 returns 2a
test('if a = b and a>0 returns 2a', () => {
    expect(suma(2, 2)).toBe(4);
}); 

//test if a = b and a<0 returns 2a
test('if a = b and a<0 returns 2a', () => {
    expect(suma(-2, -2)).toBe(-4);
});

//test if a = b and a=0 returns 0
test('if a = b and a=0 returns 0', () => {
    expect(suma(0, 0)).toBe(0);
});



