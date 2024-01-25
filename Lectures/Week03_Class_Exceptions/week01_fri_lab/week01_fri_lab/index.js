// Outputs a message to the console. Useful for debugging or providing information.
console.log('Welcome to Javascript programming...')

// Declares a variable 'x' with the 'var' keyword, giving it an initial numeric value of 100.
var x = 100

// Dynamically changes the type and value of 'x' to a string.
x = "Hello"

// Further changes 'x' to different types and values, demonstrating JavaScript's dynamic typing.
x = 90.50
x = true
x = undefined
x = Object

// Declares a variable 'y' with block scope using 'let', initializing it to 200.
let y = 200

// Declares a constant 'z' which cannot be reassigned, initializing it to 300.
const z = 300

// Implicitly declares a global variable 'a' (not recommended), initializing it to 100.
a = 100

// Outputs the current type of 'x', which would be 'function' because 'x' was last assigned to 'Object', a built-in constructor function.
console.log(typeof(x))

// Defines a function 'sum' that takes two parameters, adds them, and logs the result.
function sum(a, b){
    c = a + b // Implicitly declares a global variable 'c' (not recommended).
    console.log(`Sum : ${c}`)
}

// Outputs the type of the 'sum' function, which is 'function'.
console.log(typeof(sum))

// Calls the 'sum' function with 10 and 20 as arguments.
sum(10, 20)

// Defines a function 'greet' that returns a greeting message with a given name.
function greet(name){
    return `Hello, ${name}`
}

// Calls the 'greet' function with 'Pritesh' as an argument and logs the result.
console.log(greet('Pritesh'))

// Declares an array 'a' with various types of elements including numbers, strings, booleans, and functions.
var a = [1, 2, "A", "3", "Hello", true, false, 100, sum, greet]

// Logs the entire array to the console.
console.log(a)

// Logs specific elements of the array, demonstrating how to access array elements by index.
console.log(a[0]) // First element (1)
console.log(a[3]) // Fourth element ("3")
console.log(a[5]) // Sixth element (true)
console.log(a[8]) // Ninth element, expected to be 'sum' function, but comment indicates undefined, which is likely incorrect.

// Loops through the array 'a', logging each element's type and value.
for(i = 0; i < a.length; i++){
    let type // Declares a variable 'type' to hold the type of each element.

    // Uses a 'switch' statement to set 'type' based on the element's type, then logs the type and value.
    switch(typeof(a[i])){
        case 'number':
            type='number'
        break;

        case 'string':
            type="string"
        break;

        case 'boolean':
            type="boolean"
        break;

        case 'function':
            type="function"
        break;
    }

    console.log(`${type} : ${a[i]}`)
}
