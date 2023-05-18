'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductOptions', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      showing_img_thumbnail:{
        type: Sequelize.STRING
      },
      straight_img: {
        type: Sequelize.STRING
      },
      straight_img_thumbnail: {
        type: Sequelize.STRING
      },
      side_img: {
        type: Sequelize.STRING
      },
      side_img_thumbnail: {
        type: Sequelize.STRING
      },
      product_id: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductOptions');
  }
};