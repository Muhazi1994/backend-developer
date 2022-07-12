// const stars1 = `

// *
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// `

    const stars1 = num => {
        let line = 9;
        let star = '';
        for(let i = 1; i <= line; i++) {
            for(let j = 0; j < i; j++){
            star += '*';
            }
         star += '\n';
        }
        console.log(star)
    }
    stars1();

const starsThree = (num, num2) => {
    let seg = '';
    let tum = '';

for (let i = 1; i <= num; i++) {
    for( let j= 1; j <= num -i; j++) {
    seg += ' ';
    }
    for (let k= 0; k < 2 * i - 1; k++) {
    seg += '*';
    }
    seg += '\n'
}
for (let i = 1; i <= num2; i++) {
    for( let j= 1; j <= 2 -i; j++) {
    tum += ' ';
    }
    for (let k= 0; k < 2 * i - 1; k++) {
    tum += '*';
    }
    tum += '\n'
}
console.log(seg + tum);
}
starsThree(6, 2);


function startMax(num) {
    for (let i = 1; i <=num; i++) {
        let bar = '';
    for (let j = 1; j <= num; j++) {
        bar = bar += '*'
}
console.log(bar);
} 
}
startMax(4);
function startMix(num) {
    for (let i = 1; i <=num; i++) {
        let tar = '';
    for (let j = 1; j <= num; j++) {
        tar = tar += '*'
}
console.log(tar);
} 
}
startMax(5);

      