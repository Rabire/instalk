const DataTypes = require("sequelize").DataTypes;

module.exports = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  targetId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  followers: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  following: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};
