const mongoose = require("mongoose");
const User = require("./../models/User.model");
const Product = require("./../models/Product.model");

const users = require("./users-mock-data");
const products = require("./products-mock-data");

const DB_NAME = "tradeApp-seed";

// SEED SEQUENCE:

// CONNECT TO MONGO DB (MONGOOSE)
mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((x) => {
    // AFTER CONNECTION , DROP THE EXISTING DATABASE
    console.log("Connected to DB" + DB_NAME);

    const pr = x.connection.dropDatabase();

    return pr;
  })
  .then(() => {
    // CREATE THE USER

    const pr = User.create(users);
    return pr;
  })
  .then((createdUsers) => {
    console.log(`Created ${createdUsers.length} users`);

    // UPDATE THE BOOKS - SET THE `authors` field and add the id of the author
    const updatedProducts = products.map((productsObj, i) => {
      const usersObj = createdUsers[i];
      productsObj.users = [usersObj._id];

      return productsObj;
    });

    //console.log("updatedProducts", updatedProducts);

    // CREATE THE BOOKS
    const pr = Product.create(updatedProducts);

    return pr;
  })
  .then((createdProducts) => {
    console.log(`Created ${createdProducts.length} products`);

    // CLOSE THE DB CONNECTION
    mongoose.connection.close();
  });
