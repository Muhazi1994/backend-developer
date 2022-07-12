'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn('Users', 'company_id', {
        type: Sequelize.INTEGER
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('Users', 'company_id')
    ];
  }
};
