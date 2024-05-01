


//Dado un array de enteros, y un entero k, retornar el indice de dos enteros del array que suman k.

/*
The selected code is a JavaScript function named twoSum that takes an array of integers arr and an integer k as input parameters. The function's purpose is to find and return the indices of two integers in the array that sum up to k.

The function uses nested loops to iterate through all possible pairs of integers in the array. For each pair, it checks if the sum of the two integers is equal to k. If a pair is found that satisfies this condition, the function immediately returns an array containing the indices of the two integers.

If no such pair is found after iterating through all possible pairs, the function returns null.

Here's a breakdown of the code:

1.
The function twoSum is defined with two parameters: arr (an array of integers) and k (an integer).
2
A nested loop is used to iterate through all possible pairs of integers in the array. The outer loop iterates through each integer in the array, starting from the first element (index 0). The inner loop starts from the next element after the current element in the outer loop (index i + 1).
3.
Inside the inner loop, the sum of the current integer from the outer loop (arr[i]) and the current integer from the inner loop (arr[j]) is calculated.
4.
If the sum of the two integers is equal to k, the function immediately returns an array containing the indices of the two integers ([i, j]).
5.
If no pair of integers is found that sums up to k, the function returns null.
*/ 



/**
 * Given an array of integers and an integer k, returns the indices of two integers in the array that sum up to k.
 *
 * @param {Array} arr - The input array of integers.
 * @param {Number} k - The target sum of the two integers.
 * @returns {Array} - An array containing the indices of the two integers that sum up to k, or null if no such pair is found.
 */

function twoSum(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                return [i, j];
            }
        }
    }
    return null;
}

//Dado un array de enteros, y un entero k, retornar un array de pares de indices que suman k.


/**
 * Given an array of integers and an integer k, returns an array of pairs of indices that sum up to k.
 *
 * @param {Array} arr - The input array of integers.
 * @param {Number} k - The target sum of the two integers.
 * @returns {Array} - An array containing arrays of indices that sum up to k, or an empty array if no such pairs are found.
 */

function twoSumArray(arr, k) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                result.push([i, j]);
            }
        }
    }
    return result;
}




module.exports = {twoSum, twoSumArray};




