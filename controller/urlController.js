const shortUrl = require("../model/urlModel");

exports.createShortUrl = async (req, res, next) => {
  await shortUrl.create({
    full: req.body.fullUrl,
  });

  res.redirect("/api");
};

exports.getOverview = async (req, res, next) => {
  const urls = await shortUrl.find({ active: { $ne: false } });
  res.render("index", { urls });
  next();
};

exports.getUrl = async (req, res, next) => {
  const url = await shortUrl.findOne({ short: req.params.shortUrl });

  if (url === null) return res.status(404);

  url.clicks++;
  url.save();
  res.redirect(url.full);
};

exports.deleteUrl = async (req, res, next) => {
  const deleted = await shortUrl.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { active: false } }
  );

  if (deleted !== null) return res.redirect("/api");
};
