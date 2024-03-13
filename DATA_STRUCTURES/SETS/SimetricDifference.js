
/**
 * Calculates the symmetric difference between two arrays using sets.
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} - The symmetric difference between the two arrays.
 */
//Create a function thar show the symetric difference between two arrays using sets


const symetricDifference = (arr1, arr2) => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const difference = new Set([
    ...arr1.filter((x) => !setB.has(x)),
    ...arr2.filter((x) => !setA.has(x)),
  ]);

  return [...difference];
};

module.exports = symetricDifference;

//Use cases
console.log(symetricDifference([1, 2, 3], [5, 2, 1, 4])); // [3, 5, 4]
console.log(symetricDifference([1, 2, 3, 3], [5, 2, 1, 4])); // [3, 5, 4]
console.log(symetricDifference([1, 2, 3], [5, 2, 1, 4, 5])); // [3, 4, 5]
console.log(symetricDifference([1, 2, 3, 3], [5, 2, 1, 4, 5])); // [3, 4, 5]

//**********************************
test
//**********************************





test('calculate difference between arrays', () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [4, 5, 6, 7, 8];
  const setA = new Set(arr1);
  const setB = new Set(arr2);

  const difference = new Set([
    ...arr1.filter((x) => !setB.has(x)),
    ...arr2.filter((x) => !setA.has(x)),
  ]);

  expect(difference).toEqual(new Set([1, 2, 3, 6, 7, 8]));
});
