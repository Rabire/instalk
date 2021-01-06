const puppeteer = require("puppeteer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const getTargetsDataNightJob = require("./recurrent-tasks/getTargetsDataNightJob");
const cron = require("node-cron");

(async () => {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(cors());

  require("./routes/users-route.js")(app);
  require("./routes/tracks-route.js")(app);

  app.listen(port, () =>
    console.log(`Example listening at http://localhost:${port}`)
  );

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

  cron.schedule("40 22 * * *", function () {
    getTargetsDataNightJob(page);
  });
})();
