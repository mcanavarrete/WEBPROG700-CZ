console.log("Week03 - Objects, Class and Exceptions")
const student1 = {   // Object
    studentID: 1,
    name: "John",
    age: 20,
    isActive: true,
    course: "Web Programming",

    display: function() {
        console.log("Student ID: " + this.studentID)
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Active: " + this.isActive)
        console.log("Course: " + this.course)
    },

    print: () => {
        console.log("----------------------------------")
        console.log("Student ID: " + this.studentID)
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Active: " + this.isActive)
        console.log("Course: " + this.course)
    },
    showThis: function() {
        console.log(this)
    }
}
console.log(student1)
student1.display()
student1.print()

// const student2 = {   // Object  
//     sid: 2,
//     fullname: "Mary",
//     age: 21,
//     isActive: false,
//     course: "Web Programming"
// }

class Student {
    constructor(sid, fullname, age, isActive, course="Web Programming") {
        this.studentID = sid
        this.name = fullname
        this.age = age
        this.isActive = isActive
        this.course = course
    }

    display() {//display = function() {
        console.log("----------------------------------")
        console.log("Student ID: " + this.studentID)
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Active: " + this.isActive)
        console.log("Course: " + this.course)
    }

    //arrow function
    print = () => {
        console.log("----------------------------------")
        console.log("Student ID: " + this.studentID)
        console.log("Name: " + this.name)
        console.log("Age: " + this.age)
        console.log("Active: " + this.isActive)
        console.log("Course: " + this.course)
    }

    showThis() {
        console.log(this)
    }
}

var s1 = new Student(1, "John", 20, true)
s1.display()

var s2 = new Student(2, "Mary", 21, false, "Python Programming")
s2.display()

s1.print()

console.log(this)
student1.showThis()
s1.showThis()