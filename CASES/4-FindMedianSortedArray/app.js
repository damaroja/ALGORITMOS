


/**
 * Finds the median of two sorted integer arrays.
 *
 * @param {number[]} arr1 - The first sorted integer array.
 * @param {number[]} arr2 - The second sorted integer array.
 *
 * @returns {number} The median of the two sorted integer arrays.
 */

const findMedianSortedArray = (arr1, arr2) => {
  const total = Array.from(new Set([...arr1, ...arr2])).sort();
  const anterior = total[(total.length / 2) - 1]
  const posterior = (total[total.length / 2]);
  if(total.length % 2 === 0){
    return (anterior + posterior) / 2;
  }
  return total[Math.floor(total.length / 2)];
};

module.exports = findMedianSortedArray;

console.log(findMedianSortedArray([1, 3], [7]));
