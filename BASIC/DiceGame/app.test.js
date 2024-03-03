

const { diceGame, verifyNumber } = require("./app");

describe("verifyNumber", () => {
  test("should throw an error if the number is undefined", () => {
    expect(() => {
      verifyNumber();
    }).toThrow("The number is required");
  });

  test("should throw an error if the number is not a number", () => {
    expect(() => {
      verifyNumber("abc");
    }).toThrow("The number is required");
  });

  test("should throw an error if the number is less than 1", () => {
    expect(() => {
      verifyNumber(0);
    }).toThrow("The number is required");
  });
  test("should return true if the number is valid", () => {
    expect(verifyNumber(10)).toBe(true);
  });
});



describe("diceGame", () => {
  test("should return an object with the game results", () => {
    const gameResults = diceGame(100);
    expect(gameResults).toHaveProperty("results");
    expect(gameResults).toHaveProperty("win");
    expect(gameResults).toHaveProperty("lose");
    expect(gameResults).toHaveProperty("tryAgain");
  });

  test("should have the correct number of game results", () => {
    const gameResults = diceGame(100);
    expect(gameResults.results.length).toBe(100);
  });

  test("should have the correct number of wins, losses, and try agains", () => {
    const gameResults = diceGame(100);
    const { win, lose, tryAgain } = gameResults;
    const totalGames = win + lose + tryAgain;
    expect(totalGames).toBe(100);
  });
});
