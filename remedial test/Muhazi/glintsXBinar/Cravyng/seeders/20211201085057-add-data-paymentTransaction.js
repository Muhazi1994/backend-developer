'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert("paymentTransaction", [
       {
         PaymentMethodId: 2,
         orderId: 1,
         status: "paid",
       },
       {
         PaymentMethodId: 1,
         orderId: 2,
         status: "paid",
       },
       {
         PaymentMethodId: 1,
         orderId: 3,
         status: "paid",
       },
       {
         PaymentMethodId: 2,
         orderId: 4,
         status: "unpaid",
       },
       {
         PaymentMethodId: 2,
         orderId: 5,
         status: "paid",
       },
       /**
        * Add seed commands here.
        *
        * Example:
        * await queryInterface.bulkInsert('People', [{
        *   name: 'John Doe',
        *   isBetaMember: false
        * }], {});
        */
     ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("paymentTransaction", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
