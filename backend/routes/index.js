const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controllers");
const { verifyToken } = require("../config/jwt");
const passport = require("../config/passport");

router.post("/signup", auth.signup);
router.post("/login", passport.authenticate("local"), auth.login);
router.get("/logout", auth.logout);
router.get("/profile", verifyToken, auth.profile);

module.exports = router;
