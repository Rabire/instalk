module.exports = (app) => {
  const targets = require("../controllers/targets-controller.js");

  app.post("/target/", targets.create);
};
