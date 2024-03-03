




const { verifyString, validateEmail } = require('./app');

describe('verifyString', () => {
  it('should throw an error if the string is undefined', () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow('Undefined string');
  });

  it('should throw an error if the string is empty', () => {
    expect(() => {
      verifyString('');
    }).toThrow('Empty string');
  });

  it('should throw an error if the input is not a string', () => {
    expect(() => {
      verifyString(123);
    }).toThrow('Not a string');
  });

  // Add more test cases if needed
});

describe('validateEmail', () => {
  it('should return true for a valid email address', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email@')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('invalid_email@v')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('@com')).toBe(false);
  });
  it('should return false for an invalid email address', () => {
    expect(validateEmail('66@com')).toBe(false);
  });

  it('should throw an error for an undefined email', () => {
    expect(() => validateEmail(undefined)).toThrow('Undefined string');
  });

  it('should throw an error for an empty email', () => {
    expect(() => validateEmail('')).toThrow('Empty string');
  });

  it('should throw an error for a non-string email', () => {
    expect(() => validateEmail(123)).toThrow('Not a string');
  });


});
