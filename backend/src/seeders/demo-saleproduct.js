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
    const productvalue = [5,19,20,21,22,25,29,38,49,50,52,57,64,65,66].map((x,key)=>({id:key+"",product_id:x,campaign_id:1}))
    await queryInterface.bulkInsert('SaleProducts', productvalue, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SaleProducts', null, {});
  }
};
