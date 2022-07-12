("use strict");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        name: "syarafuddin",
        email: "syarafuddin@gmail.com",
        password: "Barat123!",
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "kamaruddin",
        email: "kamaruddin@gmail.com",
        password: "Mantan999@",
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "tantowiyahya",
        email: "yahya@gmail.com",
        password: "Mantan998@",
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "afifuddin",
        email: "afif@gmail.com",
        password: "Mantan997@",
        role: "customer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "ardiansyah",
        email: "ardi@gmail.com",
        password: "Mantan888@",
        role: "merchant",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
