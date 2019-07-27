const Post = require("../models/Post");

exports.createPost = (req, res, next) => {
  Post.create({ ...req.body })
    .then(post => {
      res.status(200).json({ post, msg: "post created" });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.status(200).json({ posts });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.getSinglePost = (req, res, next) => {
  const { id } = req.params;
  Post.findById(id)
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.updatePost = (req, res, next) => {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(err => {
      res.status(200).json({ err });
    });
};

exports.deletePost = (req, res, next) => {
  const { id } = req.params;
  Post.findByIdAndDelete(id)
    .then(post => res.status(200).json({ food, msg: "Deleted post" }))
    .catch(err => res.status(500).json({ err }));
};
