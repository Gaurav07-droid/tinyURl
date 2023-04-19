const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.Database.replace(
  "<password>",
  process.env.Databse_password
);
mongoose.connect(DB).then((con) => {
  // console.log(con.connections);
  console.log("DB connection succesfull!");
});

const port = process.env.PORT || 5000;
// console.log(process.env.PORT);
const server = app.listen(port, () => {
  console.log(`your server is running at ${port}..`);
});

process.on("unhandledRejection", (err) => {
  console.log("unhandled rejection 💥 !shuting down");
  console.log(err);
  server.close(() => {
    process.exit(1);
  });
});
