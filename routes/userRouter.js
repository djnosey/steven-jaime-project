const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

// Helper middleware
const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 10;

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

//POST


module.exports = userRouter;
