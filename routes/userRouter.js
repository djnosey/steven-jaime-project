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
  const userId = actualUser._id;
  if (!actualUser) {
    res.redirect("/login");
  } else {
    Product.find({ seller: userId })
      .populate("seller")
      .then((products) => {
        const myProducts = products;
        const props = { actualUser, myProducts };
        res.render("Profile", props);
      });
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
    const { username, phone } = req.body;
    // Check if new profile picture is selected, if not just change username
    if (req.file == undefined) {
      User.findByIdAndUpdate(userid, { username, phone }, { new: true })
        .then((updateUsername) => {
          req.session.currentUser = updateUsername;
          //console.log("updated username", updateUsername);
          res.redirect("/user/profile");
        })
        .catch((err) => console.log(err));
    } else {
      const image = req.file.secure_url;

      User.findByIdAndUpdate(userid, { username, image }, { new: true })
        .then((updateUsername) => {
          req.session.currentUser = updateUsername;
          //console.log("updated username", updateUsername);
          res.redirect("/user/profile");
        })
        .catch((err) => console.log(err));
    }
  }
);

// Here it works with GET and POST, done know which is better to use, but it is working
// POST      /user/delete  - Render the delete confirmation view
userRouter.post("/delete", isLoggedIn, (req, res, next) => {
  const actualUser = req.session.currentUser;
  const props = { actualUser };
  res.render("DeleteConfirmation", props);
});

// POST      /user/deleteConfiration  - Delete user
userRouter.post("/deleteConfirmation", isLoggedIn, (req, res, next) => {
  const { userid } = req.query;
  Product.deleteMany({ seller: userid })
    .then(() => {
      const pr = User.findByIdAndDelete(userid);
      return pr;
    })
    .then(() => {
      req.session.destroy((err) => {
        if (err) {
          res.render("Error");
        } else {
          res.redirect("/");
          //res.status(200).send
        }
      });
    });
});

module.exports = userRouter;
