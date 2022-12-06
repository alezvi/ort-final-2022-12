'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Peajes', [{
      "direccionId" : 1,
      "numero" : 10,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    },
    {
      "direccionId" : 2,
      "numero" : 11,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    },
    {
      "direccionId" : 3,
      "numero" : 12,
      "createdAt" : "2022-12-06 20:38:00",
      "updatedAt" : "2022-12-06 20:38:00"
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Peajes', null, {truncate: true, cascade: true});
  }
};
