'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("categories", [
      {
        name: "Recomended",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Most Favorite",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Appetizers",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hot Dishes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Seafood Dishes and others",
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  }
};
