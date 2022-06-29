const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlRoutes = require("./routes/urlRoutes");
const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.Database.replace(
  "<PASSWORD>",
  process.env.Databse_password
);
mongoose.connect(DB).then((con) => {
  // console.log(con.connections);
  console.log("DB connection succesfull!");
});

app.set("view engine", "pug");

app.use("/js", express.static("./js/"));

app.use(express.urlencoded({ extended: false }));

app.use("/api", urlRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`your server is running at ${port}..`);
});
