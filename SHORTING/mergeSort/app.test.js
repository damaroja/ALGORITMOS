


// Import the mergeSort function
const mergeSort = require("./app");

// Test cases for the mergeSort function
describe("mergeSort function", () => {
  test("should return sorted array", () => {
    expect(
      mergeSort([2, 5, 83, 56, 2, 57, 90, 26, 58, 45, 7, 2, 55, 99, 33, 65, 38])
    ).toEqual([2, 2, 2, 5, 7, 26, 33, 38, 45, 55, 56, 57, 58, 65, 83, 90, 99]);
  });

  test("should return sorted array with unique elements", () => {
    expect(
      mergeSort(
        [2, 5, 83, 56, 2, 57, 90, 26, 58, 45, 7, 2, 55, 99, 33, 65, 38],
        true
      )
    ).toEqual([2, 5, 7, 26, 33, 38, 45, 55, 56, 57, 58, 65, 83, 90, 99]);
  });

  test("should handle empty array", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("should handle array with one element", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("should handle array with two elements", () => {
    expect(mergeSort([1, 2])).toEqual([1, 2]);
  });
});
1;
