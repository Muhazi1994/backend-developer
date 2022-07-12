class Person {
    constructor(bod) {
        this._type = 'human'
        this._bod = bod // YYYY-MM-DD format -> '1990-01-05'
    }
    greet() {
        console.log(`hi! I am a ${this._type}`)
    }
    get age () {
        const now = new Date()
        const bod = new Date(this._bod)
        const age = now.getFullYear() - bod.getFullYear()
        this._age = age
        return this._age
    }
    howOld () {
        console.log(`wooow, I am already ${this._age} years old !`)
    }
    
    #a = 'check'
    get valueOfA () {
        return this.#a
    }
    static className () {
        console.log(`this is class ${this.name}`)
    }
}

const newPerson = new Person('1990-01-01') // newPerson is instansce of Person
console.log('a',newPerson.a)
// newPerson.greet() // greet is a method we can call it from class instance
// newPerson.age
// console.log(newPerson._type)
// console.log(newPerson._bod)
// newPerson.howOld()
// Person.className()

function myObjectConstructor () {
    this.name = 'myObjectConstructor'
    this.type = 'Constructor'
    this._method = () => console.log(`this is a method from ${this.name}`)

    let __isPublic = false
    const _countDown = start => {
        for (let i = start; i >= 0; i--) {
            console.log(i)
        }
    }

    this.makePublic = () => __isPublic = true
    this.isPublic = () => {
        let result = __isPublic ? 'property is public' : 'property is not public'
        console.log(result)
    }
    this.countDown = num => _countDown(num)
}

const myNewObject = new myObjectConstructor()
myNewObject.isPublic()
myNewObject.makePublic()
myNewObject.isPublic()
myNewObject.countDown(10)
// console.log(myNewObject.name)
// console.log(myNewObject.type)
// myNewObject._method()

// myNewObject.anotherOne = () => console.log(`another method`)
// myNewObject.anotherOne()

function ObjectFactory () {
    const _name = 'ObjectFactory'
    const _privateFunction = () => `this is a private function within Object Factory`
    return {
        name: _name,
        privateFunction: _privateFunction
    }
}

const realObject = new ObjectFactory()
console.log(realObject._name)
console.log(realObject.privateFunction())

module.exports = { Person }