exports.getUsers = () => {
    const users = [
        {
            id: 1,
            name: 'aaa'
        },
        {
            id: 2,
            name: 'kjhsbdvikh'
        },
        {
            id: 3,
            name: 'asdsadas'
        },
        {
            id: 4,
            name: 'bbbbb'
        }
    ]

    return users
}
exports.createUsers = userData => {
    console.log('user created')
    console.log(userData)
}
const tigasatu = 31
const tigadua = 32
const tigatiga = kjbaskdasjnd // error here
console.log('cek cek')

exports.exportedObject = {
    satu: 'satu',
    dua: () => 'dua',
    tiga: { tigasatu, tigadua, tigatiga }
}

// module.exports = {
//     getUserAge () {

//     },
//     getUserAddress () {

//     },
//     deleteUserAccount() {

//     }
// }

// const blockUser = userID => {
//     // do something here
// }
// const unBlockUser = userID => {
//     // do something here
// }

// module.exports = {
//     blockUser,
//     unBlockUser
// }

// const a = 'something'
// const b = 'something else'
// const object = {
//     a,
//     b
// }
// object will have 2 keys: a & b
