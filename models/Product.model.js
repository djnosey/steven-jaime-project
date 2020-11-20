const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const productSchema = new Schema(
  {
    name: { type: String },
    category: [{ type: String, enum: ["Electronics", "Home", "Hobbies"] }],
    description: { type: String },
    image: String,
    condition: { type: Number, enum: ["new", "used"] },
    seller: [{ type: Schema.Types.ObjectId, ref: "User" }],
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
