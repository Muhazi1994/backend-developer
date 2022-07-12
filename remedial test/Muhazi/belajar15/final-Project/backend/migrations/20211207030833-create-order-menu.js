"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orderMenus", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "orders",
          key: "id",
        },
      },
      menuId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "menus",
          key: "id",
        },
      },
      variantId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "variants",
          key: "id",
        },
      },
      variantOptionId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: "variantOptions",
          key: "id",
        },
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      subTotalPrice: {
        allowNull: false,
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable("orderMenus");
  },
};
