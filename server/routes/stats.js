const express = require("express");
const router = express.Router();
const UserStats = require("../models/UserStats");

router.get("/default", (req, res) => {
  res.json({
    snippetsTyped: 0,
    linesTyped: 0,
    secondsSpentTyping: 0,
    highestLinesPerMinute: 0,
  });
});

router.get("/:userId", async (req, res) => {
  try {
    const stats = await UserStats.findOne({ userId: req.params.userId });
    if (!stats) {
      return res
        .status(404)
        .json({ message: "No stats found for this user" });
    }
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put("/:userId", async (req, res) => {
  try {
    const updatedStats = await UserStats.findOneAndUpdate(
      { userId: req.params.userId },
      req.body,
      { new: true }
    );
    if (!updatedStats) {
      return res
        .status(404)
        .json({ message: "No stats found for this user" });
    }
    res.json(updatedStats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
