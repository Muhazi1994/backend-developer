const fetch = require('node-fetch')

let urlUniv = 'http://universities.hipolabs.com/search?country=United+Kingdom'
let urlTodos = 'https://jsonplaceholder.typicode.com/todos'
let urlCoin = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin'
let data = {};

fetch (urlUniv)
.then ((univ) => univ.json())
.then ((univJson) => {
    data= {univ: univJson}
    return fetch(urlTodos)
})
.then ((urlTodos) => urlTodos.json()) 
.then((todosJson) => {
    data = {...data, todos: todosJson}
    return fetch(urlCoin)
})
.then ((urlCoin) => urlCoin.json()) 
.then((coinJson) => {
    data = {...data, coin: coinJson}
    console.log(data)

})

.catch ((err) => {
    console.log(err.message)
})


