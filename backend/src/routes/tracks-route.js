module.exports = (app) => {
  const targets = require("../controllers/tracks-controller.js");

  app.get("/tracks", targets.getAllMine);
  app.post("/track/", targets.create);
};
