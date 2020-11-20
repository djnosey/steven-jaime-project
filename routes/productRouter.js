const express = require("express");
const productRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");

const User = require("../models/User.model");

productRouter.get("/createproduct", isLoggedIn, (req, res, next) => {
  console.log("add product session", req.session.currentUser);
  res.render("AddProduct");
});

module.exports = productRouter;
