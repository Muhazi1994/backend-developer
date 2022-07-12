const Geometry = require('./geometry');
class TwoDimention extends Geometry {
    constructor (name) {
        super(name, 'Two Dimention');
        if(this.constructor === TwoDimention) {
            throw new Error('Cannot isntantiate from Abstract Class'); // Because it's abstract
        }
    }
    // #calculateArea() {
    calculateArea() {
        console.log(`${this.name} is calculating area!`);
    }
    //cal the private function
    // calculateArea(){
    
    calculaterCircumference() {
        console.log(`${this.name} is calculating area!`)
    }
}
module.exports = TwoDimention;
