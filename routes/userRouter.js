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
userRouter.get("/profile", (req, res, next) => {
  const actualUser = req.session.currentUser;
  console.log("actual user", actualUser);
  const props = { actualUser };

  res.render("Profile", props);
});

module.exports = userRouter;
