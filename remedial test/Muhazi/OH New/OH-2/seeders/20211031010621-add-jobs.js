'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Jobs', 
     [
      {
       name: 'Software Engineer'
      },
      {
        name: 'Software Architect'
      },
      {
        name: 'Site Reliability Engineer'
      },
      {
        name: 'Project Manager'
      },
      {
        name: 'Product Manager'
      },
      {
        name: 'Data Scientist'
      },
      {
        name: 'Machine Learning Engineer'
      },
      {
        name: 'Research Engineer'
      },
      {
        name: 'Data Analyst'
      },
      {
        name: 'Data Engineer'
      },
      {
        name: 'software engineer'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
