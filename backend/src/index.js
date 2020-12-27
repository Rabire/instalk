const puppeteer = require("puppeteer");
const getTargetsDataNightJob = require("./recurrent-tasks/getTargetsDataNightJob");
const { TargetData } = require("./models");
const moment = require("moment");

async () => {
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
};

(async () => {
  const targetDatas = await TargetData.findAll({
    raw: true,
    // attributes: ["id", "targetId"],
    order: [["createdAt", "ASC"]],
    where: { targetId: 1 },
  });

  await console.log(
    targetDatas.map((targetData) =>
      moment(targetData.createdAt).format("MMMM Do YYYY, h:mm:ss a")
    )
  );

  // await console.log(targetDatas.length);

  await (() => {
    const previousFollowers = JSON.parse(targetDatas[0].followers);
    const recentFollowers = JSON.parse(targetDatas[1].followers);

    const newFollowers = previousFollowers.filter(
      (x) => !recentFollowers.includes(x)
    );

    const missingFollowers = recentFollowers.filter(
      (x) => !previousFollowers.includes(x)
    );

    console.log({ newFollowers, missingFollowers });

    /* ................. */

    const previousFollowing = JSON.parse(targetDatas[0].following);
    const recentFollowing = JSON.parse(targetDatas[1].following);

    const newFollowing = previousFollowing.filter(
      (x) => !recentFollowing.includes(x)
    );

    const missingFollowing = recentFollowing.filter(
      (x) => !previousFollowing.includes(x)
    );

    console.log({ newFollowing, missingFollowing });

    /* ................. */

    const notFollowingBack = recentFollowing.filter(
      (x) => !recentFollowers.includes(x)
    );

    console.log({ notFollowingBack });
  })();
})();
