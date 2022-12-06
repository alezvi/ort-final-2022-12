'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Employees', [{
      name: 'Juan',
      sureName: 'Suarez',
      dni: '25857458',
      admissionDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alberto',
      sureName: 'Sanchez',
      dni: '30547855',
      admissionDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Adrian',
      sureName: 'Garcia',
      dni: '15477844',
      admissionDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
