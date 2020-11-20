const express = require("express");
const productRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

productRouter.get("/createproduct", isLoggedIn, (req, res, next) => {
  console.log("add product session", req.session.currentUser);
  const props = req.session.currentUser;
  res.render("AddProduct", props);
});

productRouter.post(
  "/addproduct/:userId",
  isLoggedIn,
  parser.single("productPic"),
  (req, res, next) => {
    let image = req.file.secure_url;
    let userId = req.params.userId;
    let name = req.body.name;
    let description = req.body.description;
    let category = req.body.category;
    let condition = req.body.condition;
    console.log("userID", userId);

    Product.create({
      name,
      category,
      description,
      image,
      condition,
      seller: userId,
    }).then((createdProduct) => {
      res.render("Profile");
    });
  }
);

module.exports = productRouter;
