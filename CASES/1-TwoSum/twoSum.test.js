



// Import the twoSum function
const {twoSum, twoSumArray} = require('./app');

// Define the test cases
describe('twoSum function', () => {
  test('should return the correct indices for a given array and sum', () => {
    // Test case 1
    const arr1 = [3, 2, 4];
    const k1 = 6;
    expect(twoSum(arr1, k1)).toEqual([1, 2]);

    const arr23 = [3, 1, 5, 7];
    const k23 = 8;
    expect(twoSum(arr23, k23)).toEqual([0, 2]);

    // Test case 3
    const arr31 = [1, 2, 3, 4, 5];
    const k31 = 6;
    expect(twoSum(arr31, k31)).toEqual([0, 4]);

    // Test case 4
    const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const k4 = 15;
    expect(twoSum(arr4, k4)).toEqual([4, 9]);

    // Test case 5
    const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const k5 = 56;
    expect(twoSum(arr5, k5)).toBeNull();
  });
});


describe('twoSumArray function', () => {
    test('should return the correct indices for a given array and sum', () => {
        // Test case 1
        const arr1 = [3, 2, 4];
        const k1 = 6;
        expect(twoSumArray(arr1, k1)).toEqual([[1, 2]]);

        const arr23 = [3, 1, 5, 7];
        const k23 = 8;
        expect(twoSumArray(arr23, k23)).toEqual([[0, 2], [1, 3]]);

        // Test case 3
        const arr31 = [1, 2, 3, 4, 5];
        const k31 = 6;
        expect(twoSumArray(arr31, k31)).toEqual([[0, 4], [1, 3]]);

        // Test case 4
        const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const k4 = 15;
        expect(twoSumArray(arr4, k4)).toEqual([[4, 9], [5, 8], [6, 7]]);
    })
})
