module.exports = async (page, target) => {
  try {
    const targetFollowingCount = await page.evaluate(() =>
      parseInt(
        document.querySelector('ul[class="k9GMp "]').children[2].children[0]
          .children[0].innerText
      )
    );

    let followingUsernames = [];

    if (targetFollowingCount > 0) {
      await page.click('a[href*="following"][class="-nal3 "]'); // following link

      await page.waitForSelector('div[class="isgrP"]'); // scrollable following modal

      while (followingUsernames.length < targetFollowingCount) {
        await page.evaluate(() => {
          document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable following modal
        });

        followingUsernames = await page.evaluate(() => {
          let followingUsernamesFromWeb = Array.from(
            document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
          );
          const followingUsernames = [...followingUsernamesFromWeb];
          return followingUsernames.map((follow) => follow.innerText);
        });

        console.log(
          `found: ${followingUsernames.length}/${targetFollowingCount}`
        );
      }

      await page.evaluate(() => {
        document.querySelectorAll('button[class="wpO6b "]')[1].click(); // close followers modal button
      });
    }

    return followingUsernames;
  } catch {
    throw "getFollowing error";
  }
};
