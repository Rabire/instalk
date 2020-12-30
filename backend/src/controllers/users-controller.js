const { User } = require("../models");
const hash = require("../utils/hash.js");
const getTokenData = require("../utils/token");
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

          const newTokenData = getTokenData(user.id);

          await User.update(newTokenData, {
            where: { id: userId },
          });

          const userData = { ...user.dataValues, token: newTokenData.token };

          return res.status(200).send({ user: userData });
        } else return res.status(401).send("unknown email or password");
      } else return res.status(401).send("unknown username or password");
    })
    .catch((e) => {
      console.log(e);
      return res.status(401).send("unknown username or password");
    });
};

exports.create = async (req, res) => {
  // -- Body verification --
  const bodyReceived = req.body;

  if (
    !bodyReceived.username &&
    !bodyReceived.email &&
    !bodyReceived.password &&
    !bodyReceived.penisSize
  ) {
    return res.status(401).send("one or multiple required fields are empty");
  }

  // TODO: check email is unique

  const userToCreate = {
    username: bodyReceived.username,
    email: bodyReceived.email,
    password: hash.createHash(bodyReceived.password),
    gender: bodyReceived.gender,
    penisSize: bodyReceived.penisSize,
  };

  try {
    const userCreated = await User.create(userToCreate);

    const updateToken = getTokenData(userCreated.id);

    await User.update(updateToken, {
      where: { id: userCreated.id },
    });

    const finalUser = await User.findOne({
      where: {
        id: userCreated.id,
      },
    });

    return res.status(201).send({ user: finalUser });
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};
