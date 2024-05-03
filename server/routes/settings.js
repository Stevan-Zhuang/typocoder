const express = require("express");
const router = express.Router();
const UserSettings = require("../models/UserSettings");

router.get("/:userId", async (req, res) => {
  try {
    const settings = await UserSettings.findOne({ userId: req.params.userId });
    if (!settings) {
      return res
        .status(404)
        .json({ message: "No settings found for this user" });
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;