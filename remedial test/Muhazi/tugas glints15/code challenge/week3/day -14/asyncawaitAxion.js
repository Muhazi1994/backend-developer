const axios = require('axios');

let urlUniv = 'http://universities.hipolabs.com/search?country=United+Kingdom';
let urlTodos = 'https://jsonplaceholder.typicode.com/todos';
let urlCoin = 'https://api.coinpaprika.com/v1/coins/btc-bitcoin';
let data = {};

const fetchApi = async () => {
  try {
    
    let response = await Promise.all([
      axios.get(urlUniv),
      axios.get(urlTodos),
      axios.get(urlCoin),
    ]);

    

    data = {
      posts: response[0].data.map((item) => {
        return { name: item.name, cauntry: item.cauntry };
      }),
      title: response[1].data,
      name: response[2].data,
    };

    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
};

fetchApi();
