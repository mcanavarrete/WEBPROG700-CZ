class Student{
    #sid //Private

    constructor(sid, fnm, lnm)
    {
        this.#sid = sid
        this.first_name = fnm
        this.last_name = lnm
    }

    print(){
        console.log('Hello BOys!!!')
    }

    display = function(){
        console.log('Hello')
    }

    //Arrow function syntax
    printFullName = () => {
        console.log(`${this.first_name} ${this.last_name}`)
    }
    
}

var s1 = new Student(1, 'Pritesh', 'Patel')
console.log(typeof(s1))
console.log(s1)
s1.display()
console.log(s1.sid)//Private will be undefined
console.log(s1.first_name)
s1.printFullName()