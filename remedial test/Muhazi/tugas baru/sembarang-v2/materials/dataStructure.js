console.log('hello data structure')

// array methods for iterator:
/**
 * all require function as parameter
 * - map
 * - filter
 * - forEach
 * - reduce
 */

// map
const a = [1, 2, 3, 4, 5, 6]
// ubah jadi {
//     number: 1
// }

let newA = []
for (let num of a) {
    newA.push(num * 5)
}
// console.log('newA: ', newA)

// let newAFinal = a.map(function multiplyBy5 (num) {
//     return num * 5
// })
const multiplierBy5 = num => num * 5
let newAFinal = a.map(multiplierBy5)
// console.log('newAFinal: ',newAFinal)

const objectFromA = a.map( x => {
    return {number: x}
})

// console.log(objectFromA)

// const valuesFromArrOfObject = objectFromA.map( x => {
//     // x is an element from objectFromA, which is an object. e.g. { number: 1 }
//     return x.number
// })

const valuesFromArrOfObject = objectFromA.map(x => x.number)
// console.log('valuesFromArrOfObject: ', valuesFromArrOfObject)

const users = [
    {
        firstName: 'lala',
        lastName: 'pooh'
    },
    {
        firstName: 'data',
        lastName: 'structure'
    },
    {
        firstName: 'Glints',
        lastName: 'Academy'
    },
]
// transform array users to new array that contains fullName (firstName + lastName)

// statement "function" diganti jadi "=>"
// jadi, "=>" bukan statement for "return"

// const fullNames = users.map( names => {
//     const { firstName, lastName } = names
//     return `${firstName} ${lastName}`
// })

const fullNames = users.map( names => `${names.firstName} ${names.lastName}`)
// console.log(fullNames)

// ================================== FILTER

const myItems = [
    {
        name: 'cigar',
        type: 'consumer goods'
    },
    {
        name: 'headphone',
        type: 'audio'
    },
    {
        name: 'laptop',
        type: 'electronic'
    },
    {
        name: 'monitor',
        type: 'electronic'
    },
    {
        name: 'paper',
        type: 'tools'
    },
    {
        name: 'aqua',
        type: 'consumer goods'
    },
    {
        name: 'pen',
        type: 'tools'
    },
    {
        name: 'vape',
        type: 'consumer goods'
    },
    {
        name: 'diecast',
        type: 'toy'
    },
]

const isToy = myItems.filter( item => item.type === 'toy')
// console.log(isToy)

// name of consumer goods
const isGoods = myItems.filter(item => item.type === 'consumer goods').map( good => good.name)
// console.log(isGoods)

// reduce for grouping
// transform myItems into obj.
// e.g:
// const myItemsObj = {
//     'consumer goods' : [ 'cigar', 'aqua', 'vape' ],
//     'toy': ['diecast'],
//     'audio': ['headphone'],
//     'electronic': ['laptop', 'monitor'],
//     'tools': ['paper', 'pen']
// }

const myItemsObj = myItems.reduce((accumulator, current) => {
    const { name, type } = current
    if (type in accumulator) { // checker. see if a key exist in an object. we use (KeyName in Object)
        const names = accumulator[type]
        names.push(name)
        accumulator[type] = names
    } else {
        accumulator[type] = [name]
    }
    return accumulator
}, {})

// console.log('myItems: ', myItems)
// console.log('myItemsObj: ', myItemsObj)
// request names of electronices
// console.log(myItemsObj['electronic'])



const searchNamesByType = (data, yourType = '') => {
    /**
     * yourType will be string, : audio, toy, electronic, etc
     * if not found, return []
     */
    const result = data.filter(item => item.type === yourType).map( good => good.name)
    return result
}

// console.log(searchNamesByType(myItems, 'audio'))

const random = [
    1,
    2.5,
    'apple',
    { name: 'apple' },
    ['apple', 5]
]
// ['apple', 5 ] === 'apple' ????
// const result = [1, 2.5, [5]] // element yang ga punya apple
// harus tau dulu, all possible dataTypes in random
// do something based on that element's type
let result = []
const numberOrString = ['number', 'string']
// console.log(typeof 'asdas')
for (let item of random) {
    if (numberOrString.includes(typeof item)) { // handler if item is number or string
        if (item !== 'apple') {
            result.push(item)
            continue
        }
        
    }
    if (!(item instanceof Object && item instanceof Array)) { // handler if item is object { name: apple }
        console.log('item is object')
        for (let inside in item) {
            if (item[inside] !== 'apple') {
                result.push(item)
                continue
            }
        }
    }
    if (item instanceof Object && item instanceof Array) { // handler if item is array ['apple',5]
        const temp = item.filter( x => x!== 'apple')
        result.push(temp)
        continue
    }
}
console.log(result)

const num = 5
console.log( Number.isInteger(5) === !isNaN('5'))