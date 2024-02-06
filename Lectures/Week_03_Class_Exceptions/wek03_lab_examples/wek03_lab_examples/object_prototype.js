function Student(sid, first_name, last_name){
    console.log(new.target)
    if(!new.target){
        throw Error('Use new Keyword to create object')
    }

    this.sid = sid
    this.first_name = first_name
    this.last_name = last_name
    this.printFullName = function(){
        console.log(`${this.first_name} ${this.last_name}`)
    }
}

Student.prototype.display = function(){
    console.log('Hello Men')
}

console.log(typeof(Student))
console.log(typeof(Object))

//var s1 = Student(1, 'Pritesh', 'Patel')
//console.log(typeof(s1))

var s2 = new Student(1, 'Pritesh', 'Patel')
console.log(typeof(s2))
s2.display()
s2.printFullName()