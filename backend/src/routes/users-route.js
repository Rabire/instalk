module.exports = (app) => {
  const users = require("../controllers/users-controller.js");

  app.post("/user/login", users.login);

  app.post("/user/", users.create);
};
