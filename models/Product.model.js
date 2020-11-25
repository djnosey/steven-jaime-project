const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const productSchema = new Schema(
  {
    name: { type: String },
    category: {
      type: String,
      enum: [
        "Electronics",
        "Vehicles",
        "Baby",
        "Home",
        "Hobbies",
        "Clothing",
        "Sports",
        "Outdoor",
        "Christmas",
      ],
    },
    description: { type: String },
    image: String,
    condition: {
      type: String,
      enum: ["New", "Used", "Nearly new", "Broken/for parts"],
    },
    seller: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// Create the model
const Product = mongoose.model("Product", productSchema);

// Exports
module.exports = Product;
