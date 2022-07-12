// const word = 'malam'

// // 1
// // let result = ''
// // const length = word.length
// // for (let i=0; i<length; i++) {
// //     if (i == 0 || i == length-1) continue
// //     if ([0, length - 1].includes(i)) continue
// //     result += word[i]
// // }
// // console.log(result)
// // ---------------------------

// // 2
// const arrOfLetter = word.split('') // arrOfLetter = ['a', 'b', 'c']
// arrOfLetter.pop()
// arrOfLetter.shift()
// const result2 = arrOfLetter.join('')
// console.log(result2)

function balikan(kata) {
    const subKata = kata.split('')
    const panjangKata = kata.length

    const subKataTerbalik = subKata.map(
        function(huruf, index) {
            return subKata[panjangKata-(1+index)]
        }
    ) 
    const kataFinal = subKataTerbalik.join('')
    console.log(kataFinal)
}
balikan('siang')
balikan('malam')
// const balikan = kata => kata
// .split('')
// .map(
//     (huruf, index) => kata[kata.length-(1+ index)]
//     )
// .join['']

// console.log(balikan("siang));
// console.log(balikan('komputama'));