




const {formatPhoneNumber, isNumber} = require("./app");

// Test for isNumber function
test("isNumber function should return true for valid phone numbers", () => {
  expect(isNumber("1234567890")).toBe(true);
  expect(isNumber("9876543210")).toBe(true);
});

test("isNumber function should throw an error for invalid phone numbers", () => {
  expect(() => isNumber(undefined)).toThrow("value is undefined");
  expect(() => isNumber(null)).toThrow("value is null");
  expect(() => isNumber("")).toThrow("value is empty");
  expect(() => isNumber("abc")).toThrow("value is not a number");
  expect(() => isNumber("123")).toThrow("value is not a valid phone number");
  expect(() => isNumber("12345678901")).toThrow("value is not a valid phone number");
  expect(() => isNumber("12345678901872563487253647")).toThrow("value is not a valid phone number");
});
