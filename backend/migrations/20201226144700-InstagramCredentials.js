"use strict";
const instagramCredentialsSchema = require("../src/schemas/instagramcredentials");

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable(
      "instagramcredentials",
      instagramCredentialsSchema
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("instagramcredentials");
  },
};
