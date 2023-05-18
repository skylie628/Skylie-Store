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

    await queryInterface.bulkInsert('Colors', [{
       name: 'Đen',
       code:'#000000',
       id: 'black'
     },
     {
      name: 'Trắng',
      code:'#FFFFFF',
      id: 'white'
    },
    {
      name: 'Đa màu',
      code:'X',
      id: 'mutli'
    },
    {
      name: 'Đỏ',
      code:'#BD0917',
      id: 'red'
    },
    {
      name: 'Cam',
      code:'#F6762A',
      id: 'orange'
    },
    {
        name: 'Vàng',
        code:'#F5F301',
        id: 'yellow'
      },
      {
        name: 'Lục',
        code:'#00319B',
        id: 'green'
      },
      {
        name: 'Lam',
        code:'#026038',
        id: 'blue'
      },
      {
          name: 'Tím',
          code:'#B528B4',
          id: 'purple'
        },
        {
            name: 'Hồng',
            code:'#F72D93',
            id: 'pink'
          },
          {
            name: 'Bạc',
            code:'#6D6C6C',
            id: 'silver'
          },
          {
              name: 'Nâu',
              code:'#4C3528',
              id: 'brown'
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
