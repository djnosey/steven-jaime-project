const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

// Helper middleware
const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 10;
const parser = require("./../config/cloudinary");

// ROUTES

// GET      /user/profile  - Render the profile view
userRouter.get("/profile", isLoggedIn, (req, res, next) => {
  const actualUser = req.session.currentUser;

  const props = { actualUser };

  if (!actualUser) {
    res.redirect("/login");
  } else {
    res.render("Profile", props);
  }
});

// GET      /user/editprofile  - Render the edit profile view
userRouter.get("/editprofile", isLoggedIn, (req, res, next) => {
  const actualUser = req.session.currentUser;
  const props = { actualUser };
  res.render("EditProfile", props);
});

// POST      /user/editprofile  - Render the edit profile view
// to change the profile picture, tried to add function after isLoggedIn, image parameter in line 43 and image parameter inside obj of line 46
userRouter.post(
  "/editprofile",
  isLoggedIn,
  parser.single("profilepic"),
  (req, res, next) => {
    const { userid } = req.query;
    const { username, password, image } = req.body;
    console.log("profile image", image);

    User.findByIdAndUpdate(userid, { username, image }, { new: true })
      .then((updateUsername) => {
        req.session.currentUser = updateUsername;
        console.log("updated username", updateUsername);
        res.redirect("/user/profile");
      })
      .catch((err) => console.log(err));
  }
);

module.exports = userRouter;
