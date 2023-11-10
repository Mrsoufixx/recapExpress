const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.URI)
  .then(() => console.log("databse connected successfully"))
  .catch((err) => console.error(err.message));
