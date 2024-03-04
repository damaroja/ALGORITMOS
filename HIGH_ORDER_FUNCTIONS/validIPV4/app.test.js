

const { isIPv4Address } = require('./app');

describe('isIPv4Address', () => {
  test('should return true for valid IPv4 address', () => {
    expect(isIPv4Address('127.0.0.1')).toBe(true);
    expect(isIPv4Address('192.168.0.1')).toBe(true);
    expect(isIPv4Address('10.0.0.1')).toBe(true);
  });

  test('should return false for invalid IPv4 address', () => {
    expect(isIPv4Address('256.0.0.1')).toBe(false);
    expect(isIPv4Address('192.168.0.256')).toBe(false);
    expect(isIPv4Address('10.0.0.')).toBe(false);
    expect(() => isIPv4Address('')).toThrow('Empty string');
    expect(() => isIPv4Address()).toThrow('Undefined string');
    expect(() => isIPv4Address({})).toThrow('Not a string');
    expect(() => isIPv4Address([])).toThrow('Not a string');
  });
});
