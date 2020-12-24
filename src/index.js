const puppeteer = require("puppeteer");
const credentials = require("./data/credentials");
const login = require("./scraping/login");
const getTargetFollowers = require("./scraping/getTargetFollowers");

const stalk = async (credentials, target) => {
  const browser = await puppeteer.launch({
    headless: false, // if true => hide Chromium
    args: ["--window-size=1920,1080"],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await login(page, credentials);
  const followers = await getTargetFollowers(page, target);
  await console.log({ followers });
  await console.log(followers.length);

  await page.screenshot({ path: "./src/screenshot-test.png" });
  await browser.close();
};

stalk(credentials, "_hamzatt_");
