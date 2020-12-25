const puppeteer = require("puppeteer");
const botCredentials = require("./data/credentials");
const login = require("./scraping/login");
const getFollowers = require("./scraping/getFollowers");
const getFollowing = require("./scraping/getFollowing");

const stalk = async (botCredentials, target) => {
  const browser = await puppeteer.launch({
    headless: false, // if true => hide Chromium
    args: ["--window-size=1000,800"],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  try {
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
};

// stalk(botCredentials, "_hamzatt_");
stalk(botCredentials, "rabire_");
