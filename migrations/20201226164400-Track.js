"use strict";
const trackSchema = require("../src/schemas/track");

module.exports = {
  up: (queryInterface, sequelize) => {
    return queryInterface.createTable("track", trackSchema);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("track");
  },
};
