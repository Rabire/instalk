const userSchema = require("../schemas/user");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", userSchema, {
    tableName: "user",
  });
};
