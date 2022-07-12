const data = {
    name: 'syarafuddin',
    address: 'bima, nusa tenggara west',
    pets:[
        { name: 'dea', type: 'cat' },
        { name: 'supriadi', type: 'cat' },
    ],
}


// make a function. 2 arguments.
// 1st argument expects an object; 2nd argument, a query (STRING)
// find out, if query exist in that object. return 'FOUND', if found, else  'NOT FOUND'


const findName = (obj, name = '') => {
    let result = '';
    // code here ------------
    
    // code here ------------
    return result
}

console.log(findName(data, 'syarafuddin'))


const User = {
    firstName: 'Syarafuddin',
    lastName: 'Jackson',
    address: 'bima, nusa tenggara west',
    age: 30,
    status: 'active', // status could be 'active' or 'inactive'
    isVerified: true
}

// objectQuery is an object. Only has 1 key (firstName or lastName or address or age or status or isVerified)
// find if objectQuery is in obj
// 'FOUND', else 'NOT FOUND'
const findUserProperty = (obj, objectQuery) => {
    let result = '';
    // code here ------------
    
    // code here ------------
    return result
}

console.log(findUserProperty(User, { firstName: 'Michael'})) // should return 'NOT FOUND'
console.log(findUserProperty(User, { age: 29})) // should return 'NOT FOUND'
console.log(findUserProperty(User, { lastName: 'Jackson'})) // should return 'FOUND'
console.log(findUserProperty(User, { status: 'active'})) // should return 'FOUND'

// make another function similar to findUserProperty, only this time the 2nd argument (objectQuery) can have more than 1 key.
// should return 'FOUND' if all value in objectQuery exist in obj