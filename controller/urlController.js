const shortUrl = require("../model/urlModel");
const catchAsync = require("../utils/catchAsync");

exports.createShortUrl = catchAsync(async (req, res, next) => {
  const newUrl = await shortUrl.create({
    full: req.body.url,
  });

  res.status(200).json({
    status: "success",
    data: newUrl,
  });
});

exports.getUrl = catchAsync(async (req, res, next) => {
  const url = await shortUrl.findById(req.params.id);

  if (url === null)
    return res.status(404).json({
      status: "success",
      message: "Url not found! Please check your id and try again.",
    });

  url.clicks++;
  url.save();

  res.status(200).json({
    status: "success",
    data: url,
  });
});

exports.getAllUrls = catchAsync(async (req, res, next) => {
  const allUrls = await shortUrl.find();

  if (allUrls.length === 0) {
    return res.status(404).json({
      status: "success",
      message: "No Url found! ",
    });
  }

  res.status(200).json({
    status: "success",
    results: allUrls.length,
    data: allUrls,
  });
});

exports.deleteUrl = catchAsync(async (req, res, next) => {
  let urlId = req.params.id;
  await shortUrl.findByIdAndDelete(urlId);

  res.status(204).json({
    status: "success",
  });
});
