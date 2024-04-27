



//Create an alghoritm type Bubble Sort

//Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.

//Example:
//First Pass:
// ( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1.
// ( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4
// ( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.

//Second Pass:
// ( 1 4 2 5 8 ) –> ( 1 4 2 5 8 )
// ( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 )
//Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.

//Third Pass:
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )
// ( 1 2 4 5 8 ) –> ( 1 2 4 5 8 )

//The time complexity of bubble sort is O(n^2). In the worst case, the array is sorted in reverse order. In this case, for every element, it will compare to all the other elements in the array. This will result in n*(n-1)/2 comparisons. So the time complexity is O(n^2).

//The space complexity for bubble sort is O(1), because only a single additional memory space is required i.e. for temp variable.

//The above code is implemented in the app.js file.


//Implementation of Bubble Sort in JavaScript
 const bubbleSort = (arr) => {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr; 
}

let arr = [5, 1, 4, 2, 8];
let sortedArr = bubbleSort(arr);
console.log(sortedArr); //Output: [ 1, 2, 4, 5, 8 ]

//Complexity Analysis of Bubble Sort
//Time Complexity
//Best Case Complexity: O(n)
//If the list is already sorted then the complexity is O(n).
//Worst and Average Case Complexity: O(n*n).
//Space Complexity
//Space complexity is O(1) because an extra variable temp is used.
//Bubble Sort is not a practical sorting algorithm when the list is large. It will not be efficient in terms of time and space complexity. It is mainly used for educational purposes.


module.exports = { bubbleSort };
