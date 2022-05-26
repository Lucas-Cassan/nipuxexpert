const express = require("express");
const cors = require("cors");

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
const corsOptions = {
  origin: true,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/user", userRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Listening on port ` + PORT);
});
