"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      voucherCode: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      priceTotal: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      priceTotalAftDiscount: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM("paid", "unpaid"),
        defaultValue: "unpaid",
      },
      rating: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
