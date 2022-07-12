const { getUserID, transactionValue, changeValue } = require('../../transactions')

console.log(getUserID())
console.log(transactionValue())
changeValue(99999999)
console.log(transactionValue())
