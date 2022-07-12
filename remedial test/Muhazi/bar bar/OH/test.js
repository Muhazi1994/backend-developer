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

    if (obj.name === name) {
        result= 'FOUND';
    } else (
        result= 'NOT FOUND'
    )

    // code here ------------
    return result
}
console.log(findName(data,'Syarafuddin'));


