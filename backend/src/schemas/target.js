const DataTypes = require("sequelize").DataTypes;

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  instagramId: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  username: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fullname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  pictureUrl: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  credentialsToAccessId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    defaultValue: 1,
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
