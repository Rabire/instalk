const cliProgress = require("cli-progress");

module.exports = async (page, target) => {
  try {
    const targetFollowersCount = await page.evaluate(() =>
      parseInt(
        document
          .querySelector('ul[class="k9GMp "]')
          .children[1].children[0].children[0].innerText.replace(/\s+/g, "")
      )
    );

    let followersCollected = [];

    if (targetFollowersCount > 0) {
      await page.click('a[href*="followers"][class="-nal3 "]'); // followers link

      await page.waitForSelector('div[class="isgrP"]'); // scrollable followers modal

      const progressBar = new cliProgress.SingleBar(
        {},
        cliProgress.Presets.legacy
      );
      progressBar.start(targetFollowersCount, 0);

      let lastfollowersCollectedCount = 0;
      let stuckRound = 0;
      const limit =
        targetFollowersCount - Math.floor(targetFollowersCount * 0.02);

      while (followersCollected.length < targetFollowersCount) {
        const actualCount = followersCollected.length;

        await page.evaluate(() => {
          document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable followers modal
        });

        followersCollected = await page.evaluate(() => {
          let followersCollectedFromWeb = Array.from(
            document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
          );
          const followersCollected = [...followersCollectedFromWeb];
          return followersCollected.map((follower) => follower.innerText);
        });

        if (actualCount === lastfollowersCollectedCount) {
          stuckRound++;
        } else {
          lastfollowersCollectedCount = actualCount;
          stuckRound = 0;
        }

        if (stuckRound > 500 && actualCount >= limit) break;

        progressBar.update(actualCount);
      }

      await progressBar.stop();

      await page.evaluate(() => {
        document.querySelectorAll('button[class="wpO6b "]')[1].click(); // close followers modal button
      });
    }

    return followersCollected;
  } catch {
    throw "getFollowers error";
  }
};
