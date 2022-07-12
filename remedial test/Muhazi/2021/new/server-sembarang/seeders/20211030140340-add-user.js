'use strict';
const faker = require('faker')

const generateUser = num => {
  const gender = faker.datatype.number(1)
  let users = []
  for (let i = 0; i <= num; i++) {
    users.push({
      firstname: faker.name.firstName(gender),
      lastname: faker.name.lastName(gender),
      dob: faker.date.past(),
      phone_number: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(true),
      job: faker.datatype.number(11),
      company_id: faker.datatype.number(10),
      is_verified: faker.datatype.boolean(),
      password: faker.datatype.string(10),
      createdAt: new Date(),
      updatedAt: new Date()
     })
  }
  return users
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
    */
     await queryInterface.bulkInsert('Users', generateUser(500), {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
