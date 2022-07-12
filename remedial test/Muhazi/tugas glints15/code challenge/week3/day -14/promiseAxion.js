const axios = require('axios');

let urlUniv = 'http://universities.hipolabs.com/search?country=United+Kingdom';
let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
let urlCoin = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin';
let data = {};

axios
  .get(urlUniv)
  .then((response) => {
    data = {
      posts: response.data.map((item) => {
        return { name: item.name, cauntry: item.cauntry };
      }),
    };

    return axios.get(urlTodos);
  })
  .then((response) => {
    data = { ...data, title: response.data };

    return axios.get(urlCoin);
  })
  .then((response) => {
    data = { ...data, name: response.data };
    console.log(data);
  })
  .catch((err) => {
    console.error(err.message);
  });
