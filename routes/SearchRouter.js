const express = require("express");
const searchRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

searchRouter.get("/searchitem", (req, res, next) => {
  const myQuery = req.query.searchStr;
  Product.find({ name: myQuery }).then((allProducts) => {
    if (allProducts.length !== 0) {
      const props = { allProducts, nothingFound: false };
      res.render("Home", props);
    } else {
      Product.find().then((allProducts) => {
        const props = { allProducts, nothingFound: true };
        res.render("Home", props);
      });
    }
  });
});

module.exports = searchRouter;
