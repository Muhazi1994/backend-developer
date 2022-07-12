// const { query } = require('../models/index')
// // tables: goods, transactions, customers, suppliers 

// module.exports = {
//     async getAllTransactions (req, res, next) {
//         try {
//             const queryString = `SELECT * FROM transactions`
//             const allTrx = await query(queryString)
//             res.status(200).json({
//                 success: true,
//                 message: 'success get all transactions',
//                 data: allTrx
//             })
//         }
//         catch (err) {
//             console.log(err)
//             res.status(500).json({
//                 success: false,
//                 message: `failed`,
//                 error: err
//             })
//         }
//     },
//     async getTrxById (req, res, next) {
//         try {
//             const { id } = req.params
//             let queryString = `SELECT t.id, t.id_customer, t.quantity, t.total, g.price, g.name FROM transactions AS t `
//             queryString += `JOIN goods AS g ON g.id = t.id_good `
//             queryString += `WHERE t.id = ${id} `
//             const [trx] = await query(queryString)
//             if (!trx) {
//                 res.status(404).json({
//                     success: false,
//                     message: `transaction id ${id} not found`
//                 })
//             }
//             res.status(200).json({
//                 success: true,
//                 message: 'success get all transactions',
//                 data: trx
//             })
//         }
//         catch(err) {
//             console.log(err)
//             res.status(500).json({
//                 success: false,
//                 message: `failed`,
//                 error: err
//             })
//         }
//     },
//     async updateTrxById (req, res, next) {
//         try {
//             const { id } = req.params // required
//             const { quantity, id_good, id_customer } = req.body
//             const anyDataToUpdate = quantity || id_good || id_customer

//             let fieldToUpdates = [], queryUpdate = ''
//             if (anyDataToUpdate) {
//                 queryUpdate += 'SET '
//                 if (quantity) fieldToUpdates.push(`quantity = ${quantity}`)
//                 if (id_good) fieldToUpdates.push(`id_good = ${id_good}`)
//                 if (id_customer) fieldToUpdates.push(`id_customer = ${id_customer}`)
//                 queryUpdate += fieldToUpdates.join(', ')
//             }

//             let queryString = ``
//             queryString += 'UPDATE transactions '
//             queryString += queryUpdate
//             queryString += ` WHERE id = ${id}`

//             console.log(queryString)

//             const queryResult = await query(queryString)
//             res.status(200).json({
//                 success: true,
//                 message: 'success update',
//                 data: {
//                     query: queryString,
//                     result: queryResult
//                 }
//             })
            
//         }
//         catch(err) {
//             console.log(err)
//             res.status(500).json({
//                 success: false,
//                 message: `failed`,
//                 error: err
//             })
//         }
//     }
// }