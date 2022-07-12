class Geometry {
    constructor(name, type) {
        // Make abstract
        if(this.constructor === Geometry) {
            throw new Error('Cannot isntantiate from Abstract Class'); // Because it's abstract
        }
        this.name = name;
        this.type = type;
    }
    hello() {
        console.log(`${this.name}, Hello!`);
    }
}
module.exports = Geometry