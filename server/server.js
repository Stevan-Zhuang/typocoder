const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");

require("dotenv").config();
const uri = process.env.MONGODB_URL;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

const app = express();
const port = process.env.PORT || 5001;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
