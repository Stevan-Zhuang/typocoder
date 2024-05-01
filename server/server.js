const express = require("express");
const connectDB = require("./config/db");
const setupMiddleware = require("./middleware");
const { setupPassport } = require("./config/passport");
const authRouter = require("./routes/auth");
const setupRoutes = require("./routes");

const app = express();

connectDB();
setupMiddleware(app);
setupPassport(app);
setupRoutes(app);

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
