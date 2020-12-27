module.exports = async (page, { username, password }) => {
  await page.waitForSelector('input[name="username"]');

  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  try {
    /* Save creds */
    await page
      .waitForSelector('span[class="coreSpriteKeyhole"]')
      .then(() => page.click('button[class="sqdOP yWX7d    y3zKF     "]'));

    /* Skip notifications */
    // page
    //   .waitForSelector('button[class="aOOlW   HoLwm "]')
    //   .then(() => page.click('button[class="aOOlW   HoLwm "]'))
    //   .catch(() => console.log("not first login"));

    return true;
  } catch (err) {
    throw `Login error ${err}`;
  }
};
