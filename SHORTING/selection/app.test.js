



// Unit tests for the selectionSort function

const { selectionSort } = require('./app'); // Import the function

describe('selectionSort function', () => {
  it('should return sorted array without repetitions', () => {
    expect(selectionSort([3,6,21,3,7,4,90,45,6,12], true)).toEqual([3, 4, 6, 7, 12, 21, 45, 90]);
  });

  it('should return sorted array with repetitions', () => {
    expect(selectionSort([3,6,21,3,7,4,90,45,6,12])).toEqual([3, 3, 4, 6, 6, 7, 12, 21, 45, 90]);
  });

  it('should return sorted array with one element', () => {
    expect(selectionSort([10])).toEqual([10]);
  });

  it('should return sorted array with multiple elements', () => {
    expect(selectionSort([10, 20, 30, 40, 50])).toEqual([10, 20, 30, 40, 50]);
  });

  it('should return sorted array with negative numbers', () => {
    expect(selectionSort([-10, -20, -30, -40, -50])).toEqual([-50, -40, -30, -20, -10]);
  });

  it('should return sorted array with mixed numbers', () => {
    expect(selectionSort([10, -20, 30, -40, 50])).toEqual([-40, -20, 10, 30, 50]);
  });
});
