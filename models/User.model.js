const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    image: { type: String },
    // transactions: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
    // myItems: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
    // messages: [{ type: mongoose.SchemaType.ObjectId, ref: "Product" }],
  },
  {
    timestamps: {
      createdAt: "create_at",
      updatedAt: "updated_at",
    },
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
