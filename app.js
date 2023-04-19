const express = require("express");
const compression = require("compression");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

app.use("/js", express.static("./js/"));

app.use(express.json("10kb"));
app.use(express.urlencoded({ extended: false }));
app.use(compression());

app.use("/api/v1/tinyUrl", urlRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`cant find ${req.originalUrl} on this server`, 404));
});
app.use((err, req, res, next) => {});

module.exports = app;
