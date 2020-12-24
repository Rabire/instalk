function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

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

  await page.waitForFunction(
    () => document.querySelectorAll('div[class="isgrP"]').length // scrollable followers modal
  );

  await console.log("scrolling in the followers list...");

  for (let i = 1; i < totalLoopstogatAllFollowers + 1; i++) {
    await page.evaluate(() => {
      document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable followers modal
    });
    await delay(1000);
  }

  return await page.evaluate(() => {
    let followersUsernamesFromWeb = Array.from(
      document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
    );
    const followersUsernames = [...followersUsernamesFromWeb];
    return followersUsernames.map((follower) => follower.innerText);
  });
};
