"use strict";
const targetdataSchema = require("../src/schemas/targetdata");

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("targetdata", targetdataSchema);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("targetdata");
  },
};
