console.log("Week 04 Module")

const express = require('express');
const messages = require('./message.js');
const stud = require('./student.js')
const operator = require('./operator.js')

console.log(messages);
console.log(stud);
console.log(operator.add(1,2));
console.log(operator.sub(1,2));
console.log(operator.div(1,2));
console.log(operator.mlu(1,2));