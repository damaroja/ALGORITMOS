

const titleCaseCounter = require("./app");

test("titleCaseCounter should capitalize the first letter of each word in a string", () => {
  expect(titleCaseCounter("hello world")).toBe("Hello World");
  expect(titleCaseCounter("javascript is awesome")).toBe(
    "Javascript Is Awesome"
  );
  expect(titleCaseCounter("keep calm and code on")).toBe(
    "Keep Calm And Code On"
  );
});

test("titleCaseCounter should throw an error if the input is not a string", () => {
  expect(() => titleCaseCounter(123)).toThrow("The input is not a string");
  expect(() => titleCaseCounter(true)).toThrow("The input is not a string");
  expect(() => titleCaseCounter(null)).toThrow("The input is not a string");
  expect(() => titleCaseCounter([])).toThrow("The input is not a string");
  expect(() => titleCaseCounter({})).toThrow("The input is not a string");
  expect(() => titleCaseCounter(undefined)).toThrow(
    "The input is not a string"
  );
  expect(() => titleCaseCounter(null)).toThrow("The input is not a string");
  expect(() => titleCaseCounter(NaN)).toThrow("The input is not a string");
  expect(() => titleCaseCounter(Infinity)).toThrow("The input is not a string");
  expect(() => titleCaseCounter(-Infinity)).toThrow(
    "The input is not a string"
  );
});

test("titleCaseCounter should throw an error if the string is empty", () => {
  expect(() => titleCaseCounter("")).toThrow("The string is empty");
});
