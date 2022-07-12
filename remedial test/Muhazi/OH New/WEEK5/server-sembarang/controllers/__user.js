// const fs = require('fs')
// const { jsonReader } = require('../utiils/jsonReader')
// const { getLastID } = require('../utiils/getLastID')

// module.exports = {
//     async userList(req, res)  {
//         try {
//             console.log(req.params)
//             const {
//                 gender,
//                 verified
//             } = req.query
//             // requestData: method, params, query
//             // -----------------------------------------------------
//             // list down all possible query
//             // age: gt, gte, lt, lte
//             // gender: male/female                          ---- dev
//             // isVerified: true/false
//             // register: gt, lt
//             // sortBy: name, age, register: asc/dsc
//             // limit: 10
//             // -----------------------------------------------------
//             let { data: resultData } = require('../user.json') // userData is array
//             if (gender) resultData = resultData.filter( user => user.gender === gender)
//             if (verified) resultData = resultData.filter( user => user.isVerified == verified)
//             if (req.query['age.gt']) resultData = resultData.filter( user => user.age > req.query['age.gt'])
    
//             console.log(resultData)
    
//             res.status(200).json({
//                 success: true,
//                 message: 'sukses',
//                 data: resultData
//             })
//         }
//         catch(err) {
//             res.status(500).json({
//                 success: false,
//                 message: 'error pak',
//                 errors: err
//             })
//         }
//     },
//     async userDetail(req, res) {
//         try {
//             const { id } = req.params
//             const { data: userData } = require('../user.json') // userData is array
    
//             // id as unique user identifier
//             const resultData = userData.filter( user => user.id == id)
//             res.status(200).json({
//                 success: true,
//                 message: `success get user id ${id}`,
//                 data: resultData
//             })
//         }
//         catch(err) {
//             res.status(500).json({
//                 success: false,
//                 message: 'error pak',
//                 errors: err
//             })
//         }
//     },
//     async createUser(req, res) {
//         try {
//             const payload = req.body // payload is a JSON
//             // insert || append data to existing JSON
//             // expected payload
//             // {
//             //     "name": "Bobs",
//             //     "age": 31,
//             //     "gender": "male",
//             //     "isVerified": "true",
//             // }
//             jsonReader('../server-sembarang/user.json', (err, user) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 const { data: userData } = user
//                 const lastId = getLastID(userData)
//                 const additionalUserData = {
//                     id: lastId + 1,
//                     createdAt: new Date().toISOString()
//                 }
//                 const newUser = Object.assign(payload, additionalUserData)
//                 userData.push(newUser)
//                 fs.writeFileSync('../server-sembarang/user.json', JSON.stringify({data: userData}))
//                 res.status(200).json({
//                     success: true,
//                     message: `success create user`,
//                     data: user
//                 })
                
//             })
//         }
//         catch(err) {
//             res.status(500).json({
//                 success: false,
//                 message: 'error ketika create user',
//                 errors: err
//             })
//         }
//     },
//     async editUser(req, res) {
//         try {
//             const payload = req.body // payload is a JSON
//             // insert || append data to existing JSON
//             // expected payload
//             // {
//             //     "name": "Bobs",
//             //     "age": 31,
//             //     "gender": "male",
//             //     "isVerified": "true",
//             // }
//             jsonReader('../server-sembarang/user.json', (err, user) => {
//                 if (err) {
//                     console.log(err)
//                     return
//                 }
//                 const { data: userData } = user
//                 const lastId = getLastID(userData)
//                 const additionalUserData = {
//                     id: lastId + 1,
//                     createdAt: new Date().toISOString()
//                 }
//                 const newUser = Object.assign(payload, additionalUserData)
//                 userData.push(newUser)
//                 fs.writeFileSync('../server-sembarang/user.json', JSON.stringify({data: userData}))
//                 res.status(200).json({
//                     success: true,
//                     message: `success create user`,
//                     data: user
//                 })
                
//             })
//         }
//         catch(err) {
//             res.status(500).json({
//                 success: false,
//                 message: 'error ketika create user',
//                 errors: err
//             })
//         }
//     },
//     async deleteUser(req, res) {
        
//     }
// }