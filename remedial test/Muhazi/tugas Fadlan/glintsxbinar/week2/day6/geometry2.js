// import readline
const { match } = require('assert');
const { ChildProcess } = require('child_process');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to calculate cube
function cube(side){
    return Math.pow(side, 3);
}

// function for inputing side of cube
function inSide(){
    console.log(`Cube\n----`);
    rl.question(`Side: `, side => {
        if(!isNaN(side)){
            console.log(`\nVolume of Cube: ${cube(side)}\n\n` );
            rl.close();
        }else{
            console.log('\nSide must be a number!\n');
            inSide();
        }
    })
}

// function to calculate tube
function tube(radius, height){
    const phi = 3.14;
    return phi * Math.pow(radius, 2) * height;
}

// function for inputing radius and height of tube
function inputRnH(){
    console.log(`Tube\n----`);
    rl.question(`Radius: `, function(radius){
        rl.question(`Height: `, (height) => {
            if(radius > 0 && height > 0){
                console.log(`\nVolume of Tube: ${tube(radius, height)}`);
                rl.close();
            }else{
                console.log(`Radius and Height must be a number!\n`);
                inputRnH();
            }
        });
    });
}

// function for calculate Cube and Tube
function cAndT(){
    console.log(`Cube\n----`);
    rl.question(`Side: `, (side) => {
        if(!isNaN(side)){
            console.log(`\nVolume of Cube: ${cube(side)}\n\n` );
        }else{
            console.log('\nSide must be a number!\n');
            cAndT();
        }
        inputRnH();
    })
    
}

// function for choice
function choice(){
rl.question(`This is function for calculate cube or tube, if you want calculate cube press 'c',\nif you want to calculate tube press 't', and if you want calculate both of them the press 'b': `, (y)=> {
    if(y == 'c'){
        inSide();
    } else if(y == 't'){
        inputRnH();
    } else if(y == 'b'){
        cAndT();
    }else{
        console.log(`\nPlease input 'c' or 't' or 'b'  \n`)
        choice(); 
    }
} )
}

choice();