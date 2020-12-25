const puppeteer = require("puppeteer");
const botCredentials = require("./data/credentials");
const login = require("./scraping/login");
const getFollowers = require("./scraping/getFollowers");

const stalk = async (botCredentials, target) => {
  const browser = await puppeteer.launch({
    headless: false, // if true => hide Chromium
    args: ["--window-size=1000,800"],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await login(page, botCredentials);
  const targetFollowers = await getFollowers(page, target);
  await console.log({
    targetFollowers,
    targetFollowersCount: targetFollowers.length,
  });

  // await page.screenshot({ path: "./src/screenshot-test.png" });
  await browser.close();
};

// stalk(botCredentials, "_hamzatt_");
stalk(botCredentials, "rabire_");
