const puppeteer = require("puppeteer");
const credentials = require("./credentials");
const login = require("./login");

const stalk = async (credentials, target) => {
  const browser = await puppeteer.launch({
    headless: false, // if true => hide Chromium
    args: ["--window-size=1920,1080"],
    defaultViewport: null,
  });

  const page = await browser.newPage();

  await login(page, credentials);

  // getTargetFollowers(target)

  await page.screenshot({ path: "screenshot-test.png" });
  await browser.close();
};

stalk(credentials, "rabire_");
