const express = require("express");
const cors = require("cors");
const athleteRouter = require("./controllers/athletes")

const app = express();

app.use(cors());
app.use(express.json());

// Routers
app.use("/api", athleteRouter)

module.exports = app;
