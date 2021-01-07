const mysqldump = require("mysqldump");
const moment = require("moment");

const now = moment().format("DDMYYYY_hmmss");

mysqldump({
  connection: {
    host: "localhost",
    user: "root",
    password: "rabirelebg",
    database: "instalk-db",
  },
  dumpToFile: `./dump/${now}.sql`,
});
