module.exports = async (page, { username, password }) => {
  await page.goto(`https://www.instagram.com`, {
    waitUntil: "networkidle0",
  });
  await page.click('button[class="aOOlW  bIiDR  "]'); // accept button

  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  try {
    /* Save creds */
    await page
      .waitForSelector('span[class="coreSpriteKeyhole"]')
      .then(() => page.click('button[class="sqdOP yWX7d    y3zKF     "]'));

    /* Skip notifications */
    await page
      .waitForSelector('button[class="aOOlW   HoLwm "]')
      .then(() => page.click('button[class="aOOlW   HoLwm "]'));

    return true;
  } catch {
    throw "Login error";
  }
};
