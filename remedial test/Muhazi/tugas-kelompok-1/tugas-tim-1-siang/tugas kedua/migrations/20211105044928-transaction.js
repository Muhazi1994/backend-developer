"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    Promise.all([
      await queryInterface.addColumn("transactions", "id_service", {
        type: Sequelize.INTEGER,
      }),
    ]);
    await queryInterface.addConstraint("transactions", {
      fields: ["id_good"],
      type: "foreign key",
      name: "custom_fkey_id_good",
      references: {
        //Required field
        table: "goods",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    // id_customer foreign key
    await queryInterface.addConstraint("transactions", {
      fields: ["id_customer"],
      type: "foreign key",
      name: "custom_fkey_id_customer",
      references: {
        //Required field
        table: "customers",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  down: async (queryInterface, Sequelize) => {
    Promise.all([
      await queryInterface.removeColumn("transactions", "id_service", {
        type: Sequelize.INTEGER,
      }),
    ]);
  },
};
