const request = require("supertest");
const express = require("express");
const statsRouter = require("../routes/stats");
const connectDB = require("../config/db");

const app = express();

connectDB();

app.use(express.json());
app.use("/stats", statsRouter);

describe("GET /stats/default", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/stats/default")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        200,
        {
          snippetsTyped: 0,
          linesTyped: 0,
          secondsSpentTyping: 0,
          highestLinesPerMinute: 0,
        },
        done,
      );
  });
});
