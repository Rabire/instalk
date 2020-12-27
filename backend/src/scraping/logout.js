module.exports = async (page) => {
  await page.click('span[class="_2dbep qNELH"]'); // profile bubble button

  await page.evaluate(
    () => document.querySelectorAll('div[class="-qQT3"]')[1].click() // disconnect button
  );

  return true;
};
