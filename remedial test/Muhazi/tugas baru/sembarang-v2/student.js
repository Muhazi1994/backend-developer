const { Person } = require('./person2') // now, Person is a class
console.log(typeof Person)

class Student extends Person {
    constructor (bod, type) {
        super(bod)
        this._type = type
    }
}

const student = new Student('1995-03-12','student')
student.greet()
student.age
student.howOld()