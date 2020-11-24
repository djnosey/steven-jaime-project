const express = require("express");
const transactionRouter = express.Router();
const isLoggedIn = require("./../utils/isLoggedIn");
const parser = require("./../config/cloudinary");
const Product = require("../models/Product.model");
const User = require("../models/User.model");

//GET TradeView
transactionRouter.get("/TradeView/:productId", (req, res, next) => {
  const productId = req.params.productId;
  const currentUser = req.session.currentUser._id;

  Product.findById(productId)
    .then((product) => {
      var currentProduct = product;

      User.findById(currentUser)
        .populate("products")
        .then((user) => {
          const tradeUser = user;
          const props = { currentProduct, tradeUser };
          res.render("TradeView", props);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

//POST TradeView form
transactionRouter.post("/TradeView/:productId", (req, res, next) => {
  const productRequested = req.params.productId;
  const currentUser = req.session.currentUser._id;
  const productOffer = req.body.offeredProduct;
  const approved = false;

  User.findByIdAndUpdate(currentUser, {
    $push: {
      requests: {
        productOffer,
        productRequested,
        approved,
      },
    },
  }).then(() => {
    Product.findById(productRequested).then((returnedProduct) => {
      const sellerId = returnedProduct.seller;
      User.findByIdAndUpdate(sellerId, {
        $push: {
          requests: {
            productOffer,
            productRequested,
            approved,
          },
        },
      }).then(() => {
        res.redirect("/");
      });
    });
  });
});
module.exports = transactionRouter;
