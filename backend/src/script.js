const puppeteer = require("puppeteer");
const getTargetsDataNightJob = require("./recurrent-tasks/getTargetsDataNightJob");
const { TargetData, Target, InstagramCredentials } = require("./models");

const nightBot = (async () => {
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

// InstagramCredentials.create({
//   ownerId: "1",
//   username: "rabire_",
//   password: "motdepasse",
// });

// Target.update(
//   { credentialsToAccessId: 2 },
//   {
//     where: { id: 7 },
//   }
// );

// const notFollowingBack = recentFollowing.filter(
//   (x) => !recentFollowers.includes(x)
// );

// Target.create({
//   instagramId: "2446084769415914538",
//   username: "agathe_fig",
//   fullname: "𝔸𝕘𝕒𝕥𝕙𝕖 🐺",
//   pictureUrl:
//     "https://scontent-cdt1-1.cdninstagram.com/v/t51.2885-19/s320x320/125528768_189492965982733_5200123679774447720_n.jpg?_nc_ht=scontent-cdt1-1.cdninstagram.com&_nc_ohc=5EuODQ37nqQAX_DxEnG&tp=1&oh=027ff98529b066d3ed8246448fdaf1fa&oe=60191F2F",
// });

// TargetData.update('["t_azr10","cantin83"]', {
//   where: { id: 14 },
// });

// console.log("do stuff");
