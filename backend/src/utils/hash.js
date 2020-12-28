const bcrypt = require("bcrypt");

const saltRounds = 10;

exports.createHash = (plainTextPassword) => {
  const hash = bcrypt.hashSync(plainTextPassword, saltRounds);
  return hash;
};

exports.compareHash = (plainTextPassword, hash) => {
  const isEqual = bcrypt.compareSync(plainTextPassword, hash);
  return isEqual;
};
