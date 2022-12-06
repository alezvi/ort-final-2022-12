'use strict';

const { randAddress, randNumber } = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let cabinas = []

    for (var i = 0; i < 50; i++) {

      cabinas.push({
          ubicacion : randAddress(),
          numero : randNumber({min: 1, max: 10})
        });

    }

    await queryInterface.bulkInsert('cabinas', cabinas, {});
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.bulkDelete('cabinas', null, {});
  }
};
