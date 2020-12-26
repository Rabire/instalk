"use strict";
const userSchema = require("../src/schemas/user");

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("user", userSchema);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("user");
  },
};
