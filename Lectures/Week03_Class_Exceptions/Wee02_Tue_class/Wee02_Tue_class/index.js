// Enforces strict mode which helps in catching common coding mistakes and unsafe actions (like using undeclared variables).
'use strict'

// Logs a message to the console, useful for indicating the start or purpose of the script.
console.log('Week 02 - JavaScript Arrays Examples')

// Array Declaration Examples
// Declares an array using the Array constructor with numeric elements.
var myArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9)

// Declares an array using array literal syntax with string elements.
var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob']

// Declares an array with mixed types of elements including numbers, strings, boolean, float, and an object.
var mixedArray = [1, 'John', true, 3.14, {name: 'John', age: 34}]

// Accessing Array Elements
// Logs entire arrays and specific elements to the console, demonstrating how to access array elements and properties like length.
console.log('myArray: ', myArray)
console.log('names: ', names)
console.log('names[0]: ', names[0]) // Accesses the first element of the 'names' array
console.log(`myArray[0]: ${myArray[0]}`) // Template literals for embedding expressions
console.log('names.length: ', names.length) // Logs the number of elements in the 'names' array

// Iterating Over an Array
// Uses a for loop to iterate over the 'names' array, logging each element to the console.
for (var i = 0; i < names.length; i++) {
  console.log(`names[${i}]: ${names[i]}`) // Template literals for readability
}

// Logs the type of the arrays, which in JavaScript is 'object' for arrays.
console.log(typeof(names)) // 'object'
console.log(typeof(myArray)) // 'object'

// Function to Check Data in Arrays
// Defines a function that iterates over 'myArray' and 'names' arrays to find matching elements based on input parameters 'a' and 'b'.
function checkData(a, b){
    for(var i = 0; i < myArray.length; i++) // Iterates over 'myArray'
    {
        // Checks if the current element in 'myArray' matches 'a' and the corresponding element in 'names' matches 'b'.
        if(myArray[i] == a && names[i] == b)
        {
            console.log(mixedArray[i]) // Logs the corresponding element from 'mixedArray'.
            return mixedArray[i] // Returns the matching element from 'mixedArray'.
        }
    }
    console.log('No Match Found') // Logs when no matching elements are found.
    return 'No Match Found' // Returns a string indicating no match was found.
}

// Calls the 'checkData' function with different sets of parameters to demonstrate its functionality.
checkData(1, 'John')
checkData(2, 'Mary')
checkData(3, 'Mark')
