"use strict"
console.log("Week 02")

//Handling NaN or undefined
function add(a, b, c){
    return a + (b || 0) + (c || 0)
}

var c = add(2, 4, 4)
console.log(`Sum : ${c}`)

c = add(2, 4)
console.log(`Sum : ${c}`)


//Function expression
var mul = function(a, b){
    return a * b
}

c = mul(2, 4)
console.log(`Mul : ${c}`)

//arguments global built-in object
function print1(){
    console.log(arguments)
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i])
    }
} 

print1(1, 2, 3, 4, 5)

function print2(...values){
    console.log(values)
    //console.log(arguments)
    for(var i = 0; i < values.length; i++){
        console.log(values[i])
    }
}

print2(10, 20, 30, 40, 50)

function print3(values){
    console.log(values)
    console.log(arguments)
    for(var i = 0; i < values.length; i++){
        console.log(values[i])
    }
}

print3([100, 200, 300, 400, 500], 20, 30, "hello")

// Wedensday Code cont.....
//var a = [100, 200]
var a = new Array()
a.push(100)
a.push(200)
a.push(300)

a[3] = 400

console.log(a)
console.log(a[0])
console.log(a[3])
console.log(a[4])

//a[0] = undefined
//console.log(a)
let r = a.pop()
console.log(a, r)
a.shift()
console.log(a)
a.unshift()
console.log(a)
console.log(a.length) //Property and not method

console.table(a)
console.dir(".")
console.warn("TEST warning")
console.error("TEST error")

//Global functions
//Sting to number
let x = parseInt("101")
//let x = parseFloat("101.0")
//let x = parseInt("a101")
if(isNaN(x)){
    console.log("x is not a number")
}else{
    console.log(x, typeof(x))
}

//let y = 10 / 0
let y = 10 / 2
if(isFinite(y)){
    console.log("x is a finite number")
}else{
    console.log("x is NOT a finite number")
}

//Math Object

console.log("Math")
x = Math.pow(10,2)
console.log(x)

x = Math.min(10, 20, 30, 40)
console.log(x)
x = Math.min(...a) //Array to individual values OR destructure array
console.log(x)
console.log(...a)

//Date
console.log("DATE")
let today = new Date();
console.log(Date())
console.log(today)
console.log(Date.now()) //long number date
console.log(today.getTime())
console.log(today.getDay())

//https://jsonplaceholder.typicode.com/
//JSON Handling
console.log("JSON Handling")
let person = {
    id: 1,
    first_name: "Pritesh",
    //first_name: "Patel",
    last_name: "Patel",
    address: {
        "city name": "Tor\"onto",
        country: "CA"
    },
    birth_date:{
        day: today.getDay(),
        month: today.getMonth(),
        year: today.getFullYear()
    }
}

console.log(person)
console.log(person.first_name)
console.log(person.address.city)

//Convert to JSON string OR JSON object
let json_person = JSON.stringify(person)
//json_person = json_person.replace("{", "[")
console.log(json_person)
console.log(json_person.id) //Not possilbe
console.log(json_person.first_name) //Not possilbe

//Convert JSON string OR JSON object to JavaScript Object
let new_person = JSON.parse(json_person)
console.log(new_person)
console.log(new_person.id) 
console.log(new_person.first_name)

//Closure
console.log("----- Closure -----")
let success = () => {
    console.log("SUCCESS")
}

let failure = function(){
    console.log("FAILURE")
}

function networkCall(n, s, f){
    console.log(`Network called ${n}`)
    if(n >= 10){
        s()
    }else{
        f()
    }
}

networkCall(3, success, failure)

//Another want anonymous function
networkCall(10, function(){
    console.log("I got SUCCEES")
}, function(){
    console.log("I got ERROR")
})

networkCall(10, () => {
    console.log("I got SUCCEES")
}, () => {
    console.log("I got ERROR")
})


//Arrow Function
function sayHello(){
    console.log("Hello World")
}

//Arroe
sayHello = () => {
    console.log("Hello World")
}

//More versions
function sayHello(name){
    console.log(`Hello ${name}`)
}

sayHello = (name) => {
    return `Hello ${name}`
}

sayHello = name => {
    return `Hello ${name}`
}

sayHello = name => {
        `Hello ${name}`
}

sayHello = name => `Hello ${name}`

//String

let college_name = "Seneca College"

//Only array
a.forEach(element => {
    console.log(element)
});

for(let c in college_name){
    console.log(c)
}
console.log(college_name[0])
console.log(college_name[2])
console.log(college_name[14])
//String are immutable / you can't change like array
//college_name[0] = 's'
console.log(college_name)
console.log(college_name.charAt(0))

college_name.replace("e", "3")
console.log(college_name)

//These will work
college_name = college_name.replace("e", "3")
console.log(college_name)

//MORE on string
let core = "\u{48}"
console.log(core)

let heart = "\u{2665}"
console.log(heart)

let copyright = "\u{00A9}"
console.log(copyright)
