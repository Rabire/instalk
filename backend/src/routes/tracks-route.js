module.exports = (app) => {
  const targets = require("../controllers/tracks-controller.js");

  app.post("/target/", targets.create);
};
