const { User } = require("../models");

const jwt = require("jsonwebtoken");

exports.tryGetUserFromToken = async (req) => {
  const token = req.header("Instalk-Token");

  const verify = jwt.verify(token, "crypt");

  const user = await User.findOne({
    where: {
      id: verify.userId,
    },
  });

  if (user && user.token === token) {
    return user;
  } else {
    throw "invalid user token";
  }
};
