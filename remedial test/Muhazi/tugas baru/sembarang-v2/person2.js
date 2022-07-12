exports.Person = class Person {
    constructor(bod) {
        this._type = 'human'
        this._bod = bod // YYYY-MM-DD format -> 1990-12-31
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
}

