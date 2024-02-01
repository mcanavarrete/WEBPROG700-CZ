// Enforces strict mode for more secure JavaScript by catching common coding mistakes and "unsafe" actions.
"use strict"
console.log("Week 02")

// Function that demonstrates handling of optional parameters with default values to avoid NaN or undefined results.
function add(a, b, c){
    return a + (b || 0) + (c || 0) // If b or c is not provided, they default to 0.
}

// Function expressions define functions in a variable, useful for anonymous functions or closures.
var mul = function(a, b){
    return a * b // Returns the product of a and b.
}

// Demonstrates the use of the 'arguments' object which contains all arguments passed to the function.
function print1(){
    console.log(arguments) // Logs the 'arguments' object, which is array-like but not an actual array.
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]) // Logs each argument individually.
    }
}

// The rest parameter '...values' captures all passed arguments into an actual array, allowing for more flexible function definitions.
function print2(...values){
    console.log(values) // Logs the array of values passed to the function.
    for(var i = 0; i < values.length; i++){
        console.log(values[i]) // Logs each value in the array.
    }
}

// Demonstrates array operations such as push, pop, shift, and unshift for adding and removing elements.
var a = new Array() // Declares an empty array.
a.push(100) // Adds elements to the end of the array.
a.pop() // Removes the last element from the array and returns it.
a.shift() // Removes the first element from the array and returns it.
a.unshift() // Adds one or more elements to the beginning of the array.

// Global functions like parseInt and isNaN are used for converting strings to numbers and checking for NaN values, respectively.
let x = parseInt("101") // Converts the string "101" to the number 101.
if(isNaN(x)){
    console.log("x is not a number") // Checks if x is NaN (Not a Number).
}

// The Math object provides basic mathematical functions and constants.
x = Math.pow(10,2) // Calculates 10 to the power of 2.
x = Math.min(...a) // Finds the minimum value in array 'a' using the spread syntax.

// Demonstrates the use of the Date object to work with dates and times.
let today = new Date(); // Creates a new Date object representing the current date and time.

// JSON handling with JSON.stringify to convert JavaScript objects to JSON strings, and JSON.parse to convert JSON strings back to JavaScript objects.
let person = { id: 1, first_name: "Pritesh", last_name: "Patel" } // JavaScript object.
let json_person = JSON.stringify(person) // Converts 'person' to a JSON string.
let new_person = JSON.parse(json_person) // Converts 'json_person' back to a JavaScript object.

// Closure examples showing how functions can encapsulate and maintain their own scope of variables.
function networkCall(n, s, f){
    if(n >= 10){
        s() // Calls the success callback.
    }else{
        f() // Calls the failure callback.
    }
}

// Arrow functions provide a concise syntax for writing function expressions.
let sayHello = name => `Hello ${name}` // Arrow function returning a greeting string.

// String manipulation including accessing characters, using the forEach method on arrays, and string replacement.
let college_name = "Seneca College"
a.forEach(element => {
    console.log(element) // Logs each element of array 'a'.
});

// Unicode characters in strings demonstrated with escape sequences.
let core = "\u{48}" // Represents the letter 'H'.
let heart = "\u{2665}" // Represents the heart symbol '♥'.
