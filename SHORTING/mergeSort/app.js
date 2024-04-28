




//Create a Merge sort algorithm called mergeSort
//Receive an array as input and
// return the sorted array.


function merge(left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  return result.concat(left, right)
}


function mergeSort(arr, repeated=false) {
  if (repeated) {
    arr = [...new Set(arr)]
  }
  if (arr.length <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
  

}

module.exports = mergeSort


//Complexity time: O(n log n)
//Complexity space: O(n)
//Max complexity time for complex numbers: O(n log n)
//Min complexity time for complex numbers: O(n log n)
//Average complexity time for complex numbers: O(n log n)

//Gime an example

console.log(mergeSort([2,5,83,56,2,57,90,26,58,45,7,2,55,99,33,65,38]))
console.log(mergeSort([2,5,83,56,2,57,90,26,58,45,7,2,55,99,33,65,38], true))

