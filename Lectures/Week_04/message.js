// // module.exports = "Hello, world!";
// module.exports.sayHello = () => {
//     console.log("Hello, world!");
// }

// //module.exports = sayHello;

module.exports.greet = (name) => {
    console.log(`Hello, ${name}!`);
}

module.exports.college = "Seneca College";
module.exports.course = "WEB700";
module.exports.sayHello = () => {
    console.log("Hello, world!");
}

function privateFunction() {
    console.log("This is a private function!");
}