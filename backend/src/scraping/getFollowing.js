const cliProgress = require("cli-progress");

module.exports = async (page, target) => {
  try {
    const targetFollowingCount = await page.evaluate(() =>
      parseInt(
        document.querySelector('ul[class="k9GMp "]').children[2].children[0]
          .children[0].innerText
      )
    );

    let followingCollected = [];

    if (targetFollowingCount > 0) {
      await page.click('a[href*="following"][class="-nal3 "]'); // following link

      await page.waitForSelector('div[class="isgrP"]'); // scrollable following modal

      const progressBar = new cliProgress.SingleBar(
        {},
        cliProgress.Presets.legacy
      );
      progressBar.start(targetFollowingCount, 0);

      let lastfollowingCollectedCount = 0;
      let stuckRound = 0;
      const limit =
        targetFollowingCount - Math.floor(targetFollowingCount * 0.02);

      while (followingCollected.length < targetFollowingCount) {
        const actualCount = followingCollected.length;

        await page.evaluate(() => {
          document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable following modal
        });

        followingCollected = await page.evaluate(() => {
          let followingCollectedFromWeb = Array.from(
            document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
          );
          const followingCollected = [...followingCollectedFromWeb];
          return followingCollected.map((follow) => follow.innerText);
        });

        if (actualCount === lastfollowingCollectedCount) {
          stuckRound++;
        } else {
          lastfollowingCollectedCount = actualCount;
          stuckRound = 0;
        }

        if (stuckRound > 1000 && actualCount >= limit) break;

        progressBar.update(actualCount);
      }

      await progressBar.stop();

      await page.evaluate(() => {
        document.querySelectorAll('button[class="wpO6b "]')[1].click(); // close followers modal button
      });
    }

    return followingCollected;
  } catch {
    throw "getFollowing error";
  }
};
