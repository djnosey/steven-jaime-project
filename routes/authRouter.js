const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

// Helper middleware
const isLoggedIn = require("./../utils/isLoggedIn");
const saltRounds = 10;
const parser = require("./../config/cloudinary");

// SIGNUP ----------

authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

authRouter.post("/signup", parser.single("profilepic"), (req, res, next) => {
  let profilepic = "";
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Please enter a username and a password" };
    res.render("Signup", props);
    return;
  }

  if (zxcvbn(password).score < 1) {
    const suggestions = zxcvbn(password).feedback.suggestions;
    //console.log('suggestions', suggestions);
    const props = { errorMessage: suggestions[0] };
    //const props = {  errorMessage: 'Password too weak. Try again!'}

    res.render("Signup", props);
    return;
  }

  if (req.file === undefined) {
    profilepic = "/images/blank-profile-picture.png";
  } else {
    profilepic = req.file.secure_url;
  }

  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "User already exists" };
        res.render("Signup", props);
        return;
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      User.create({ username, password: hashedPassword, image: profilepic })
        .then((createdUser) => {
          createdUser.password = "******";
          req.session.currentUser = createdUser;
          res.redirect("/");
          console.log("created user", createdUser);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// LOG IN ----------

// GET  /auth/login  - Render the Login form
authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

// POST     /auth/login
authRouter.post("/login", (req, res, next) => {
  const { username, password } = req.body;
  if (username === "" || password === "") {
    const props = { errorMessage: "Please enter your username and password" };
    res.render("Login", props);
    return;
  }

  User.findOne({ username }).then((user) => {
    if (!user) {
      const props = { errorMessage: "User not found" };
      res.render("Login", props);
      return;
    }

    const passwordCorrect = bcrypt.compareSync(password, user.password);

    if (passwordCorrect) {
      req.session.currentUser = user;
      res.redirect("/");
    } else {
      res.render("Login", { errorMessage: "Incorrect password" });
    }
  });
});

authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      res.render("Error");
    } else {
      res.redirect("/");
    }
  });
});

module.exports = authRouter;
