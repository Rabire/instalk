const jwt = require("jsonwebtoken");

module.exports = (userId) => {
  const date = new Date();
  const expirationDate = date.setDate(date.getDate() + 1);
  const userToken = jwt.sign({ userId: userId }, "crypt");

  const tokenData = {
    token: userToken,
    tokenExpiration: expirationDate,
  };
  return tokenData;
};
