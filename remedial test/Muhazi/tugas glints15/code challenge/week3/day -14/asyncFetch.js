const fetch = require('node-fetch')

let urlUniv = 'http://universities.hipolabs.com/search?country=United+Kingdom';
let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
let urlCoin = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin';
let data = {};

const fetchAsync = async () => {
    try {
        let responseUniv = await fetch(urlUniv)
        let responseTodos = await fetch(urlTodos)
        let responseCoin = await fetch(urlCoin)
        
        let response = await Promise.all
        ([
            responseUniv.json(),
            responseTodos.json(),
            responseCoin.json(),
        ]);
    data = {
        univ: response[0],
        todos: response[1],
        coin: response[2],
    }
    console.log(data)
    } catch(error) {
        console.error(error.message);
    }
};
fetchAsync();











