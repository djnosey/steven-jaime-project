// Model
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const userSchema = new Schema(
  {
    name: { type: String, unique: true },
    password: { type: String },
    image: String,
    transactions: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
    myItems: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
    messages: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

// Create the model
const User = mongoose.model("User", userSchema);

// Exports
module.exports = User;