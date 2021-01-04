// const botCredentials = require("./data/credentials");
const login = require("./login");
const goToProfile = require("./goToProfile");
const getFollowers = require("./getFollowers");
const getFollowing = require("./getFollowing");
const logout = require("./logout");
const { TargetData } = require("../models");

module.exports = getAndStoreTargetData = async (
  page,
  botCredentials,
  target
) => {
  try {
    await login(page, botCredentials);

    await goToProfile(page, target.username);
    const targetFollowers = await getFollowers(page, target.username);
    const targetFollowing = await getFollowing(page, target.username);

    // await console.log({
    //   targetFollowers,
    //   targetFollowersCount: targetFollowers.length,
    //   targetFollowing,
    //   targetFollowingCount: targetFollowing.length,
    // });

    await TargetData.create({
      targetId: target.id,
      followers: JSON.stringify(targetFollowers),
      following: JSON.stringify(targetFollowing),
    });

    await logout(page);
  } catch (err) {
    throw `Error during getAndStoreTargetData + ${err}`;
  }
};
