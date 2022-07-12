'use strict';
const faker = require('faker');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('suppliers', [
      {
        name: faker.name.findName(), // generate random name
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: faker.name.findName(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('suppliers', null, {});
  },
};
