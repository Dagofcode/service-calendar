const User = require("../models/User");
const { createToken } = require("../config/jwt");

exports.signup = (req, res, next) => {
  console.log(req.body);
  User.register({ ...req.body }, req.body.password)
    .then(user => res.status(201).json({ user }))
    .catch(err => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
  console.log(req.user);

  const { user } = req;
  const [header, payload, signature] = createToken(user);
  res.cookie("headload", `${header}.${payload}.`, {
    // expires: 1000 * 60 * 30,
    // secure: true
  });
  res.cookie("signature", signature, {
    // httpOnly: true,
    // secure: true
  });
  res.status(200).json({ user });
};

exports.logout = (req, res, next) => {
  res.clearCookie("headload");
  res.clearCookie("signature");
  res.status(200).json({ msg: "Logged out" });
};
exports.profile = (req, res, next) => {
  res.status(200).json({ user: req.user, msg: "Welcome t0 profile" });
};
