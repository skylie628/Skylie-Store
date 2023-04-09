'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Brands', [{
       name: 'Iphone',
       id: '1'
     },
     {
      name: 'Samsung',
      id: '2'
    },
    {
      name: 'Xiaomi',
      id: '3'
    },
    {
      name: 'Lg',
      id: '4'
    },
    {
      name: 'Huawei',
      id: '5'
    },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Brands', null, {});
  }
};
