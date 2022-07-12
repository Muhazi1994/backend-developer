/**
 * OOP introduction;
 * getter; setter
 * instance
 * method
 * this ?????
 * sebuah class, punya property, dan method
 */


 class Backend {
    constructor(Batch) {
        this._batch = Batch
        this._apaya = 'apaya'
    }
    getBatch (arg1, arg2) { // method. 
        return this._batch
    }
    calculateBirthday () {
        const then = new Date()
        console.log(then)
        console.log('year',then.getFullYear() - 15)
        then.setFullYear(then.getFullYear() - this._batch)
        console.log(then)
        return then
    }
    get batch() { // getter takes no argument!
        // code here
        // do whatever you want here
        return this._batch
    }
    set batch(value) {
        // code here
        // do whatever you want here
        this._batch = value
    }
}
const myBackend = new Backend(15)

class Backend2 extends Backend {
    constructor (Batch, people) {
        super(Batch)
        // now you're free to go
        console.log('get into constructor from backend2')
        this._people = people
    }
    people() {
        return this._people
    }
    get batch () {
        return this._batch + 99
    }
}

const newClass = new Backend2(20, 'ger')
// console.log(newClass.people())
// console.log(newClass.batch)


// console.log(myBackend)
// console.log(myBackend.getBatch())
// console.log(myBackend._batch) // we directly call the property batch
// console.log(myBackend._apaya)
// console.log(myBackend.batch) // we call property batch by getter

// myBackend._batch = 999 // directly assign value to property

// myBackend.batch = 999
// // console.log(myBackend.batch)
// console.log(myBackend.calculateBirthday())














// const anotherObj = {
//     prop: 'property of anotherObj',
//     prop2: true,
//     propertyFunction: () => 'method of anotherObj'
// }

// console.log(anotherObj.prop)
// console.log(anotherObj.propertyFunction())







// const myArray = new Array(5) // myArray = []

// // console.log(myArray)
// for (let item of myArray) {
//     // console.log(item)
// }



// // inheritence
// class ValidationError extends Error {

// }

// class LoginError extends Error {

// }
// // throw new Error('message')
// throw new ValidationError('message')
// throw new LoginError('message')

// if (username != 'circle') return 'username wrong'



class Shape {
    constructor (angle) {
        this._angle = angle
        this._type = {
            3: 'triangle',
            4: 'rectangle'
        }
    }
    get angle () {
        return this._angle
    }
    get shapeType() {
        const type = this._type[this._angle]
        const result = type ? type : 'unknown shape'
        // const result = 'unknown shape' || type
        return result
    }
}
const shape = new Shape(1)

class Rectangle extends Shape {
    constructor(angle2) {
        super(angle2) // mandatory
        this._angle = angle2
    }
    get angle () {
        return this._angle
    }

    whoAmI () {
        console.log('i am a rectangle')
    }
}
const rectangle = new Rectangle(4)
console.log(shape.angle, rectangle.angle)
console.log(shape.shapeType, rectangle.shapeType)
rectangle.whoAmI()
shape.whoAmI()
