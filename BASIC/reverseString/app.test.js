



const reverseString = require("./app");

test("reverseString should reverse the given string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
  expect(reverseString("javascript")).toBe("tpircsavaj");
});

test("reverseString should throw an error if the input is not a string", () => {
  expect(() => reverseString(123)).toThrow("Input must be a string");
  expect(() => reverseString(true)).toThrow("Input must be a string");
  expect(() => reverseString(null)).toThrow("Input must be a string");
    expect(() => reverseString(undefined)).toThrow("Input must be a string");
    expect(() => reverseString({})).toThrow("Input must be a string");
    expect(() => reverseString([])).toThrow("Input must be a string");
    expect(() => reverseString(() => {})).toThrow("Input must be a string");

});

test("reverseString should throw an error if the input is empty", () => {
  expect(() => reverseString("")).toThrow("Input must not be empty");
});
