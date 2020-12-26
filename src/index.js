const puppeteer = require("puppeteer");
const moment = require("moment");
const botCredentials = require("./data/credentials");
const login = require("./scraping/login");
const getFollowers = require("./scraping/getFollowers");
const getFollowing = require("./scraping/getFollowing");
const goToProfile = require("./scraping/goToProfile");
// const cron = require("node-cron");
// const express = require("express");
const { TargetData } = require("./models");

const storeTargetDatas = async (botCredentials, target) => {
  const start = await new Date();
  const browser = await puppeteer.launch({
    headless: false, // if true => hide Chromium
    args: ["--window-size=1000,800"],
    defaultViewport: null,
  });

  try {
    const page = await browser.newPage();

    await login(page, botCredentials);

    await goToProfile(page, target);
    const targetFollowers = await getFollowers(page, target);
    const targetFollowing = await getFollowing(page, target);

    await console.log({
      targetFollowers,
      targetFollowersCount: targetFollowers.length,
      targetFollowing,
      targetFollowingCount: targetFollowing.length,
    });
  } catch {
    throw "Error during stalk()";
  }

  // await page.screenshot({ path: "./src/screenshot-test.png" });
  await browser.close();

  await console.log(`runtime= ${moment(start).diff(moment()) / 1000}sec`);
};

storeTargetDatas(botCredentials, "getfiit2021");

// TargetData.create({
//   targetId: 1,
//   followers: "[]",
//   following: "[]",
// });

// app = express();

// // Schedule tasks to be run on the server.
// cron.schedule("* * * * *", function () {
//   console.log(`${moment().format("LTS")}`);
//   storeTargetDatas(botCredentials, "rabire_");
// });

// app.listen(3000);
