

const insertionSort = require("./app"); // Import the insertionSort function

describe("insertionSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [
      1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ];
    const sortedArr = insertionSort(arr);
    expect(sortedArr).toEqual([
      1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643,
    ]);
  });

  it("should sort a de-duplicated version of an array of numbers in ascending order", () => {
    const arr = [
      1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
    ];
    const dedupedArr = insertionSort(arr, true);
    expect(dedupedArr).toEqual([
      1, 2, 4, 8, 32, 43, 55, 63, 92, 123, 234, 345, 5643,
    ]);
  });

  it("should return an empty array for an empty array", () => {
    const emptyArr = insertionSort([]);
    expect(emptyArr).toEqual([]);
  });

  it("should return the same array for a single-element array", () => {
    const singleElemArr = insertionSort([5]);
    expect(singleElemArr).toEqual([5]);
  });
});
