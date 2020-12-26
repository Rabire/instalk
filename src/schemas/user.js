const DataTypes = require("sequelize").DataTypes;

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  penisSize: {
    type: DataTypes.INTEGER,
  },
  token: {
    type: DataTypes.STRING,
    unique: true,
  },
  tokenExpiration: {
    type: DataTypes.DATE,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};
