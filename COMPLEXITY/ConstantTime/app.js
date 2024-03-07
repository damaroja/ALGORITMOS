





//Create a function that show how the constant time complexity is O(1)
//Explain your answer and each step to do it

//Answer: The constant time complexity is O(1) because the time it takes to execute the function is constant, regardless of the size of the input. The function below takes an array as an argument and returns the first element of the array. The time it takes to execute the function is constant because it only returns the first element of the array, regardless of the size of the array. Therefore, the time complexity of the function is O(1).

//Step 1: Create a function that takes an array as an argument

//Step 2: Return the first element of the array

//Step 3: The time it takes to execute the function is constant because it only returns the first element of the array, regardless of the size of the array

//Step 4: Therefore, the time complexity of the function is O(1)

//Step 5: The function below demonstrates the constant time complexity of O(1)


const constantTime = (arr) => {
    return arr[0];
}

//Create a function that repeat the above function 100 times and show me the average time


const repeatFunction = (arr) => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        const t1 = performance.now();
        constantTime(arr);
        const t2 = performance.now();
        sum += t2 - t1;
    }
    return sum / 100;
}

console.log(repeatFunction([1, 2, 3, 4, 5]));
