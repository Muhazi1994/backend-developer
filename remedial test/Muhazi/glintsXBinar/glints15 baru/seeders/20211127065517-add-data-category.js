'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Recommended",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
      },
      {
        name: "Most Favorite",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Appertizers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hot Dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seafood Dishes and Others",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Vegetable Dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Staple Food",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fried Dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desserts",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soup",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beverages",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
