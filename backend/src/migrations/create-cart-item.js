'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartItems', {
      cart_id: {
        type: Sequelize.STRING
      },
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      material_id: {
        type: Sequelize.STRING
      },
      model_id: {
        type: Sequelize.STRING
      },
      productoption_id: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('CartItems');
  }
};