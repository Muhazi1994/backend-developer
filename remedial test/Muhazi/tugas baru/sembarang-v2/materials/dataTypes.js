// Primitive Data Types:
// Boolean
const myBool = true
const hisBool = false

// String
const myString = 'this is my string'
const myChar = 'c' // also counts as string
const stringNumeric = '30' // this is string
const stringBoolean = 'true' // also a string

// Number
const myNumber = 1 // integer
const myFloat = 1.5 // decimal
const myNegativeNumber = -100 // sign integer
const zero = 0
const minusZero = -0 // ?????
const notANumber = NaN // Not a Number: also a number LOL
const scientificFormat = 3e10 // 3^10
const weirdNumber = 10_000
const isBigEnough = BigInt(5)
const infinity = Infinity

// BigInt

// Null
const varNull = null

// undefined
// let undefinedVar = undefined
// const thisIsMyMessyVariable

// console.log(`${myFloat} number is decimal ? ${!Number.isInteger(myFloat)}`)
// console.log(`myNumber: ${myNumber} -> ${typeof myNumber}`)
// console.log(`isBigEnough: ${isBigEnough} -> ${typeof isBigEnough}`)
// console.log(`myFloat: ${myFloat} -> ${typeof myFloat}`)
console.log(`varNull: ${varNull} -> ${typeof null}`)
// variable naming convention
/**
 * gabisa bikin nama yang udah taken di js
 * harus dimulai dengan alphabet, atau _. gaboleh angka
 * biasanya, kita ada rule untuk penamaan variable. tergantung dari programming language yang digunakan:
 * camelCase, snake_case: biasanya python, PascalCase
 */

const undefined = 10
const _12Variable = '12'
// const for = 20
// const setInterval = 'setInterval'

// Object

const myEmptyArray = []
const anotherArray = [1, '1', null, undefined]
const anotherArray2 = [1, ['satu', 'dua', 'tiga', [true, false]], 123, 34, 45, 546, 56 ,6]
// array has index     0  1| 0      1       2       3                2    3   4   5    6   7
console.log(anotherArray2[1][3][0])

// Object
const myEmptyObject = {} // dictionary || map, hashmap

const anotherObject = { // key - value pair
    'key1': '1',
    key2: 2,
    mykey3: true,
    anotherKey: [1, 2, true],
    nestedObject: {
        nested1: 'asdsadsadsads',
        nested2: {
            lol: 'wkwk'
        }
    }
}

console.log(anotherObject.falah)

// const itu gabisa diganti nilainya.
// var let const

const ger = [1, 2, 3, 4, 5, 6, 7]
         //  0  1  2  3  4  5  6
// const ger = await getUsers()
// [{userID: 1, username: "john"},..,...,....]
console.log(ger[ger.length - 1])
console.log(ger.slice(3, 6))
const sentences = 'satu dua tiga empat lima enam tujuh delapan sembilan sepuluh'

const news = {
    january: [
        {
            date: 1,
            data: 'kucing kabur'
        },
        {
            date: 2,
            data: 'kucing baru'
        },
        {
            date: 3,
            data: 'kucing kelaparan'
        }
    ],
    february: [
        {
            date: 1,
            data: 'pacar baru'
        },
        {
            date: 2,
            data: 'Glints academy start'
        },
        {
            date: 3,
            data: 'Glints academy end'
        }
    ]
}

const majorNews = {
    january: [
        {
            date: 1,
            data: 'kucing kabur'
        }
    ],
    february: [
        {
            date: 2,
            data: 'Glints academy start'
        },
        {
            date: 1,
            data: 'pacar baru'
        }
    ],
    march: [
        {
            date: 10,
            data: 'motor baru'
        },
        {
            date: 1,
            data: 'pacar baru'
        },
        {
            date: 2,
            data: 'Glints academy start'
        }
    ],
    june: [
        {
            date: 15,
            data: 'rumah baru'
        },
        {
            date: 29,
            data: 'placement di singapore'
        }
    ],
    october: [
        {
            date: 5,
            data: 'rumah baru'
        },
        {
            date: 6,
            data: 'baju baru'
        },
        {
            date: 9,
            data: 'kucing baru'
        }
    ],
    december: [
        {
            date: 1,
            data: 'skip ngantor'
        },
        {
            date: 2,
            data: 'kerja kerja'
        },
        {
            date: 3,
            data: 'skip ngantor'
        },
        {
            date: 4,
            data: 'izin cuti'
        },
        {
            date: 10,
            data: 'cuti'
        },
        {
            date: 25,
            data: 'natalan'
        }
    ]
}

// bikin 1 array, 12 element. tiap elementnya adalah 1 bulan.
// ambil berita di tanggal terakhir di tiap bulan.
// kalo bulannya ga ada, array berisi null
const expectedResult = [
    'kucing kabur', 
    'Glints academy start', 
    'motor baru', 
    null, 
    null, 
    'placement di singapore', 
    null, 
    null, 
    null, 
    'kucing baru', 
    null, 
    'natalan'
]

// truthfull

let months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]

const result = months.map( month => {
    const monthlyNews = majorNews[month] // get value from object
    // !undefined == true
    if (!monthlyNews) return null
    
    // get latest news
    // monthlyNews = arr of news
    let latestDate = 0
    let latestNews = ''
    for (let news of monthlyNews) {
        const { date, data } = news
        if (date > latestDate) {
            latestDate = date
            latestNews = data
        }
    }
    // monthlyNews.map(news => {
    //     const { date, data } = news
    //     if (date > latestDate) {
    //         latestDate = date
    //         latestNews = data
    //     }
    // })
    return latestNews
})


console.log(result)