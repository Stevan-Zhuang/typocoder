const express = require("express");
const router = express.Router();
const { passport } = require("../config/passport");
const User = require("../models/User");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    req.session.user = req.user;
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ error: "Could not save session" });
      }
      res.cookie("session_id", req.session.id);
      res.redirect(process.env.FRONTEND_URL);
    });
  },
);

router.get("/session", async (req, res) => {
  if (!req.session.user) {
    return res.json({ user: null });
  }
  try {
    const user = await User.findOne({ googleId: req.session.user.googleId });
    if (!user) {
      return res
        .status(500)
        .json({ message: "No user found with this googleId" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/signout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Could not sign out" });
    }
    res.clearCookie("session_id");
    res.json({ message: "Successfully signed out" });
  });
});

module.exports = router;
