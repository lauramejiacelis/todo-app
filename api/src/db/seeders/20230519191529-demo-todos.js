'use strict';
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Todos", [
      {
        id: uuidv4(),
        userId: '15c9c82f-6dd6-4620-ba69-369475703f21',
        description: "Shine",
        status: "Work in progress",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: '15c9c82f-6dd6-4620-ba69-369475703f21',
        description: "Collapse",
        status: "To Do",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: '1ef79635-531c-4ed0-b620-272ea1d92495',
        description: "Produce heat",
        status: "Done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        userId: '9380b28c-af4f-4c5e-9ff0-9c0e00215535',
        description: "Fight with Mars",
        status: "Done",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {});
    
  }
};
