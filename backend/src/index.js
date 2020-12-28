const puppeteer = require("puppeteer");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const moment = require("moment");
const getTargetsDataNightJob = require("./recurrent-tasks/getTargetsDataNightJob");
const { TargetData, Target } = require("./models");

const nightBot = async () => {
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

const apiServerRunning = (() => {
  const app = express();
  const port = 3000;

  app.use(bodyParser.json());
  app.use(cors());

  require("./routes/users-route.js")(app);

  app.listen(port, () =>
    console.log(`Example listening at http://localhost:${port}`)
  );
})();

const getTargetsDataAndDoSomeStats = async () => {
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

  await (() => {
    console.log({ targetDatasCount: targetDatas.length });

    const previousFollowers = JSON.parse(targetDatas[0].followers);
    const recentFollowers = JSON.parse(targetDatas[1].followers);

    console.log({ previousFollowersCount: previousFollowers.length });
    console.log({ recentFollowersCount: recentFollowers.length });

    const newFollowers = recentFollowers.filter(
      (x) => !previousFollowers.includes(x)
    );

    const missingFollowers = previousFollowers.filter(
      (x) => !recentFollowers.includes(x)
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
};

const createTarget = () => {
  Target.create({
    instagramId: "2110819682",
    username: "caroliineuuuh",
    fullname: "Caroline",
    pictureUrl:
      "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/116839972_159202825741454_6097133301578213421_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=DNfGYDbTmyYAX_SOGhk&tp=1&oh=5ecbd3c81f03b44c17c4ce626b71d52f&oe=6014553B",
  });
};
