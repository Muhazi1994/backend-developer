"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("discounts", [
      {
        title: "DISCOUNT 10%",
        description: "10% off on Minimum Order 100000",
        discount: 0.1,
        minOrderValue: 100000,
        voucherCode: "DISC10",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("discounts", null, {});
  },
};
