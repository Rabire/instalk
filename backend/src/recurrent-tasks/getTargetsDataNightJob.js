const getAndStoreTargetData = require("../scraping/getAndStoreTargetData");
const { InstagramCredentials, Target } = require("../models");

module.exports = async (page) => {
  try {
    const targets = await Target.findAll({
      include: { model: InstagramCredentials, as: "credentialsToAccess" },
      // where: { username: "rabire_" },
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
