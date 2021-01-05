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

      while (followersCollected.length < targetFollowersCount) {
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

        console.log(
          `found: ${followersCollected.length}/${targetFollowersCount}`
        );
      }

      await page.evaluate(() => {
        document.querySelectorAll('button[class="wpO6b "]')[1].click(); // close followers modal button
      });
    }

    return followersCollected;
  } catch {
    throw "getFollowers error";
  }
};
