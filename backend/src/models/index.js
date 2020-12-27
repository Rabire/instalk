"use strict";

const path = require("path");
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../../config/config.json")[env];
const db = {};
const glob = require("glob");

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize.models = {};

const modelsDir = path.join(__dirname, "..", "db-models");

glob
  .sync(`${modelsDir}/*.js`, { ignore: `${modelsDir}/__relationships.js` })
  .map((filePath) => sequelize.import(filePath));

require(`${modelsDir}/__relationships.js`)(sequelize.models);

// </HOOKS>
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = { db, ...db.sequelize.models };
