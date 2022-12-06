'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Direccions', [{
      "provincia" : "Santa Fe",
      "ruta" : 10,
      "kilometro" : 28,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    },
    {
      "provincia" : "Cordoba",
      "ruta" : 28,
      "kilometro" : 8,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    },
    {
      "provincia" : "Chubut",
      "ruta" : 30,
      "kilometro" : 123,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Direccions', null, {truncate: true, cascade: true});
  }
};
