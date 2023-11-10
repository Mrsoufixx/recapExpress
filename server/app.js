const express = require("express");
const apiRoutes = require("./routes/api");
const cors = require("cors");
const c = cors();

// Connect to MongoDB
require("./config/database");

const app = express();

app.use(c);
app.use(express.json());

// Use your consolidated API routes
app.use("/api", apiRoutes);

module.exports = app;
