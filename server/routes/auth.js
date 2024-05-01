const express = require("express");
const router = express.Router();
const passport = require("../config/passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function(req, res) {
    req.session.user = req.user;
    res.cookie('session_id', req.session.id);
    res.redirect(process.env.FRONTEND_URL);
  },
);

router.get('/session', (req, res) => {
  res.json({ user: req.session.user });
});

module.exports = router;
