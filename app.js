const express = require("express");
const dotenv = require("dotenv");
const DB_CONNECT = require("./config/db");
const app = express();
const router = require("./routes/routes");
const cookieParser = require("cookie-parser");

dotenv.config({ path: "./config/config.env" });

// Adding template engine
app.set("view engine", "ejs");

// Connectin to mongodb
DB_CONNECT();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

// Router
app.use("/", router);

// Init server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App is running on port ${PORT}`));
