'use strict';
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: uuidv4(),
      firstName: 'Rigel',
      lastName: 'Orion',
      email: 'rigel@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      firstName: 'Altair',
      lastName: 'Aguila',
      email: 'altair@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: uuidv4(),
      firstName: 'Antares',
      lastName: 'Escorpio',
      email: 'antares@email.com',
      password: '123456',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

  }
};
