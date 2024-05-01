const express = require("express");
const connectDB = require("./config/db");
const setupMiddleware = require("./middleware");
const { setupPassport } = require("./config/passport");
const authRouter = require("./routes/auth");

const app = express();

connectDB();
setupMiddleware(app);
setupPassport(app);

const port = process.env.PORT;

app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
