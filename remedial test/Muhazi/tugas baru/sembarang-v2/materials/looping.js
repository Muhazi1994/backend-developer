// 0 - end: let i = 0; i < nums.length; i++
// 0 - half: let i = 0; i < Math.floor(nums.length / 2); i++
// half - end: let i = Math.floor(nums.length / 2); i < nums.length ; i++

// end - 0: let i = nums.length - 1; i >= 0 ; i--
// first half - 0: let i = Math.floor(nums.length / 2); i >= 0 ; i--
// end - first half: let i = nums.length - 1; i > Math.floor(nums.length / 2) ; i--

// ++: increment by 1; ++ is equal to += or + 1
// --: decrement by 1; -- is equal to -= or - 1

// assume you have a sorted array that contains a complete number from 1 to 20
// print all even number, in ascending order

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// iteration: control flow
// continue, break

// print out kelipatan 5, reverse order
// note: no logic di body loop

// for (let i = 0; i < nums.length; i++) {
//     /**
//      *  things a loop must have, respectively:
//      * - punya start pointer / counter / variable / value
//      * - end condition: Boolean expression.
//      * - increment pointer / counter / variable / value
//      */
//     if (nums[i] == 5) {
//         continue
//     }
//     if (nums[i] == 10) {
//         break
//     }
//     console.log(nums[i])
// }

let x = 0
for (x; x < 5; x++) {

}

const words = ['asdasdzasdasdsa', 'asdasdasdassad', 'asdasdsddasd', 'ivu8fn3n', 'a0e84n']
//            0                   1                 2              3            4

// find out if a char 'z' exist in words
let result = 'NOT FOUND'
for (let word of words) {
    // word is a string
    for (let char of word) {
        if (char === 'z') {
            result = 'FOUND'
            break
        }
    }
}
console.log(result)

const myObject = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 4,
    key5: 5
}

// Object.entries()
// Object.keys()
// Object.values()
// for (let something of loop) {
//     console.log(something)
// }

// for (let [key, value] of Object.entries(myObject)) {
//     console.log(`key: ${key}  ---- value: ${value}`)
// }

// for (let key of Object.keys(myObject)) {
//     console.log(`key: ${key}`)
// }

// for (let value of Object.values(myObject)) {
//     console.log(`key: ${value}`)
// }


const myArrOfObj = [
    {
        name: 'aaaa',
        age: 30
    },
    {
        name: 'bbbb',
        age: 10
    }
]

for (let data of myArrOfObj) {
    // now, data is an object.
    console.log(data)
}






// let Animals = [
//     'cow',
//     'dog',
//     'fish',
//     'owl',
//     'cat',
//     'frog',
//     'ant',
//     'camel',
//     'chicken',
//     'butterfly',
//     'donkey',
//     'snail',
//     'snake',
//     'giraffe',
//     'crocodille',
//     'deer'
// ]

// let index = 0
// while ( Animals[index] !== 'donkey') {
//     console.log(Animals[index])
//     index++
// }