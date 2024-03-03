





const calculator = require('./app');

// Test addition
test('Addition', () => {
    expect(calculator(2, 3, '+')).toBe(5);
});

//test if a>0 and b>0 then a+b>0
test('Addition', () => {
    expect(calculator(2, 3, '+')).toBeGreaterThan(0);
});

//test if a<0 and b<0 then a+b<0
test('Addition', () => {
    expect(calculator(-2, -3, '+')).toBeLessThan(0);
});

//test if a = -b then a+b = 0
test('Addition', () => {
    expect(calculator(-2, 2, '+')).toBe(0);
});

//test if a = 0 then a+b = b
test('Addition', () => {
    expect(calculator(0, 2, '+')).toBe(2);
});

//test if b = 0 then a+b = a
test('Addition', () => {
    expect(calculator(2, 0, '+')).toBe(2);
});

//test if result is a number
test('Addition', () => {
    expect(typeof calculator(2, 3, '+')).toBe('number');
});


// Test subtraction
test('Subtraction', () => {
    expect(calculator(5, 2, '-')).toBe(3);
});

//test if a < 0 and b > 0 then a-b < 0
test('Subtraction', () => {
    expect(calculator(-5, 2, '-')).toBeLessThan(0);
});

//test if a > 0 and b < 0 then a-b > 0
test('Subtraction', () => {
    expect(calculator(5, -2, '-')).toBeGreaterThan(0);
});

//test if a >0 and  = b = -a then result = 2a  
test('Subtraction', () => {
    expect(calculator(5, -5, '-')).toBe(10);
});

//test if a = 0 then a-b = -b
test('Subtraction', () => {
    expect(calculator(0, 2, '-')).toBe(-2);
});

//test if b = 0 then a-b = a
test('Subtraction', () => {
    expect(calculator(2, 0, '-')).toBe(2);
});

//test if result is a number
test('Subtraction', () => {
    expect(typeof calculator(2, 3, '-')).toBe('number');
});


// Test multiplication
test('Multiplication', () => {
    expect(calculator(4, 3, '*')).toBe(12);
});

//test if a > 0 and b > 0 then a*b > 0
test('Multiplication', () => {
    expect(calculator(4, 3, '*')).toBeGreaterThan(0);
});

//test if a < 0 and b < 0 then a*b > 0
test('Multiplication', () => {
    expect(calculator(-4, -3, '*')).toBeGreaterThan(0);
});

//test if a < 0 and b > 0 then a*b < 0
test('Multiplication', () => {
    expect(calculator(-4, 3, '*')).toBeLessThan(0);
});

//test if a > 0 and b < 0 then a*b < 0
test('Multiplication', () => {
    expect(calculator(4, -3, '*')).toBeLessThan(0);
});

//test if a = 0 then a*b = 0
test('Multiplication', () => {
    expect(calculator(0, 3, '*')).toBe(0);
});

//test if b = 0 then a*b = 0
test('Multiplication', () => {
    expect(calculator(4, 0, '*')).toBe(0);
});

//test if result is a number
test('Multiplication', () => {
    expect(typeof calculator(2, 3, '*')).toBe('number');
});

// Test division
test('Division', () => {
    expect(calculator(10, 2, '/')).toBe(5);
});

//test if a > 0 and b > 0 then a/b >= 0
test('Division', () => {
    expect(calculator(10, 2, '/')).toBeGreaterThanOrEqual(0);
});

//test if a < 0 and b < 0 then a/b >= 0
test('Division', () => {
    expect(calculator(-10, -2, '/')).toBeGreaterThanOrEqual(0);
});

//test if a < 0 and b > 0 then a/b <= 0
test('Division', () => {
    expect(calculator(-10, 2, '/')).toBeLessThanOrEqual(0);
});

//test if a > 0 and b < 0 then a/b <= 0
test('Division', () => {
    expect(calculator(10, -2, '/')).toBeLessThanOrEqual(0);
});

//test if a = 0 then a/b = 0
test('Division', () => {
    expect(calculator(0, 2, '/')).toBe(0);
});

//test if b = 0 then a/b = Error. Division by zero is not allowed.
test('Division', () => {
    expect(() => calculator(10, 0, '/')).toThrow('Error. Division by zero is not allowed.');
});

//test if result is a number
test('Division', () => {
    expect(typeof calculator(10, 2, '/')).toBe('number');
});


// Test invalid operator
test('Invalid operator', () => {
    expect(() => calculator(2, 3, '%')).toThrow('Invalid operator');
});

// Test invalid operands
test('Invalid operands', () => {
    expect(() => calculator('2', 3, '+')).toThrow('Invalid operands');
    expect(() => calculator(2, '3', '+')).toThrow('Invalid operands');
});

