

const { highestScore, wordScore, verifyString, scoreAlpha } = require("./app");

describe("verifyString", () => {
  test("verifyString should throw an error for undefined string", () => {
    expect(() => {
      verifyString(undefined);
    }).toThrow("Undefined string");
  });

  test("verifyString should throw an error for empty string", () => {
    expect(() => {
      verifyString("");
    }).toThrow("Empty string");
  });

  test("verifyString should throw an error for non-string input", () => {
    expect(() => {
      verifyString(123);
    }).toThrow("Not a string");
  });
});

describe("wordScore", () => {
  test("wordScore should return the score of a word", () => {
    expect(wordScore("HELLO")).toBe(8);
  });

  test("wordScore should return the score of a word", () => {
    expect(() => wordScore("")).toThrow("Empty string");
  });

  test("wordScore should return the score of a word", () => {
    expect(() => wordScore([])).toThrow("Not a string");
  });
});

describe("highestScore", () => {
  test("highestScore should return the highest scoring word", () => {
    expect(highestScore("HELLO WORLD")).toEqual({ word: "WORLD", score: 9 });
  });

  test("highestScore should return the highest scoring word", () => {
    expect(() => highestScore("")).toThrow("Empty string");
  });

  test("highestScore should return the highest scoring word", () => {
    expect(() => highestScore(123)).toThrow("Not a string");
  });

  test("highestScore should return the highest scoring word", () => {
    expect(() => highestScore()).toThrow("Undefined string");
  });

  test("highestScore should return the highest scoring word", () => {
    expect(() => highestScore([])).toThrow("Not a string");
  });

  test("highestScore should return the highest scoring word", () => {
    expect(
      highestScore(
        "En un lugar de la mancha de cuyo nombre no quiero acordarme"
      )
    ).toEqual({ word: "quiero", score: 15 });
  });
});
