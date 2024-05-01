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
    req.session.save(err => {
      if (err) {
        return res.status(500).json({ error: 'Could not save session' });
      }
      res.cookie('session_id', req.session.id);
      res.redirect(process.env.FRONTEND_URL);
    });
  },
);

router.get('/session', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  res.json({ user: req.session.user });
});

module.exports = router;
