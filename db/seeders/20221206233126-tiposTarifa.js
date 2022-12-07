'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert
    ('tipoTarifas',
      [
        {
          descripcion:"Hora Pico",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descripcion:"Hora No Pico",
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
    },
  async down (queryInterface, Sequelize) {z
     await queryInterface.bulkDelete('tipostarifas', null, {});
  }
};
