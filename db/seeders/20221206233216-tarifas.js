'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert
    ('Tarifas',
      [
        {
          tipoVehiculoId: 1,
          tipoTarifaId: 1,
          valor: 88.49,
          vigente: true,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          tipoVehiculoId: 1,
          tipoTarifaId: 2,
          valor: 141.60,
          vigente: true,
          createdAt:new Date(),
          updatedAt:new Date()
        },
        
      ]);
    },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Tarifas', null, {});
  }
};

