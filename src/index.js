const puppeteer = require("puppeteer");
const moment = require("moment");
const botCredentials = require("./data/credentials");
const login = require("./scraping/login");
const getFollowers = require("./scraping/getFollowers");
const getFollowing = require("./scraping/getFollowing");
const goToProfile = require("./scraping/goToProfile");
// const cron = require("node-cron");
// const express = require("express");
const {
  TargetData,
  User,
  InstagramCredentials,
  Track,
  Target,
} = require("./models");

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

storeTargetDatas(botCredentials, "rabire_");

// TargetData.create({
//   targetId: 1,
//   followers: "[]",
//   following: "[]",
// });

// User.create({
//   username: "superadmin",
//   email: "superadmin@gmail.com",
//   password: "HASH/HASH/HASH",
//   gender: "M",
//   penisSize: 50,
// });

// InstagramCredentials.findOne({
//   include: [{ model: User, as: "owner" }],
// }).then((creds) => console.log(creds));

// InstagramCredentials.create({
//   ownerId: 1,
//   username: "rabireh69@gmail.com",
//   password: "rabire",
// });

// Track.create({
//   stalkerId: 1,
//   targetId: 1,
// });

// Target.create({
//   instagramId: "2621480436",
//   username: "rabire_",
//   fullname: "Rabire",
//   pictureUrl:
//     "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/120454079_343851196725862_4052356271230671259_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=suMXCo0XzEUAX9VpBbu&tp=1&oh=c7b908f5b297f516796987a780570d04&oe=600FDAC9",
// });

// app = express();
// // Schedule tasks to be run on the server.
// cron.schedule("* * * * *", function () {
//   console.log(`${moment().format("LTS")}`);
//   storeTargetDatas(botCredentials, "rabire_");
// });
// app.listen(3000);
