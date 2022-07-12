'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     return [
      await queryInterface.addColumn('Orders', 'user_id', {
        type: Sequelize.INTEGER
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     return [
      await queryInterface.removeColumn('Orders', 'user_id')
    ];
  }
};
