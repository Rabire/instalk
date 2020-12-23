module.exports = async (page, { username, password }) => {
  console.log("going to www.instagram.com...");
  await page.goto(`https://www.instagram.com`, {
    waitUntil: "networkidle0",
  });

  await page.click('button[class="aOOlW  bIiDR  "]'); // accept button

  //   await page.click('a[class="-nal3 "]'); // followers link

  console.log("loging-in...");
  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  await page.waitForFunction(
    () => document.querySelectorAll('button[class="aOOlW   HoLwm "]').length
  );

  //   await page.waitForSelector('button[class="aOOlW   HoLwm "]').length;

  await page.click('button[class="aOOlW   HoLwm "]'); // skip notifications
  console.log("login successful");

  // await page.click('button[class="sqdOP yWX7d    y3zKF     "]'); // skip save creds

  //   await page.waitForNavigation();
  //   await page.click('a[class="-nal3 "]'); // followers button
};
