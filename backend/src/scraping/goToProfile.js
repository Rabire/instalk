module.exports = async (page, target) => {
  await page.goto(`https://www.instagram.com/${target}`, {
    waitUntil: "networkidle0",
  });
  return true;
};
