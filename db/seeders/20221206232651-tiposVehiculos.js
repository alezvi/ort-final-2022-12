'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert
    ('tipovehiculos',
      [
        {
          descripcion:"Moto",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descripcion:"Livianos",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descripcion:"Livianos con remolque",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descripcion:"Pesados 3 ejes",
          createdAt:new Date(),
          updatedAt:new Date()
        },
        {
          descripcion:"Pesados 4 ejes",
          createdAt:new Date(),
          updatedAt:new Date()
        }
      ]);
    },
  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tipovehiculos', null, {});
  }
};
