const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const userRoutes = require("./routes/user.routes");
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api", userRoutes);

//APPLICATION
app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
