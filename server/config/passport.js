const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOne({ googleId: profile.id }, function(err, user) {
        if (err) {
          return cb(err);
        }
        if (!user) {
          user = new User({
            googleId: profile.id,
            name: profile.displayName,
            email: profile.emails[0].value,
          });
          user.save(function(err) {
            if (err) console.log(err);
            return cb(err, user);
          });
        } else {
          return cb(err, user);
        }
      });
    },
  ),
);

module.exports = passport;
