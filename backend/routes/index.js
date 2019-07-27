const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const { verifyToken } = require("../config/jwt");
const passport = require("../config/passport");
const post = require("../controllers/post.controllers");

//AUTHENTICATION ROUTES
router.post("/signup", auth.signup);
router.post("/login", passport.authenticate("local"), auth.login);
router.get("/logout", auth.logout);
router.get("/profile", verifyToken, auth.profile);

//REST CRUD POSTS

//Create Post
router.post("/posts", post.createPost);

//READ POST --get all posts
router.get("/posts", post.getAllPosts);

//READ SINGLE POST --get post by id
router.get("/posts/:id", post.getSinglePost);

//UPDATE SINGLE POST
router.patch("/post/:id", post.updatePost);

//DELETE POST
router.delete("/posts/:id", post.deletePost);

module.exports = router;
