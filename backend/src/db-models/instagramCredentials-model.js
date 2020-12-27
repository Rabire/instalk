const instagramCredentialsSchema = require("../schemas/instagramcredentials");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define("InstagramCredentials", instagramCredentialsSchema, {
    tableName: "instagramCredentials",
  });
};
