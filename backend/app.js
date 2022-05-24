const express = require("express");

// Constant
const PORT = 5000;

// MongoDb
require("dotenv").config({ path: "./config/.env" });
require("./config/db");

// Routes
const userRoutes = require("./routes/userRoutes");

// Express
const app = express();
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Listening on port ` + PORT);
});
