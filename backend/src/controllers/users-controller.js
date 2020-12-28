const { User } = require("../models");
const hash = require("../utils/hash.js");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");

exports.login = async (req, res) => {
  // -- Body verification --
  const bodyReceived = req.body;

  if (!bodyReceived.username || !bodyReceived.password) {
    return res.status(401).send("one or multiple required fields are empty");
  }

  // -- Login manipulations --
  User.findOne({
    where: {
      [Op.or]: [
        { username: bodyReceived.username },
        { email: bodyReceived.username },
      ],
    },
  })
    .then(async (user) => {
      if (user && user.password) {
        const passwordIsCorrect = hash.compareHash(
          bodyReceived.password,
          user.password
        );

        if (passwordIsCorrect) {
          const userId = user.id;

          const date = new Date();
          const expirationDate = date.setDate(date.getDate() + 1);
          const userToken = jwt.sign({ userId: user.id }, "crypt");

          const newTokenData = {
            token: userToken,
            tokenExpiration: expirationDate,
          };

          await User.update(newTokenData, {
            where: { id: userId },
          });

          const userData = { ...user.dataValues, token: userToken };

          return res.status(200).send({ user: userData });
        } else return res.status(401).send("unknown email or password");
      } else return res.status(401).send("unknown username or password");
    })
    .catch((e) => {
      console.log(e);
      return res.status(401).send("unknown username or password");
    });
};
