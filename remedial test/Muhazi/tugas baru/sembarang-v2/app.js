// by nature, javascript is asynchronous
const axios = require('axios')
const t0 = new Date()
const data = axios.get('https://bobsam.bobysamuel.repl.co/sembarang')
// see axios documentation!!

// promise hell
// data
//     .then(x => {
//         // x is axios response
//         const { data } = x // data from axios response
//         const { data: APIdata } = data // actual data from API
//         const { people } = APIdata
//          error here, automatically throwed to .catch
//     })
//     .catch(err => console.log(err)) // optional for err handling. best to have

// console.log('123345457578')

const fetchSembarangan = async () => {
    try {
        const { data: dataSembarangan } = await axios.get('https://bobsam.bobysamuel.repl.co')
        const { data: anotherSembarang } = await axios.post('https://bobsam.bobysamuel.repl.co', JSON.stringify({dataSembarangan}))
    
        // validate username & password
        // get userID
        // get user balance based on userID
    
    
        // only do this if our async functions are independent to each other!!!
        // const allFetched = await Promise.all([
        //     axios.get('https://bobsam.bobysamuel.repl.co/sembarang'), 
        //     axios.post('https://bobsam.bobysamuel.repl.co/sembarang', JSON.stringify({dataSembarangan}))
        // ])
        // allFetched will be array [ response from call1, response from call2, ...]
        console.log(dataSembarangan)
        console.log(anotherSembarang)
        return 'done'
    }
    catch(err) {
        console.log('error: ', err.message)
    }
}
fetchSembarangan()

// console.log('harusnya dieksekusi setelah fetch sembarang')
// function getData () {
//     fetchSembarangan()
//         .then( x => console.log(x))
// }



/**
 * asynchronous & synchronous function
 */

// const fetch = require('node-fetch')
// import fetch from 'node-fetch';
// const fetchTrial = async () => {
//     const response = await fetch('https://bobsam.bobysamuel.repl.co/sembarang', { method: 'GET' });
//     const data = await response.json()
//     console.log(data)
// }

// fetchTrial()

// const axios = require ('axios')
// let urlPosts = 'https://bobsam.bobysamuel.repl.co/sembarang'
// let urlName = 'https://bobsam.bobysamuel.repl.co/sembarang/name'
// let data = {};

// const fetchApi = async () => {
//     try {
//         let response = await promise.all ([
//             axios.get(urlPosts),
//             axios.get(urlName),
//         ]);
//     data = {
//         posts = Response[0].data.map((item) => {
//             return {name: item.name}
//         }),
//         name: response[1].data
//     };
//     console.log(data)
//     } catch (error) {
//         console.error(error.message);
//     }
// }

// fetchApi();