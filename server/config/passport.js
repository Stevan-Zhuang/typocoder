const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const UserSettings = require("../models/UserSettings");
const UserStats = require("../models/UserStats");
const defaultSettings = require("./defaultSettings");

const setupPassport = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async function(accessToken, refreshToken, profile, cb) {
        try {
          let user = await User.findOne({ googleId: profile.id });
          if (!user) {
            user = new User({
              googleId: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
            });
            await user.save();

            const userSettings = new UserSettings({
              userId: user._id,
              ...defaultSettings,
            });
            await userSettings.save();

            const userStats = new UserStats({
              userId: user._id,
            });
            await userStats.save();
          }
          return cb(null, user);
        } catch (err) {
          return cb(err);
        }
      },
    ),
  );
};

module.exports = { setupPassport, passport };
