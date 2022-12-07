'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Cabinas', [

        //Cabinas peaje 1
        {
        numero: 1,
        peajeId: 1,
        createdAt: '2022-12-10',
        updatedAt: '2022-12-10'
        },
        {
          numero: 2,
          peajeId: 1,
          createdAt: '2022-12-10',
          updatedAt: '2022-12-10'
          },
          {
            numero: 3,
            peajeId: 1,
            createdAt: '2022-12-10',
            updatedAt: '2022-12-10'
            },
            {
              numero: 4,
              peajeId: 1,
              createdAt: '2022-12-10',
              updatedAt: '2022-12-10'
              },
    
            //Cabinas peaje 2
            {
              numero: 1,
              peajeId: 2,
              createdAt: '2022-12-10',
              updatedAt: '2022-12-10'
              },
              {
                numero: 2,
                peajeId: 2,
                createdAt: '2022-12-10',
                updatedAt: '2022-12-10'
                },
                {
                  numero: 3,
                  peajeId: 3,
                  createdAt: '2022-12-10',
                  updatedAt: '2022-12-10'
                  },

    
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Cabinas', null, {});
     
  }
};
