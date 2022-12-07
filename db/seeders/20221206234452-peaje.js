"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Peajes',
      [
        {
          "provincia": "Buenos Aires",
          "nroRuta": "8",
          "km": "43",
          "createdAt": "2022-12-07 10:33:00",
          "updatedAt": "2022-12-07 10:33:00",
        },
        {
          "provincia": "Cordoba",
          "nroRuta": "20",
          "km": "10",
          "createdAt": "2022-12-06 11:33:00",
          "updatedAt": "2022-12-06 11:33:00",
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Peajes', null, {});
  },
};
