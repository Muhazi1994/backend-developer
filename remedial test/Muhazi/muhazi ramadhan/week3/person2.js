exports.person = class person {
    constructor() {
        this._type ='human'
    }
    greet() {
        console.log(`hi! I am a ${this._type}`)
    }
}