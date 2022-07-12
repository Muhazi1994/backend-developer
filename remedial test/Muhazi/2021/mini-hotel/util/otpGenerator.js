const faker = require('faker')

module.exports = () => {
  try {
    // generate 4 random integer 0001 - 9999
    const _1 = faker.datatype.number({max: 9})
    const _2 = faker.datatype.number({max: 9})
    const _3 = faker.datatype.number({max: 9})
    const _4 = faker.datatype.number({max: 9})
    return `${_1}${_2}${_3}${_4}`
  }
  catch(err) {
    throw err
  }
}