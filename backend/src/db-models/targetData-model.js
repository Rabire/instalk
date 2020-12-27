const targetDataSchema = require("../schemas/targetdata");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("TargetData", targetDataSchema, {
    tableName: "targetData",
  });
};
