const request = require("supertest");
const express = require("express");
const settingsRouter = require("../routes/settings");
const defaultSettings = require("../config/defaultSettings");

const app = express();

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
