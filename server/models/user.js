const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: "Please enter your email",
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      requred: true,
    },
    documents: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
