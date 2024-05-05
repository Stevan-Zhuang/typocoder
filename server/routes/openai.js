const express = require("express");
const generateText = require("../services/openaiService");
const router = express.Router();

router.get("/:language", async (req, res) => {
  try {
    const result = await generateText(req.params.language);
    res.json({ text: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
