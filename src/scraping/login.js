module.exports = async (page, { username, password }) => {
  await page.goto(`https://www.instagram.com`, {
    waitUntil: "networkidle0",
  });
  await page.click('button[class="aOOlW  bIiDR  "]'); // accept button

  await page.type('input[name="username"]', username);
  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');

  await page.waitForFunction(
    () => document.querySelectorAll('button[class="aOOlW   HoLwm "]').length
  );

  await page.click('button[class="aOOlW   HoLwm "]'); // skip notifications
};