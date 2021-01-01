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
  require("./routes/tracks-route.js")(app);

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

  await console.log({ targetDatasCount: targetDatas.length });

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

    // console.log({ notFollowingBack });
  })();
};

const createTarget = () => {
  Target.create({
    instagramId: "2446084769415914538",
    username: "agathe_fig",
    fullname: "𝔸𝕘𝕒𝕥𝕙𝕖 🐺",
    pictureUrl:
      "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/125528768_189492965982733_5200123679774447720_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=5EuODQ37nqQAX_DxEnG&tp=1&oh=027ff98529b066d3ed8246448fdaf1fa&oe=60191F2F",
  });
};

const agtNewFollowers = {
  followers: '["t_azr10","cantin83"]',
};

const updateTargetData = () => {
  console.log("ntm");
  TargetData.update(agtNewFollowers, {
    where: { id: 14 },
  });
};
