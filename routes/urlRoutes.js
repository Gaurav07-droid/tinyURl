const express = require("express");
const urlController = require("../controller/urlController");

const router = express.Router();

router
  .route("/")
  .post(urlController.createShortUrl)
  .get(urlController.getAllUrls);

router.route("/:id").get(urlController.getUrl);

router.route("/:id").delete(urlController.deleteUrl);

module.exports = router;
