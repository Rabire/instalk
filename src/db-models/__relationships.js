module.exports = function (models) {
  models.InstagramCredentials.belongsTo(models.User, {
    as: "owner",
    foreignKey: "ownerId",
  });

  models.Track.belongsTo(models.User, {
    as: "stalker",
    foreignKey: "stalkerId",
  });

  models.Track.belongsTo(models.Target, {
    as: "target",
    foreignKey: "targetId",
  });

  models.TargetData.belongsTo(models.Target, {
    as: "target",
    foreignKey: "targetId",
  });

  models.Target.belongsTo(models.InstagramCredentials, {
    as: "credentialsToAccess",
    foreignKey: "credentialsToAccessId",
  });
};
