const express = require("express");
const cors = require("cors");
const dictionariesRouter = require("./controllers/dictionaries");
var app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Content-type", "application/json");
  next();
});

// Routes
app.use("/dictionary", dictionariesRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
