const request = require("supertest");
const express = require("express");
const settingsRouter = require("../routes/settings");
const connectDB = require("../config/db");
const defaultSettings = require("../config/defaultSettings");

const app = express();

connectDB();

app.use(express.json());
app.use("/settings", settingsRouter);

describe("GET /settings/default", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/settings/default")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, defaultSettings, done);
  });
});

describe("GET /settings/:userId", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/settings/6639660cfe3f7829977fae7d")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("PUT /settings/:userId", function() {
  it("responds with json", function(done) {
    request(app)
      .put("/settings/6639660cfe3f7829977fae7d")
      .send({ theme: "oneLight" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});