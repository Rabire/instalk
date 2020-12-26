module.exports = async (page, target) => {
  try {
    await page.goto(`https://www.instagram.com/${target}`, {
      waitUntil: "networkidle0",
    });

    const targetFollowersCount = await page.evaluate(() =>
      parseInt(
        document.querySelector('ul[class="k9GMp "]').children[1].children[0]
          .children[0].innerText
      )
    );

    let followersUsernames = [];

    if (targetFollowersCount > 0) {
      await page.click('a[href*="followers"][class="-nal3 "]'); // followers link

      await page.waitForSelector('div[class="isgrP"]'); // scrollable followers modal

      while (followersUsernames.length < targetFollowersCount) {
        await page.evaluate(() => {
          document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable followers modal
        });

        followersUsernames = await page.evaluate(() => {
          let followersUsernamesFromWeb = Array.from(
            document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
          );
          const followersUsernames = [...followersUsernamesFromWeb];
          return followersUsernames.map((follower) => follower.innerText);
        });
      }
    }

    return followersUsernames;
  } catch {
    throw "getFollowers error";
  }
};
