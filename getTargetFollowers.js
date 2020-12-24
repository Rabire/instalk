module.exports = async (page, target) => {
  console.log(`going on ${target} profile...`);
  await page.goto(`https://www.instagram.com/${target}`, {
    waitUntil: "networkidle0",
  });

  const targetFollowersCount = await page.evaluate(
    () =>
      document.querySelector('ul[class="k9GMp "]').children[1].children[0]
        .children[0].innerText
  );

  const totalLoopstogatAllFollowers = targetFollowersCount / 12;

  await page.click('a[class="-nal3 "]'); // followers link

  console.log("scrolling in the followers list...");
  await page.waitForFunction(
    () => document.querySelectorAll('div[class="isgrP"]').length
  );

  let followersLoaded = await page.evaluate(
    () => document.querySelector('div[class="PZuss"]').children.length
  );
  while (followersLoaded < targetFollowersCount) {
    await page.evaluate(() => {
      document.querySelector('div[class="isgrP"]').scroll(0, 9999999999);
    });

    followersLoaded = await page.evaluate(
      () => document.querySelector('div[class="PZuss"]').children.length
    );

    await console.log({ followersLoaded });
  }
};
