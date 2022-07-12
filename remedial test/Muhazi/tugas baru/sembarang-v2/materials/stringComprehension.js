const word = 'a-bbbbbbbbbbbbb-a'

// 1
let result = ''
const length = word.length
for (let i=0; i<length; i++) {
    // if (i == 0 || i == length-1) continue
    // if ([0, length - 1].includes(i)) continue
    result += word[i]
}
// console.log(result)
// ---------------------------

// 2
const arrOfLetter = word.split('') // arrOfLetter = ['a', 'b', 'c']
arrOfLetter.pop()
arrOfLetter.shift()
const result2 = arrOfLetter.join('')
console.log(result2)

