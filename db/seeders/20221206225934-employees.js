'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      userName: 'Juan',
      lastName: 'Suarez',
      dni: '25857458',
      admissionDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Alberto',
      lastName: 'Sanchez',
      dni: '30547855',
      admissionDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userName: 'Adrian',
      lastName: 'Garcia',
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
