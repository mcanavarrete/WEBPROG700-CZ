console.log('Welcome to Week 03')

//Object literal
var student = {
    sid: 1,
    first_name: "Pritesh",
    last_name: "Patel",
    result: "Pass",
    printFullName: function(){
        console.log(`${this.first_name} ${this.last_name}`)
    }
}

student.display = function(){
    console.log('Hello')
    console.log(`Student ID: ${student.sid}`)
    console.log(`Student ID: ${this.sid}`)
}

student.sid = 100

console.log(student)
console.log(typeof(student))
student.display()
student.printFullName()