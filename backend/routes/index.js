const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const { verifyToken } = require("../config/jwt");
const passport = require("../config/passport");
const post = require("../controllers/post.controllers");
const calendar = require("../controllers/calendar.controllers");

//AUTHENTICATION ROUTES
router.post("/signup", auth.signup);
router.post("/login", passport.authenticate("local"), auth.login);
router.get("/logout", auth.logout);
router.get("/profile", verifyToken, auth.profile);

//REST CRUD POSTS MODEL

//Create Post
router.post("/posts", post.createPost);

//READ get creator posts
router.get("/posts/author/:id", post.getAuthorPosts);

//READ POST --get all posts
router.get("/posts", post.getAllPosts);

//READ SINGLE POST --get post by id
router.get("/posts/:id", post.getSinglePost);

//UPDATE SINGLE POST
router.patch("/posts/:id", post.updatePost);

//DELETE POST
router.delete("/posts/:id", post.deletePost);

// REST CRUD ROUTES FOR CALENDAR MODEL
router.post("/calendar", calendar.createCalendar);
router.get("/calendar", calendar.getAllCalendar);
router.get("/calendar/post/:id", calendar.getSingleCalendar);
router.delete("calendar/:id", calendar.deleteCalendar);

module.exports = router;
