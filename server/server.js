const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const User = require("./models/User");

require("dotenv").config();
const uri = process.env.MONGODB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

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

const app = express();
const port = process.env.PORT || 5001;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
