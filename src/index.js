const puppeteer = require("puppeteer");
const getAndStoreTargetData = require("./scraping/getAndStoreTargetData");
const { InstagramCredentials, Target } = require("./models");

// getAndStoreTargetData (page, botCredentials, target)

const getTargetsDataNightJob = async (page) => {
  try {
    const targets = await Target.findAll({
      include: { model: InstagramCredentials, as: "credentialsToAccess" },
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

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ["--window-size=1000,800"],
    defaultViewport: null,
  });
  const page = await browser.newPage();

  await page.goto(`https://www.instagram.com`, {
    waitUntil: "networkidle0",
  });
  await page.click('button[class="aOOlW  bIiDR  "]'); // accept button

  getTargetsDataNightJob(page);
})();
