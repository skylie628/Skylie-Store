'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShippingAddresses', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      account_id: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      firstname: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phonenum: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.INTEGER
      },
      ward: {
        type: Sequelize.INTEGER
      },
      homenum: {
        type: Sequelize.STRING
      },
      default: {
        type: Sequelize.BOOLEAN
      },
      account_id: {
        type: Sequelize.STRING
      },
      address: {
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
    await queryInterface.dropTable('ShippingAddresses');
  }
};