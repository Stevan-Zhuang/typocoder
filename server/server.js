const express = require("express");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth");

const app = express();

connectDB();

const port = process.env.PORT;

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
