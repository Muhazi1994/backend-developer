// Kerucut Argument
function kerucutGeometry(r, t) {
    const phi= 3.14
  console.log(1/3* phi * r ** 2*t)
}
kerucutGeometry(10, 12 );
// kerucutDua(7, 6);

function kerucutReturn (r, t) {
    const phi= 3.14
    const volume= 1/3* phi * r ** 2*t
    
  console.log("return: " + volume)
  return volume;
}

let kerucutOne = kerucutReturn(10, 11);
let kerucutTwo = kerucutReturn(12, 13);
console.log("kerucut 1 + kerucut 2 :" + (kerucutOne + kerucutTwo));



