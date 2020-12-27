const puppeteer = require("puppeteer");
const getTargetsDataNightJob = require("./recurrent-tasks/getTargetsDataNightJob");

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

  await getTargetsDataNightJob(page);

  await browser.close();
})();
