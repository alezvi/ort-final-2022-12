'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cabinas', [{
     "nroCabina": "2",
     "createdAt": "2022-12-07 10:33:00",
     "updatedAt": "2022-12-07 10:33:00",
    },
    {
      "nroCabina":"3",
      "createdAt": "2022-12-07 10:33:00",
      "updatedAt": "2022-12-07 10:33:00",
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cabinas', null, {});
  }
};
