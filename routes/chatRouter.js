const express = require("express");
const chatRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

chatRouter.get("/", (req, res, next) => {
  res.render("Chat");
});

module.exports = chatRouter;
