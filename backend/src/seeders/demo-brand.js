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
 const brandname =["Iphone", "Samsung", "Oppo", "Realme", "Vivo", 
 "Xiaomi", "Huawei", "Sony", "Nokia", "Zenfone", "Vsmart", "HTC", "LG", 
 "Meizu", "Motorola", "Oneplus"].map((name,key)=>
 ({
  name,
  id: `${key}`,
 }))

  await queryInterface.bulkInsert('Brands', brandname, {});
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
