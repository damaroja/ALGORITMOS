


/**
 * Returns the maximum number from an array of numbers.
 *
 * @param {number[]} numbersArray - The array of numbers.
 * @returns {number} The maximum number from the array.
 * @throws {Error} If the parameter is not an array, if the array is empty, or if the array contains non-numeric values.
 */



const getMaxNumber = (numbersArray) => {
    //test if numbersArray is an array
    if(!Array.isArray(numbersArray)){
        throw new Error('The parameter should be an array')
    }
    //test if the array is empty
    if(numbersArray.length === 0){
        throw new Error('The array should not be empty')
    }
    //test if the array contains only numbers
    if(numbersArray.some(isNaN)){
        throw new Error('The array should contain only numbers')
    }
    return Math.max(...numbersArray)
}

module.exports = getMaxNumber;
