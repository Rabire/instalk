const trackSchema = require("../schemas/track");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Track", trackSchema, {
    tableName: "track",
  });
};
