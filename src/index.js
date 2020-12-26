const puppeteer = require("puppeteer");
const moment = require("moment");
const botCredentials = require("./data/credentials");
const login = require("./scraping/login");
const getFollowers = require("./scraping/getFollowers");
const getFollowing = require("./scraping/getFollowing");
// const cron = require("node-cron");
// const express = require("express");
<<<<<<< HEAD
=======
const { TargetData } = require("./models");
>>>>>>> f09aa2ee5f374665a1b1eb61df43e6057ce324d5

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

    const targetFollowers = await getFollowers(page, target);
    const targetFollowing = await getFollowing(page, target);

    await console.log({
      targetFollowers,
      targetFollowersCount: targetFollowers.length,
      targetFollowing,
      targetFollowingCount: targetFollowing.length,
    });
  } catch {
    browser.close();
    throw "Error during stalk()";
  }

  // await page.screenshot({ path: "./src/screenshot-test.png" });
  await browser.close();

  await console.log(`runtime= ${moment(start).diff(moment()) / 1000}sec`);
};

// storeTargetDatas(botCredentials, "rabire_");

TargetData.create({
  targetId: 1,
  followers: "[]",
  following: "[]",
});

// app = express();

// // Schedule tasks to be run on the server.
// cron.schedule("* * * * *", function () {
//   console.log(`${moment().format("LTS")}`);
//   storeTargetDatas(botCredentials, "rabire_");
// });

// app.listen(3000);
