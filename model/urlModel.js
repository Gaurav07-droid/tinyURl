const mongoose = require("mongoose");
const shortId = require("shortid");

const urlSchema = new mongoose.Schema({
  full: {
    type: String,
    required: true,
  },

  short: {
    type: String,
    required: true,
    default: shortId.generate(),
  },
  clicks: {
    type: Number,
    default: 0,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const ShortUrl = mongoose.model("ShortUrl", urlSchema);

module.exports = ShortUrl;
