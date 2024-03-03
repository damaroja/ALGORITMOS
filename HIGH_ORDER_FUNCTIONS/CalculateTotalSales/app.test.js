

const { isRightFormat, isArrayOfObjects, sumOfPrice } = require('./app');

describe('isArrayOfObjects', () => {
  test('should return true if the input is an array of objects', () => {
    const input = [{ name: 'Chocolate', price: 2.5, quantity: 5 }];
    const result = isArrayOfObjects(input);
    expect(result).toBe(true);
  });

  test('should return false if the input is an empty array', () => {
    const input = [];
    expect(() => isArrayOfObjects(input)).toThrow('array is required');
  });

  test('should throw an error if the input array is undefined', () => {
    expect(() => {
      isArrayOfObjects(undefined);
    }).toThrow('array is required');
  });
});

describe('isRightFormat', () => {
  test('should return true if all objects in the array have the right format', () => {
    const input = [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Candy', price: 1.5, quantity: 10 },
    ];
    const result = isRightFormat(input);
    expect(result).toBe(true);
  });

  test('should return false if any object in the array does not have the right format', () => {
    const input = [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Candy', price: -1.5, quantity: 10 },
    ];
    const result = isRightFormat(input);
    expect(result).toBe(false);
  });

  test('should throw an error if the input array is undefined', () => {
    expect(() => {
      isRightFormat(undefined);
    }).toThrow('array is required');
  });
});

describe('sumOfPrice', () => {
  test('should return the sum of the price of all objects in the array', () => {
    const input = [
      { name: 'Chocolate', price: 2.5, quantity: 5 },
      { name: 'Candy', price: 1.5, quantity: 10 },
    ];
    const tipo = 10
    const result = sumOfPrice(input, tipo);
    expect(result.BaseInponible).toEqual(27.5);
    expect(result.total).toEqual(30.25);
  });


  test('should throw an error if the input array is undefined', () => {
    expect(() => {
      sumOfPrice(undefined, 10);
    }).toThrow('array is required');
  });

  test('should throw an error if the input number is undefined', () => {
    expect(() => {
      sumOfPrice([{ name: 'Chocolate', price: 2.5, quantity: 5 }], undefined);
    }).toThrow('The number is required');
  });
  
  test('should throw an error if the input number is undefined', () => {
    expect(() => {
      sumOfPrice([{ name: 'Chocolate', price: 2.5, quantity: 5 }], 0);
    }).toThrow('Number must be greater than 0');
  });

})
