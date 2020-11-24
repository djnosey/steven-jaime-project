const express = require("express");
const productRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

//ROUTES TO ADD A PRODUCT NEW PRODUCT FOR LOGGED IN USERS

productRouter.get("/createproduct", isLoggedIn, (req, res, next) => {
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
    let actualUser = req.session.currentUser;
    const props = { actualUser };
    Product.create({
      name,
      category,
      description,
      image,
      condition,
      seller: userId,
    })
      .then((newProduct) => {
        newProductId = newProduct._id;
        req.session.currentUser.products.push(newProductId);
        User.findByIdAndUpdate(userId, {
          $push: { products: newProductId },
        })
          .then(() => {
            res.redirect("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  }
);

//ROUTE FOR PRODUCT DETAILS PAGE

productRouter.get("/productdetails/:productId", (req, res, next) => {
  const id = req.params.productId;
  const currentUser = req.session.currentUser;
  let loggedIn = false;
  if (req.session.currentUser !== undefined) {
    loggedIn = true;
  }
  Product.findById(id)
    .populate("seller")
    .then((product) => {
      sellersId = product.seller._id;
      User.findById(sellersId)
        .populate("products")
        .then((returnedSeller) => {
          const props = {
            product,
            currentUser,
            loggedIn,
            returnedSeller,
          };
          res.render("ProductDetails", props);
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

productRouter.post("/delete/:productId", (req, res, next) => {
  productId = req.params.productId;
  Product.findByIdAndDelete(productId).then(() => {
    const actualUser = req.session.currentUser;
    const userId = actualUser._id;
    if (!actualUser) {
      res.redirect("/login");
    } else {
      Product.find({ seller: userId }).then((products) => {
        const props = { actualUser, products };
        res.render("Profile", props);
      });
    }
  });
});

module.exports = productRouter;
