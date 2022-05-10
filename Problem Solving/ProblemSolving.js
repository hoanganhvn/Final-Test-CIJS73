// A.Problem Solving (30’)
// Prints help message to the console
// Returns a string
// 1.
function adjacentElementsProduct(inputArray) {
    let INPUT = inputArray;
    let frontNumber;
    let afterNumber;
    let maxMultiple = -Infinity;
    for (let i = 0; i < INPUT.length; i++) {
        frontNumber = INPUT[i];
        afterNumber = INPUT[i + 1];
        let result = frontNumber * afterNumber;
        if (result > maxMultiple) {
            maxMultiple = result;
        };
    };
    console.log(maxMultiple);
    return maxMultiple;
}
adjacentElementsProduct([256, 423, 567, 567, 987, 235, 132]);
adjacentElementsProduct([1, 2, 3, 4, 5, 6, 7]);
adjacentElementsProduct([9, 5, 3, 4, 8, 6, 7]);



// 2.
// Prints help message to the console
// Returns a string
function alternatingSums(array) {
    let even = 0;
    let odd = 0;
    let arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            even += array[i];
        } else {
            odd += array[i];
        }
    }
    arrayResult.push(even, odd);
    console.log(arrayResult);
}
alternatingSums([60, 40, 55, 75, 64]);
alternatingSums([12345, 32143, 5524355, 732455, 3556664,4345]);
alternatingSums([60, 40, 55, 75, 64,321435,32435,142356,2435]);