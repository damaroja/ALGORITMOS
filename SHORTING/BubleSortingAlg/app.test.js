

const { bubbleSort } = require('./app');

describe('bubbleSort', () => {
  it('should sort an array in ascending order', () => {
    const arr = [5, 3, 8, 2, 1];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
  });

  it('should handle an empty array', () => {
    const arr = [];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const arr = [42];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([42]);
  });

  it('should handle an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle an array with duplicate elements', () => {
    const arr = [5, 3, 8, 2, 1, 5, 3];
    const sortedArr = bubbleSort(arr);
    expect(sortedArr).toEqual([1, 2, 3, 3, 5, 5, 8]);
  });
});
