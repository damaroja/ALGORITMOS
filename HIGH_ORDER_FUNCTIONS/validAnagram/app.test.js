





const { verifyString, isAnagram} = require('./app');

describe('verifyString', () => {
    test('verifyString should throw an error for undefined string', () => {
        expect(() => {
          verifyString(undefined);
        }).toThrow('Undefined string');
      });
      
      test('verifyString should throw an error for empty string', () => {
        expect(() => {
          verifyString('');
        }).toThrow('Empty string');
      });
      
      test('verifyString should throw an error for non-string input', () => {
        expect(() => {
          verifyString(123);
        }).toThrow('Not a string');
      });
});


describe('isAnagram', () => {
    test('isAnagram should return true for "Amor" and "Roma"', () => {
        expect(isAnagram('Amor', 'Roma')).toBe(true);
      });
      
      test('isAnagram should return false for "Hola" and "Hello"', () => {
        expect(isAnagram('Hola', 'Hello')).toBe(false);
      });
      
      test('isAnagram should return true for "Hello" and "Hello"', () => {
        expect(isAnagram('Hello', 'Hello')).toBe(true);
      });
      
      test('isAnagram should return true for "Hello" and "hello"', () => {
        expect(isAnagram('Hello', 'hello')).toBe(true);
      });
      test('isAnagram should throw error when str1 is empty"', () => {
        expect(() => {
          isAnagram('', 'hello');
        }).toThrow('Empty string');
      });
        test('isAnagram should throw error when str2 is empty"', () => {
            expect(() => {
            isAnagram('hello', '');
            }).toThrow('Empty string');
        }); 
        test('isAnagram should throw error when str1 is undefined"', () => {
            expect(() => {
            isAnagram(undefined, 'hello');
            }).toThrow('Undefined string');
        });
        test('isAnagram should throw error when str2 is undefined"', () => {
            expect(() => {
            isAnagram('hello', undefined);
            }).toThrow('Undefined string');
        });
        test('isAnagram should throw error when str1 is not a string"', () => {
            expect(() => {
            isAnagram(123, 'hello');
            }).toThrow('Not a string');
        });
        test('isAnagram should throw error when str2 is not a string"', () => {
            expect(() => {
            isAnagram('hello', 123);
            }).toThrow('Not a string');
        })
        test('isAnagram should throw error when str1 is str number"', () => {
            expect(
            isAnagram('123', '123')).toBe(true);
        })
});     

