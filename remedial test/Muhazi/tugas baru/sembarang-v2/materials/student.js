const { Person } = require('./person') // now, Person is a class

class Student extends Person {
    constructor (bod, type) {
        super(bod)
        this._type = type
        // this.name = 'Student'
    }
    greet() {
        console.log(`HAIIIIIII! I am a ${this._type}`)
    }
}


const student = new Student('1995-03-12','student')
student.greet()
student.age
student.howOld()
Student.className()