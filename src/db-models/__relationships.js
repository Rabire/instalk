module.exports = function (models) {
  models.InstagramCredentials.belongsTo(models.User, {
    as: "owner",
    foreignKey: "ownerId",
  });
};
