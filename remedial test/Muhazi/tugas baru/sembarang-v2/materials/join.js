// const { propFromIndex } = require('./index')
exports.testDependency = 'dependency'
// console.log(propFromIndex)

const a = {
    a: 'asdasdasda',
    b: 'asdasd',
    c: '123235235'
}

// Object.values(a) == ['asdasdasda', 'asdasd', '123235235']
// Object.entries(a) == [[a,'asdasdasda'], [b,'asdasd'], [c, '123235235']]


const values = Object.values(a)
console.log(values)
for (let [key, value] of Object.entries(a)) {
    console.log(key, value)
}
// Object.values() will return array of values []
// Object.keys() will return array of keys []
// Object.entries() will return array [key, value]


