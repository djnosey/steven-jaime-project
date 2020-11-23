const express = require("express");
const userRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

// Helper middleware
const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 10;
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");

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

// POST      /user/editprofile  - Recieve the edit form information

userRouter.post(
  "/editprofile",
  isLoggedIn,
  parser.single("profilepic"),
  (req, res, next) => {
    const { userid } = req.query;
    const { username, password } = req.body;
    // Check if new profile picture is selected, if not just change username
    if (req.file == undefined) {
      User.findByIdAndUpdate(userid, { username }, { new: true })
        .then((updateUsername) => {
          req.session.currentUser = updateUsername;
          console.log("updated username", updateUsername);
          res.redirect("/user/profile");
        })
        .catch((err) => console.log(err));
    } else {
      const image = req.file.secure_url;

      User.findByIdAndUpdate(userid, { username, image }, { new: true })
        .then((updateUsername) => {
          req.session.currentUser = updateUsername;
          console.log("updated username", updateUsername);
          res.redirect("/user/profile");
        })
        .catch((err) => console.log(err));
    }
  }
);

// Delete profile
userRouter.post("/delete", isLoggedIn, (req, res, next) => {
  const { userid } = req.query;
  Product.deleteMany({ seller: userid }).then(() => {
    User.findByIdAndDelete(userid).then(() => {
      req.session.destroy((err) => {
        if (err) {
          res.render("Error");
        } else {
          res.redirect("/");
        }
      });
    });
  });
});

module.exports = userRouter;
