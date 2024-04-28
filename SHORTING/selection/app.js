




//Create a selection sort algorithm for arrays. Delete the repeated elements.


function selectionSort(arr, repetition=false) {
  if (repetition) {
    arr = [...new Set(arr)];
  }
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

module.exports = { selectionSort };

//************************************   */
//Complejidad tiempo: O(n^2)
//Coimplejidad espacial: O(1)
//complejidad maxima: O(n^2)
//Complejidad minima: O(n^2)
//Complejidad promedio: O(n^2)
//************************************   */


//Ejemplos de uso:

console.log(selectionSort([3,6,21,3,7,4,90,45,6,12], true));
