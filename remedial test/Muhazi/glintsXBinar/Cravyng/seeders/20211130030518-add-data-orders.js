"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("orders", [
      {
        userId: "1",
        appliedVoucher: "DISC10",
        totalPrice: "100000",
        totalPriceAftDiscount: "90000",
        rating: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: "3",
        appliedVoucher: "DISC10",
        totalPrice: "100000",
        totalPriceAftDiscount: "90000",
        rating: "4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
