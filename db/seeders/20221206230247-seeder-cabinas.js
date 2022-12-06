'use strict';

const { randCounty , randNumber, randFullAddress } = require('@ngneat/falso')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let cabinas = []

    for (var i = 0; i < 50; i++) {

      cabinas.push({
          direccion : randFullAddress(),
          provincia : randCounty(),
          nRuta : randNumber({min: 1, max: 100}),
          kilometro : randNumber({min: 1, max: 999}),
          numeroCabina: randNumber({min: 1, max: 10}),       
          createdAt: new Date,
          updatedAt: new Date,
        });

    }

    await queryInterface.bulkInsert('cabinas', cabinas, {});
  },

  async down (queryInterface, Sequelize) {


    await queryInterface.bulkDelete('cabinas', null, {});
  }
};
