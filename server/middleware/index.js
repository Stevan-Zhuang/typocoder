const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const setupMiddleware = (app) => {
  app.use(express.json());

  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    }),
  );

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: true,
      store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URL,
      }),
      cookie: {
        sameSite: "none",
        secure: false,
        httpOnly: true,
        maxAge: 60000,
      },
    }),
  );
};

module.exports = setupMiddleware;
