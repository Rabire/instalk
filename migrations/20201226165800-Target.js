"use strict";
const targetSchema = require("../src/schemas/target");

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("target", targetSchema);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("target");
  },
};
