const threeDimention = require('');

class Beam extends threeDimention {
  constructor(lenght, width, height) {
    super('Beam');
    this.lenght = lenght;
    this.width = width;
    this.height = height;
    
  }
  // Overriding
  calculateArea() {
    super.calculateArea(); 
    let Area = ((2 * this.lenght * this.width) + (2 * this.lenght * this.width) + (2 * this.width * this.height));
    return Area;
  }

  calculateVolume() {
    super.calculateVolume();
    let volume = (this.lenght * this.width * this.height)
    return volume
  }

}

module.exports = Beam;
















// (2 x length x width) + (2 x length x height) + (2 x width x height)
// length x width x height