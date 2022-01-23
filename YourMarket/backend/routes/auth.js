const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignUpUser = require("../models/sign-up");
const SignInUser = require("../models/sign-in");

const router = express.Router();

router.post("/signup", (req, res, next) => {
//   bcrypt.hash(req.body.password, 10).then((hash) => {
//     const user = new SignUpUser({
//       email: req.body.email,
//       password: hash,
//     });
//     user
//       .save()
//       .then((result) => {
//         res.status(201).json({
//           message: "User created!",
//           result: result,
//         });
//       })
//       .catch((err) => {
//         res.status(500).json({
//           error: err,
//         });
//       });
//   });
});

router.post("/signin", (req, res, next) => {
  SignInUser.findOne({ email: req.body.email })
    .then((user) => {
      console.log(user);
      if (!user) {
        return user.status(401).json({
          message: "Auth failed",
        });
      }
      return bcrypt.compare(req.body.password, user.password);
    })
    .then((result) => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed",
        });
      }
      const token = jwt.sign(
        { email: user.email, userId: user._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
      });
    })
    .catch((err) => {
      return res.status(401).json({
        message: "Auth failed",
      });
    });
});

module.exports = router;
