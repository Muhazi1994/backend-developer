let Animals = [
    'cow',
    'dog',
    'fish',
    'owl',
    'cat',
    'frog',
    'ant',
    'camel',
    'chicken',
    'butterfly',
    'donkey',
    'snail',
    'snake',
    'giraffe',
    'crocodille',
    'deer'
]
// let index = 10;
// while (index < Animals.length) {
//     console.log(`${Animals[index]} is my animal`);
//     index++;
// }
let index = 0
let animal = Animals[index]
while ( animal !== 'deer') {
    console.log(animal)
    index++
    animal = Animals[index]
}