const { person } = require('./person2');
class student extends person {
    constructor (student) {
    super ()
    this._type = student
    }
    greet() {
        console.log(`Hi! I am a ${this._type}`);
    }
}
const newClass = new student('student');
console.log(newClass.greet());


