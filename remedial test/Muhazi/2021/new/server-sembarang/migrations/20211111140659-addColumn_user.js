'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn('Users', 'avatar', {
        type: Sequelize.STRING
      })
    ];
  },

  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('Users', 'avatar')
    ];
  }
};
