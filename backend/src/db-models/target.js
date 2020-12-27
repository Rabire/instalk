const targetSchema = require("../schemas/target");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("Target", targetSchema, {
    tableName: "target",
  });
};
