'use strict';
const faker = require('faker')
const generateCompany = num => {
  let companies = []
  const gender = faker.datatype.number(1)
  for (let i = 0; i <= num; i++) {
    companies.push({
      ceo: `${faker.name.firstName(gender)} ${faker.name.lastName(gender)}`,
      name: faker.company.companyName(),
      createdAt: new Date(),
      updatedAt: new Date()
     })
  }
  return companies
}


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', generateCompany(10), {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('Companies', null, {});
  }
};
