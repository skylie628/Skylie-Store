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

    await queryInterface.bulkInsert('Materials', [{
       name: 'Nano Glass',
       id: 'glass'
     },
     {
      name: 'Alpha Silicon',
      id: 'transSil'
    },
    {
      name: 'Black Silicon',
      id: 'blackSil'
    },
    {
      name: '3D',
      id: '3d'
    },
    {
      name: 'Mirror Glass',
      id: 'mirror'
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
