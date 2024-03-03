





const vocalCounter = require("./app");

test("vocalCounter should return the correct count of vowels in a string", () => {
  expect(vocalCounter("hello")).toBe(2);
  expect(vocalCounter("world")).toBe(1);
  expect(vocalCounter("programming")).toBe(3);
    expect(vocalCounter("javascript java rub c c++ css")).toBe(6);
});

test("vocalCounter should throw an error if the input string is undefined", () => {
  expect(() => vocalCounter()).toThrow("string must not be undefined");
});

test("vocalCounter should throw an error if the input is not a string", () => {
  expect(() => vocalCounter(123)).toThrow("Initial string must be a string");
});

test("vocalCounter should throw an error if the input string is empty", () => {
  expect(() => vocalCounter("")).toThrow("string must not be empty");
});
