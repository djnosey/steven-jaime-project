const express = require("express");
const authRouter = express.Router();

const bcrypt = require("bcrypt");
const User = require("../models/User.model");
const zxcvbn = require("zxcvbn");

// Helper middleware

const saltRounds = 10;

// Your routes

// GET     /auth/signup
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});

// POST      /auth/signup
authRouter.post("/signup", (req, res, next) => {
  const { username, password } = req.body;

  if (username === "" || password === "") {
    const props = { errorMessage: "Please enter a username and a password" };
    res.render("Signup", props);
    return;
  }

  if (zxcvbn(password).score < 3) {
    const suggestions = zxcvbn(password).feedback.suggestions;
    //console.log('suggestions', suggestions);
    const props = { errorMessage: suggestions[0] };
    //const props = {  errorMessage: 'Password too weak. Try again!'}

    res.render("Signup", props);
    return;
  }

  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        const props = { errorMessage: "User already exists" };
        res.render("Signup", props);
        return;
      }

      // if user available, encrypt
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // After encrypting the password, create the new user in DB
      User.create({ username, password: hashedPassword })
        .then((createdUser) => {
          res.redirect("/");
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = authRouter;
