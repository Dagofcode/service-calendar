const Post = require("../models/Post");

exports.createPost = (req, res, next) => {
  console.log(req.body.updatedForm);
  Post.create({
    ...req.body.updatedForm,
    author: req.body.author,
    photo: req.body.updatedForm.photo.photo
  })
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
exports.getAuthorPosts = (req, res, next) => {
  Post.find({ author: req.params.id })
    .then(posts => {
      res.status(200).json({ posts });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
};

exports.updatePost = (req, res, next) => {
  const { id } = req.params;

  Post.findByIdAndUpdate(id, { ...req.body.form }, { new: true })
    .then(post => {
      res.status(200).json({ post });
    })
    .catch(err => {
      res.status(200).json({ err });
    });
};

exports.deletePost = (req, res, next) => {
  const { id } = req.params;
  console.log(id);

  Post.findByIdAndDelete(id)
    .then(post => res.status(200).json({ post, msg: "Deleted post" }))
    .catch(err => res.status(500).json({ err }));
};
