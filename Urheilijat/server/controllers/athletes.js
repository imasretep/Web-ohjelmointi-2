const athleteRouter = require("express").Router();
const { db } = require('../utils/config');

athleteRouter.get("/athletes", (_req, res) => {
  db.query("SELECT * FROM athletes", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

athleteRouter.put("/athletes/:id", (req, res) => {
  const id = Number(req.params.id);
  const updatedAthlete = req.body;

  db.query("UPDATE athletes SET ? WHERE id = ?", [updatedAthlete, id],
    (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Database error", error: err.message });
      }
      res.json({ message: "Update was succesfull", result });
    });
});

athleteRouter.post("/add", (req, res) => {
  const athlete = req.body;

  if (!athlete || Object.keys(athlete).length === 0) {
    return res.status(400).json({ message: "No athlete data provided" });
  }

  db.query("INSERT INTO athletes SET ?", athlete, (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Database error", error: err.message });
    }
    return res.status(201).json({ message: "Athlete was successfully added", result });
  });
});

athleteRouter.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  db.query("DELETE FROM athletes WHERE id = ?", [id], (err, _result) => {
    if (err) throw err;
    return res.status(204).send();
  })
});

module.exports = athleteRouter;
