const getAndStoreTargetData = require("../scraping/getAndStoreTargetData");
const { InstagramCredentials, Target } = require("../models");
const { Op } = require("sequelize");

module.exports = async (page) => {
  try {
    const targets = await Target.findAll({
      include: { model: InstagramCredentials, as: "credentialsToAccess" },
      where: {
        // username: "agathe_fig",
        // [Op.not]: [{ username: ["rabire_", "_hamzatt_", "agathe_fig"] }],
      },
    });

    await console.log({ targetsLength: targets.length });

    for (const target of targets) {
      await getAndStoreTargetData(
        page,
        {
          username: target.credentialsToAccess.username,
          password: target.credentialsToAccess.password,
        },
        target
      );
    }
  } catch (err) {
    console.log(err);
    throw "Error during getTargetsDataNightJob ";
  }
};
