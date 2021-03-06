const express = require("express");
const searchRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const toUpperCase = require("./../utils/toUpperCase");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

searchRouter.get("/searchitem", (req, res, next) => {
  const myQuery = req.query.searchStr;
  const uppercasedSearch = toUpperCase(myQuery);

  // const firstLetter = craftName.charAt(0).toUpperCase();
  // const restWord = craftName.slice(1);
  // const newWord = firstLetter + restWord;
  // Craft.find({ title: { $regex: newWord } })

  Product.find({ name: { $regex: uppercasedSearch } }).then((allProducts) => {
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

searchRouter.get("/searchcategory", (req, res, next) => {
  const querycategory = req.query.querycategory;
  console.log(req.query.querycategory);
  Product.find({ category: querycategory }).then((allProducts) => {
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
