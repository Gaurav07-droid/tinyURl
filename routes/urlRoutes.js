const express = require("express");
const urlController = require("../controller/urlController");

const router = express.Router();

router.route("/").get(urlController.getOverview);

router.route("/shortUrl").post(urlController.createShortUrl);

router.route("/:shortUrl").get(urlController.getUrl);

router.route("/delete/:id").get(urlController.deleteUrl);

module.exports = router;
