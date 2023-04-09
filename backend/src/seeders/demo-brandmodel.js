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
     await queryInterface.bulkInsert('BrandModels', [{
       name: 'Iphone 11',
       brand_id: '1',
       id:'1',
     },
     {
      name: 'Iphone X',
      brand_id: '1',
      id:'2',
    }
    ,
    {
      name: 'Iphone 13 Promax',
      brand_id: '2',
      id:'3',
    },
    {
      name: 'Samsung S11',
      brand_id: '2',
      id:'4',
    }
    ,{
      name: 'Samsung A13',
      brand_id: '2',
      id:'5',
    }
    ,{
      name: 'Samsung note 11',
      brand_id: '2',
      id:'6',
    }
    ,{
      name: 'Xiaomi K40 pro',
      brand_id: '3',
      id:'7',
    }
    ,{
      name: 'Xiaomi 10T pro',
      brand_id: '3',
      id:'8',
    }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
