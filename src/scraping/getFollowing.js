module.exports = async (page, target) => {
  try {
    await page.goto(`https://www.instagram.com/${target}`, {
      waitUntil: "networkidle0",
    });

    const targetFollowingCount = await page.evaluate(
      () =>
        document.querySelector('ul[class="k9GMp "]').children[2].children[0]
          .children[0].innerText
    );

    await page.click('a[href*="following"][class="-nal3 "]'); // followers link

    await page.waitForSelector('div[class="isgrP"]'); // scrollable followers modal

    let followingUsernames = [];
    while (followingUsernames.length < targetFollowingCount) {
      await page.evaluate(() => {
        document.querySelector('div[class="isgrP"]').scroll(0, 120000); // scrollable followers modal
      });

      followingUsernames = await page.evaluate(() => {
        let followingUsernamesFromWeb = Array.from(
          document.querySelectorAll('a[class="FPmhX notranslate  _0imsa "]') // usernames list
        );
        const followingUsernames = [...followingUsernamesFromWeb];
        return followingUsernames.map((follow) => follow.innerText);
      });
    }

    return followingUsernames;
  } catch {
    throw "getFollowing error";
  }
};
