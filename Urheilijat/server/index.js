const app = require("./app");
const config = require("./utils/config");


config.db.connect((err) => {
  if (err) throw err;
  console.log("Connected to the database");

  app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
  });
});


