'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cabinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
      provincia: {
        type: Sequelize.STRING
      },
      nRuta: {
        type: Sequelize.INTEGER
      },
      kilometro: {
        type: Sequelize.INTEGER
      },
      numeroCabina: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cabinas');
  }
};