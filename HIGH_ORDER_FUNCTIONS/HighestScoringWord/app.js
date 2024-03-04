

const scoreAlpha = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

const verifyString = (str) => {
  if (str === undefined) throw new Error("Undefined string");
  if (str === "") throw new Error("Empty string");
  if (typeof str !== "string") throw new Error("Not a string");
};


/**
 * Calculates the score of a word based on the scoreAlpha object.
 * @param {string} word - The word to calculate the score for.
 * @returns {number} The score of the word.
 */


const wordScore = (word) => {
  verifyString(word);
  let score = 0;
  word.split("").forEach((letter) => {
    score += scoreAlpha[letter];
  });
  return score;
};

const highestScore = (phrase) => {
  verifyString(phrase);
  let words = phrase.split(" ");
  let highest = 0;
  let highestWord = "";
  words.forEach((word) => {
    let score = wordScore(word);
    if (score > highest) {
      highest = score;
      highestWord = word;
    }
  });
  return { word: highestWord, score: highest };
};

/* console.log(
  highestScore("En un lugar de la mancha de cuyo nombre no quiero acordarme")
); // JavaScript
 */

module.exports = { highestScore, wordScore, verifyString, scoreAlpha };
