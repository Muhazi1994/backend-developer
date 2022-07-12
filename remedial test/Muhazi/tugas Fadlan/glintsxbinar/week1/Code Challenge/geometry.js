// How to count a volume cube
function vCube(side){
    console.log('Cube Volume : ' + Math.pow(side, 3) + '\n')
    return Math.pow(side, 3);
}

let cube1 = vCube(30);
let cube2 = vCube(27);

// cube1 + cube2
console.log('Total Volume : ' + (cube1 + cube2) + '\n');

// How to count a volume tube
function vTube(radius, height){
    let phi = 3.14;
    console.log('Tube Volume Tube : ' + phi * Math.pow(radius, 2) * height + '\n') ;
    return phi * Math.pow(radius, 2) * height;
}

let tube1 = vTube (10, 5);
let tube2 = vTube (6, 12);

// tube1 + tube2
console.log('Total Volume Tube : ' + (tube1+tube2));