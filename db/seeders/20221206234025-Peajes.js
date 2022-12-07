'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Peajes', [
      {
        provincia: 'Buenos Aires',
        ruta: 2,
        kilometro: 100,
        createdAt:'2022-12-6',
        updatedAt:'2022-12-6'
      },
      {
        provincia: 'Cordoba',
        ruta: 34,
        kilometro: 50,
        createdAt:'2022-12-6',
        updatedAt:'2022-12-6'
      }
    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Peajes', null, {});
  }
};
