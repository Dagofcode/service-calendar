exports.upload = (req, res) => {
  console.log(req.file.url);
  res.status(201).json({ img: req.file.url });
};
