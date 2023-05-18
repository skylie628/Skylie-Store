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
    const nameList = ['Cyberpunk','Messi','Ronaldo','Mpappe','Neymar','Minimalist','12 Zodiacs','Couple','Astronaut','Unique','Japan Vibe']
    const seedList =  nameList.map((x,id) =>{return {id,name: x}});
    console.log(seedList);
    await queryInterface.bulkInsert('Collections',seedList, {});
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
