const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// CREATE SCHEMA
const userSchema = new Schema(
  {
    username: { type: String, unique: true },
    password: { type: String },
    image: { type: String },
    transactions: [
      { productRequested: { type: Schema.Types.ObjectId, ref: "Product" } },
      { productOffer: { type: Schema.Types.ObjectId, ref: "Product" } },
      { approved: Boolean },
    ],
    products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    requests: [
      {
        productRequested: { type: Schema.Types.ObjectId, ref: "Product" },
        productOffer: { type: Schema.Types.ObjectId, ref: "Product" },
        approved: { type: Boolean, default: false },
      },
    ],
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
