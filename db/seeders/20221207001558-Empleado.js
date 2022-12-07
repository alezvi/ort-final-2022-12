"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Empleados",
      [
        {
          name: "Cosme",
          lastname: "Fulanito",
          dni: "42202020",
          fechaIngreso: "2022-12-06",
          peajeId: 1,
          createdAt: "2022-12-06",
          updatedAt: "2022-12-06"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Empleados", null, {});
  },
};
